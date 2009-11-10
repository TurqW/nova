<?php if (!defined('BASEPATH')) exit('No direct script access allowed'); 
/*
|---------------------------------------------------------------
| MAINTENANCE HOOK
|---------------------------------------------------------------
|
| File: hooks/Maintenance.php
| System Version: 1.0
|
| Library for maintenance mode
|
*/

class Maintenance {
	
	function Maintenance()
	{
		/* log the debug message */
		log_message('info', 'Maintenance Hook Initialized');
	}
	
	function main()
	{
		$ci =& get_instance();
		
		$ignore = array('install', 'login', 'update', 'upgrade');
		
		if (!in_array($ci->uri->segment(1), $ignore))
		{
			if ($ci->settings->get_setting('maintenance') == 'on' && $ci->uri->segment(1) != 'login')
			{
				$sysadmin = $ci->auth->is_sysadmin($ci->session->userdata('userid'));
				
				if ($sysadmin === FALSE)
				{
					$view = view_location('maintenance', $ci->settings->get_setting('skin_login'), 'login');
					
					if (file_exists(APPPATH .'views/'. $view .'.php'))
					{
						$data = $ci->load->view($view, '', TRUE);
						
						echo $data;
						exit();
					}
					else
					{
						redirect('login/index');
					}
				}
			}
		}
	}
}

/* End of file Maintenance.php */
/* Location: ./application/hooks/Maintenance.php */