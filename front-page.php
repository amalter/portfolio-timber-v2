<?php

$context = Timber::context();

$timber_post     = Timber::get_post();
$context['post'] = $timber_post;
Timber::render( array( 'front-page.twig', 'page.twig' ), $context );
