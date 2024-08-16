import { registerBlockType } from '@wordpress/blocks';
import { TextControl, TextareaControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import './style.scss';

registerBlockType('my-plugin/contact-form', {
    title: 'Contact Form',
    category: 'widgets',
    icon: 'email',
    attributes: {
        title: {
            type: 'string',
            default: 'Contact Us',
        },
        email: {
            type: 'string',
            default: '',
        },
        message: {
            type: 'string',
            default: '',
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const blockProps = useBlockProps();
        return (
            <div { ...blockProps }>
                <TextControl
                    label="Title"
                    value={ attributes.title }
                    onChange={ ( title ) => setAttributes( { title } ) }
                />
                <TextControl
                    label="Email"
                    value={ attributes.email }
                    onChange={ ( email ) => setAttributes( { email } ) }
                />
                <TextareaControl
                    label="Message"
                    value={ attributes.message }
                    onChange={ ( message ) => setAttributes( { message } ) }
                />
            </div>
        );
    },
    save: ({ attributes }) => {
        const blockProps = useBlockProps.save();
        return (
            <div { ...blockProps }>
                <h2>{ attributes.title }</h2>
                <form>
                    <label>Email:</label>
                    <input type="email" value={ attributes.email } readOnly />
                    <label>Message:</label>
                    <textarea value={ attributes.message } readOnly />
                    <button type="submit">Send</button>
                </form>
            </div>
        );
    },
});
