<?php
defined('BASEPATH') or exit('No direct script access allowed');

/*
|---------------------------------------------------------------
| UPDATE - 1.2.2 => 1.2.3
|---------------------------------------------------------------
*/

$system_info	= null;
$add_tables		= null;
$drop_tables	= null;
$rename_tables	= null;
$add_column		= null;
$modify_column	= null;
$drop_column	= null;

/*
|---------------------------------------------------------------
| VERSION INFO FOR THE DATABASE
|---------------------------------------------------------------
*/

$system_info = array(
    'sys_last_update'		=> now(),
    'sys_version_major'		=> 1,
    'sys_version_minor'		=> 2,
    'sys_version_update'	=> 3
);

/*
|---------------------------------------------------------------
| TABLES TO ADD
|
| $add_tables = array(
|	'table_name' => array(
|		'id' => 'table_id',
|		'fields' => 'fields_table_name')
| );
|
| $fields_table_name = array(
|	'table_id' => array(
|		'type' => 'INT',
|		'constraint' => 6,
|		'auto_increment' => TRUE),
|	'table_field_1' => array(
|		'type' => 'VARCHAR',
|		'constraint' => 255,
|		'default' => ''),
|	'table_field_2' => array(
|		'type' => 'INT',
|		'constraint' => 4,
|		'default' => '99')
| );
|---------------------------------------------------------------
*/

if (! is_null($add_tables)) {
    foreach ($add_tables as $key => $value) {
        $this->dbforge->add_field($$value['fields']);
        $this->dbforge->add_key($value['id'], true);
        $this->dbforge->create_table($key, true);
    }
}

/*
|---------------------------------------------------------------
| TABLES TO DROP
|
| $drop_tables = array('table_name');
|---------------------------------------------------------------
*/

if (! is_null($drop_tables)) {
    foreach ($drop_tables as $value) {
        $this->dbforge->drop_table($value);
    }
}

/*
|---------------------------------------------------------------
| TABLES TO RENAME
|
| $rename_tables = array('old_table_name' => 'new_table_name');
|---------------------------------------------------------------
*/

if (! is_null($rename_tables)) {
    foreach ($rename_tables as $key => $value) {
        $this->dbforge->rename_table($key, $value);
    }
}

/*
|---------------------------------------------------------------
| COLUMNS TO ADD
|
| $add_column = array(
|	'table_name' => array(
|		'field_name_1' => array('type' => 'TEXT'),
|		'field_name_2' => array(
|			'type' => 'VARCHAR',
|			'constraint' => 100)
|	)
| );
|---------------------------------------------------------------
*/

if (! is_null($add_column)) {
    foreach ($add_column as $key => $value) {
        $this->dbforge->add_column($key, $value);
    }
}

/*
|---------------------------------------------------------------
| COLUMNS TO MODIFY
|
| $modify_column = array(
|	'table_name' => array(
|		'old_field_name' => array(
|			'name' => 'new_field_name',
|			'type' => 'TEXT')
|	)
| );
|---------------------------------------------------------------
*/

if (! is_null($modify_column)) {
    foreach ($modify_column as $key => $value) {
        $this->dbforge->modify_column($key, $value);
    }
}

/*
|---------------------------------------------------------------
| COLUMNS TO DROP
|
| $drop_column = array(
|	'table_name' => array('field_name')
| );
|---------------------------------------------------------------
*/

if (! is_null($drop_column)) {
    foreach ($drop_column as $key => $value) {
        $this->dbforge->drop_column($key, $value[0]);
    }
}

/*
|---------------------------------------------------------------
| DATA TO INSERT/UPDATE/DELETE
|---------------------------------------------------------------
*/

/* End of file update_122.php */
/* Location: ./application/assets/update/update_122.php */
