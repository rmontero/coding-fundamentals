<?php
/**
 * Plugin Name: Rob's Sample Gutenberg Block
 * Description: A custom Gutenberg block that displays a contact form.
 * Version: 1.0.0
 * Author: Rob Montero
 */

defined( 'ABSPATH' ) || exit;

function my_gutenberg_block_register_block() {
    wp_register_script(
        'my-gutenberg-block',
        plugins_url( '/dist/block.js', __FILE__ ),
        array( 'wp-blocks', 'wp-editor', 'wp-element', 'wp-components' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'dist/block.js' )
    );

    wp_register_style(
        'my-gutenberg-block-editor',
        plugins_url( '/dist/editor.css', __FILE__ ),
        array( 'wp-edit-blocks' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'dist/editor.css' )
    );

    wp_register_style(
        'my-gutenberg-block-style',
        plugins_url( '/dist/style.css', __FILE__ ),
        array(),
        filemtime( plugin_dir_path( __FILE__ ) . 'dist/style.css' )
    );

    register_block_type( 'my-plugin/contact-form', array(
        'editor_script' => 'my-gutenberg-block',
        'editor_style'  => 'my-gutenberg-block-editor',
        'style'         => 'my-gutenberg-block-style',
        'render_callback' => 'my_gutenberg_block_render_callback',
    ) );
}
add_action( 'init', 'my_gutenberg_block_register_block' );

function my_gutenberg_block_render_callback( $attributes ) {
    ob_start();
    ?>
    <div class="contact-form-block">
        <h2><?php echo esc_html( $attributes['title'] ); ?></h2>
        <form>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value="<?php echo esc_attr( $attributes['email'] ); ?>" />
            <label for="message">Message:</label>
            <textarea id="message" name="message"><?php echo esc_textarea( $attributes['message'] ); ?></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
    <?php
    return ob_get_clean();
}
