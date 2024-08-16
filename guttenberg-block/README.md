# Guttenberg Example Block

This Gutenberg block example provides a simple contact form with fields for a title, email, and message. It includes:

- PHP Code to register the block and handle server-side rendering.
- JavaScript Code to define the block's behavior and appearance in the editor and on the frontend.
- SCSS Files for styling the block in both the editor and frontend.

To use this block, simply place the plugin folder in your WordPress `wp-content/plugins` directory, activate it from the WordPress admin panel, and then you can add the "Contact Form" block to your posts or pages.

## Structure

Each file plays a critical role in the development and functionality of the custom Gutenberg block:

- [index.php](index.php): This file registers the Gutenberg block and enqueues the necessary scripts and styles for both the editor and the frontend. It also defines a render callback function to handle how the block's output is displayed on the frontend.

- [src/block.js](src/block.js): This JavaScript file defines the Gutenberg block using React. It includes the block's attributes, edit interface (for the block editor), and save function (for the frontend). It also imports styling files for the block's appearance in the editor and on the frontend.

- [src/editor.scss](src/editor.scss): This SCSS file contains styles specific to the Gutenberg block editor, ensuring that the block looks good while being edited.

- [src/style.scss](src/style.scss): This SCSS file includes styles for the block as it appears on the frontend of the website, providing a consistent look and feel when the block is published.

- [webpack.config.js](webpack.config.js): This configuration file sets up Webpack to handle the building process for the JavaScript and SCSS files. It specifies how to process and bundle these files for use in the block.

- [.babelrc](.babelrc): This file configures Babel to transpile JavaScript code, allowing the use of modern JavaScript features and JSX syntax in the block's code.