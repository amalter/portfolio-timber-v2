<?php

function apt_customize_register( $wp_customize ) {
    // Theme Options Panel
    $wp_customize->add_panel( 'apt_theme_options', 
    array(
        //'priority'       => 100,
        'title'            => __( 'Theme Options', 'apt' ),
        'description'      => __( 'Theme Modifications like color scheme, theme texts and layout preferences can be done here', 'apt' ),
    ) 
    );

    // Text Options Section Inside Theme
    $wp_customize->add_section( 'apt_text_options', 
    array(
        'title'         => __( 'Text Options', 'apt' ),
        'priority'      => 1,
        'panel'         => 'apt_theme_options'
    ) 
    );

    // Setting for Copyright text.
    $wp_customize->add_setting( 'apt_copyright_text',
    array(
        'default'           => __( 'All rights reserved ', 'apt' ),
        'sanitize_callback' => 'sanitize_text_field',
        'transport'         => 'refresh',
    )
    );

    // Control for Copyright text
    $wp_customize->add_control( 'apt_copyright_text', 
    array(
        'type'        => 'text',
        'priority'    => 10,
        'section'     => 'apt_text_options',
        'label'       => 'Copyright text',
        'description' => 'Text put here will be outputted in the footer',
    ) 
    );
}

add_action( 'customize_register', 'apt_customize_register' );

