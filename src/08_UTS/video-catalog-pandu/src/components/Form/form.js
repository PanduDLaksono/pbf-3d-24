import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form id="contact-form" class="tm-contact-form" onSubmit={handleSubmit}>
            <div class="form-group">
                <div >
                    <Field
                        class="form-control rounded-0"
                        name="name"
                        component="input"
                        type="text"
                        placeholder="Name"
                        required=""
                    />
                </div>
            </div>
            <div class="form-group">
                <div >
                    <Field
                        class="form-control rounded-0"
                        name="email"
                        component="input"
                        type="email"
                        placeholder="Email"
                        required=""
                    />
                </div>
            </div>
            <div class="form-group">
                <div >
                    <Field name="inquiry" component="select" class="form-control" id="contact-select" class="form-control">
                        <option value="-">Subject</option>
                        <option value="sales">Sales &amp; Marketing</option>
                        <option value="creative">Creative Design</option>
                        <option value="uiux">UI / UX</option>
                    </Field>
                </div>
            </div>
            <div class="form-group">
                <div >
                    <Field
                        class="form-control rounded-0"
                        name="message"
                        id="employed"
                        component="textarea"
                        type="text"
                        placeholder="Message"
                        required=""
                        rows="8"
                    />
                </div>
            </div>

            <div class="form-group mb-0">
                <button type="submit" class="btn btn-primary rounded-0 d-block ml-auto mr-0 tm-btn-animate tm-btn-submit tm-icon-submit">
                    <span>
                        Submit
                    </span>
                </button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'simple',
})(SimpleForm);