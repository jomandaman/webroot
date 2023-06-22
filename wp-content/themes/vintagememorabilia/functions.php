<?php

// ACF utilities
include('lib/acf.php');

// Register Custom Post Types
include('lib/custom-post-types.php');

// General WP Config
include('lib/general-config.php');

// General Custom functions
include('lib/general-functions.php');

// Styles/Scripts (CSS/JS)
include('lib/styles-scripts.php');

// Ajax handlers
include('lib/ajax.php');

// Item CPT API
include('api/api.item.inc.php');
include('api/api.person.inc.php');

// Search related
include('lib/search.php');
?>