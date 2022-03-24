<?php
defined('BASEPATH') or exit('No direct script access allowed');

/**
 * Thresher library
 *
 * @package		Nova
 * @category	Library
 * @author		Anodyne Productions
 * @copyright	2010-11 Anodyne Productions
 * @version		1.0
 */

class Thresher
{
    public $parsetype = 'html';

    public function __construct($params = array())
    {
        if (is_array($params)) {
            foreach ($params as $key => $value) {
                $this->$key = $value;
            }
        }

        /* log the debug message */
        log_message('debug', 'Thresher Library Initialized');
    }

    public function parse($text = '')
    {
        $retval = $text;

        switch ($this->parsetype) {
            case 'bbcode':
                $retval = $this->_bbcode($text);
            break;

            case 'html':
                $retval = $this->_html($text);
            break;

            case 'markdown':
                $retval = $this->_markdown($text);
            break;

            case 'textile':
                $retval = $this->_textile($text);
            break;
        }

        return $retval;
    }

    public function _bbcode($text = '')
    {
        include_once APPPATH .'libraries/Thresher_BBCode.php';

        return bbcode($text);
    }

    public function _html($text = '')
    {
        return $text;
    }

    public function _markdown($text = '')
    {
        include_once APPPATH .'libraries/Thresher_Markdown.php';

        return Markdown($text);
    }

    public function _textile($text = '')
    {
        include_once APPPATH .'libraries/Thresher_Textile.php';

        $textile = new Textile();

        return $textile->TextileThis($text);
    }
}
