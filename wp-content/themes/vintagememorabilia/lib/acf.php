<?php  

// 
// Build an ACF Link
// 
function build_acf_link($acf_field, $attributes=array())
{
    $url = esc_url($acf_field['url']);
    $text = $acf_field['title'];
    $attrs = ' ';

    if( !empty($acf_field['target']) )
    {
        // get the acf provided target
        $target = $acf_field['target'];

        // if it's target="_blank" instead of "_blank", extract the target value from the string
        if( stristr($target, 'target') )
        {
            $target = preg_match('/\"([_a-z]+)/', $target, $matches);
            $target = $matches[1];
        }

        $attributes['target'] = $target;
    }

    if( !empty($attributes) )
    {
        foreach($attributes as $name => $value)
        {
            $attrs .= $name .'="' . esc_attr($value) . '" ';
        }
    }
    
    $link = '<a href="' . $url . '" ' . $attrs . '>' . $text . '</a>';

    return $link;
}

// 
// Build an ACF Image
// 
function build_acf_image($acf_field, $attributes=array(), $options=array() )
{
    $image = '';
    
    $url = $acf_field['url'];

    if( !empty($options['size']) )
    {
        $url = get_acf_image_size($acf_field, $options['size']);
    }

    if( !empty($url) )
    {
        $attrs = ' ';
        $attributes['alt'] = $acf_field['alt'];

        if( !empty($options['srcset-size']) )
        {
            $srcset_data = get_srcset($acf_field);
            if( !empty($srcset_data['srcset']) )
            {
                $attributes['srcset'] = $srcset_data['srcset'];
            }
            if( !empty($srcset_data['sizes']) )
            {
                $attributes['sizes'] = $srcset_data['sizes'];
            }
        }
        
        foreach($attributes as $name => $value)
        {
            $attrs .= $name .'="' . $value . '" ';
        }
        
        $image = '<img src="' . $url . '" ' . $attrs . ' />';
    }
    
    return $image;    
}

//
// Get srcset attribute for an image 
//

function get_srcset($image, $sizes='')
{
    // don't handle a null value
    if(empty($image) || empty($image['url']) ) return '';

    $sizes_map = array(
        '50-50'  => '(max-width: 768px) 100vw, 50vw', // full width at mobile, half at desktop
    );
    
    if( !empty($sizes_map[$sizes]) )
    {
        $sizes = $sizes_map[$sizes];
    }
    
    $attachment_id = $image['ID'];
    $image_meta = wp_get_attachment_metadata($attachment_id);
        
    if (!is_array($image_meta)) return '';


    $src = $image['url'];
    $width = $image['width'];
    $height = $image['height'];
        
    $size_array = array(absint($width), absint($height));
    $srcset = wp_calculate_image_srcset($size_array, $src, $image_meta, $attachment_id);
                        
    if( empty($sizes) )
    {
        $sizes = wp_calculate_image_sizes($size_array, $src, $image_meta, $attachment_id);
    }

    return array(
        'srcset' => $srcset,
        'sizes' => $sizes,
    );
}


// 
// Get an image size, if it exists, or default to url
// 
function get_acf_image_size($image, $size, $default='url')
{
    if(empty($image)) return '';

    if( !empty($image['sizes'][$size]) ) 
    {
        return $image['sizes'][$size];
    }

    if( !empty($image['url']) ) 
    {
        return $image['url'];
    }

    return '';    
}

// 
// Get a headline placeholder image, if it exists
// 
function get_headline_placeholder()
{
    $url = '';
    $placeholder = get_field('placeholder', 'option');
    if( !empty($placeholder['url']) )
    {
        $url = $placeholder['url'];
    }
    return $url;
}


/* ACF: Hide ACF menu on staging/production */
function custom_hide_acf_admin() {
		
    $site_url = get_bloginfo( 'url' );
 
    $protected_urls = array(
        'https://walshconstruction.metricmedia.com',
        'http://walshconstruction.metricmedia.com'
    );

    if ( in_array( $site_url, $protected_urls ) ) {
        return false;  
    } else {
        return true;    
    }
  
}
add_filter('acf/settings/show_admin', 'custom_hide_acf_admin');
