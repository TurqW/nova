<?php
defined('BASEPATH') or exit('No direct script access allowed');

/**
 * Library for event management. An event is triggered by {@see trigger()} and
 * callbacks can be attached to trigger during these events via {@see listen()}.
 * This library makes it possible to hook into actions such as
 * {@see Nova_location::view()} and the {@see CI_DB_active_record} mutator
 * functions.
 *
 * @package		Nova
 * @category	Library
 * @author		Anodyne Productions
 * @copyright	2018 Anodyne Productions
 */

abstract class Nova_event
{
    public $callbacks = [];

    /**
     * Trigger an event that will invoke callbacks registered via {@see listen()}
     * in the most specific to least specific, first define to last defined, order
     * generated by {@see fetch_callbacks_for_event()}.
     *
     * @param string[] $event name segmemts (eg: ['location','view','data'])
     * @param mixed[]  $payload sent to listener callbacks, which may include
     *                    pass-by-reference keys to allow listener callbacks to
     *                    mutate
     */
    public function fire($event, $payload)
    {
        if (is_string($event)) {
            $event = explode('.', $event);
        }

        $callbacks = $this->fetch_callbacks_for_event($event);

        // Send the name of the event with the special key _ci_event in case a
        // listener is defined across a namespace (as opposed to just a terminating
        // event) yet still wants to isolate is execution to only some subset of
        // events.
        $payload['_ci_event'] = $event;

        foreach ($callbacks as $callback) {
            $callback($payload);
        }
    }

    /**
     * Register a callback for the event segments specified as $event. This
     * callback will be executed whenever {@see trigger()} is called for an
     * event with all the same segments.
     *
     * A listener may be defined for an $event that is only some of the segments
     * specified in $event from trigger(). If multiple listeners have been
     * attached, they will execute in order of most-specific to least-specific.
     *
     * Given these callbacks:
     *
     *      $this->event->listen(['location', 'view', 'output'], function($event){
     *        $event['output'] .= 'c';
     *      });
     *      $this->event->listen(['location', 'view', 'output'], function($event){
     *        $event['output'] .= 'd';
     *      });
     *
     *      $this->event->listen(['location', 'view', 'output', 'main', 'index'],
     *          function($event){
     *        $event['output'] .= 'a';
     *      });
     *
     *      $this->event->listen(['location', 'view', 'output', 'main', 'index'],
     *          function($event){
     *        $event['output'] .= 'b';
     *      });
     *
     * The following string will be added to the output:
     *
     *      abcd
     *
     * @param string[] $event name segmemts (eg: ['location','view','data'])
     * @param callback $callback to be invoked when matching event is triggered
     */
    public function listen($event, $callback)
    {
        $callback_subarray_pointer =& $this->callbacks;

        if (is_string($event)) {
            $event = explode('.', $event);
        }

        while ($event_segment = array_shift($event)) {
            if (!isset($callback_subarray_pointer['_children'][$event_segment])) {
                $callback_subarray_pointer['_children'][$event_segment] = [
          // Store callbacks for more specific events, where the key is the
          // more specific event segment and the value is itself an array with
          // the keys `_children` and `_callbacks`.
          '_children' => [],
          // Callbacks registered at this event specificity depth.
          '_callbacks' => []
        ];
            }

            $callback_subarray_pointer =& $callback_subarray_pointer['_children'][$event_segment];
        }

        $callback_subarray_pointer['_callbacks'][] = $callback;
    }

    /**
     * Return the set of callbacks registered via {@see listen()} for $event,
     * ordered from the first callback listener for the most specific event
     * to the last callback listener for the least specific event.
     *
     * @param string[] $event name segmemts (eg: ['location','view','data'])
     */
    public function fetch_callbacks_for_event($event)
    {
        // Once we iterate over $this->callbacks, this will be an array of all
        // callbacks with the first callback specified for the least specific event
        // route first in the stack and the last callback specified for the most
        // specific event last in the stack. It's thus intended to be executed in
        // reverse order.
        $callbackStack = [];

        // Start the pointer at the root segment.
        $callback_subarray_pointer =& $this->callbacks;

        while (true) {
            // Add each callback in reverse order, so when reversed again given that
            // $callbackStack is LIFO, the first one in this array (so the first one
            // added) will be executed first.
            if (!empty($callback_subarray_pointer['_callbacks'])) {
                foreach (array_reverse($callback_subarray_pointer['_callbacks']) as $callback) {
                    $callbackStack[] = $callback;
                }
            }

            $event_segment = array_shift($event);

            // Terminate the loop if there's no events specified under the next $event_segment
            // key or if there are no more segments left to traverse.
            if (!$event_segment || !isset($callback_subarray_pointer['_children'][$event_segment])) {
                break;
            }

            // Change the pointer to the next segment.
            $callback_subarray_pointer =& $callback_subarray_pointer['_children'][$event_segment];
        };

        // Reverse the stack so it can be read in sequential order with most
        // specific first.
        return array_reverse($callbackStack);
    }
}
