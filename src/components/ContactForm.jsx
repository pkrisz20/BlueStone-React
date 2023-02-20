import Select from 'react-select';
import "../styles/components/ContactForm.scss";

const ContactForm = () => {

    const options = [
        { value: 'Serbia', label: 'Serbia' },
        { value: 'Hungary', label: 'Hungary' },
        { value: 'Germany', label: 'Germany' },
        { value: 'England', label: 'England' },
        { value: 'France', label: 'France' },
        { value: 'Russia', label: 'Russia' },
        { value: 'Croatia', label: 'Croatia' },
    ];

    return (
        <section className='contact-form'>
            <div className="wrapper">
                <div className="contact-form-texts">
                    <h2 className="contact-form-texts-main">Do you have a project?</h2>
                    <h2 className="contact-form-texts-submain">Lets Talk.</h2>
                    <p className="contact-form-texts-paragraph">Please fill in the details and we will be in touch shortly or send us email or Call us</p>
                    <a className="contact-form-texts-email" href="mailto:sales@bluestoneworldwide.com">sales@bluestoneworldwide.com</a>
                    <a className="contact-form-texts-tel" href="tel:99251 77600">99251 77600</a>
                </div>

                <div className="contact-form-container">
                    <h4 className="contact-form-container-info">Complete the form below...</h4>
                    <form>
                        <div className="form-row">
                            <div className="form-row-item">
                                <label htmlFor="fullname" className="form-label">Full Name</label>
                                <input className="form-input" id="fullname" type="text" placeholder="Full Name" />
                            </div>
                            <div className="form-row-item">
                                <label htmlFor="company" className="form-label">Your Company Name</label>
                                <input className="form-input" id="company" type="text" placeholder="Your Company Name" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-row-item">
                                <label htmlFor="email" className="form-label">Business email</label>
                                <input className="form-input" id="email" type="text" placeholder="Business email" />
                            </div>
                            <div className="form-row-item">
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input className="form-input" id="phone" type="number" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-row-item">
                                <label htmlFor="country" className="form-label">Select your Country</label>
                                <Select
                                    className="form-input"
                                    classNamePrefix="select"
                                    placeholder="Select your Country"
                                    defaultValue={null}
                                    isClearable={true}
                                    isSearchable={true}
                                    name="country"
                                    id="country"
                                    options={options}
                                />
                            </div>
                            <div className="form-row-item">
                                <label htmlFor="services" className="form-label">What service are you interested in?</label>
                                <input className="form-input" id="services" type="text" placeholder="What service are you interested in?" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-row-item">
                                <label htmlFor="description" className="form-label">Tell us about your Project</label>
                                <textarea className="form-input--textarea" id="description" placeholder="Tell us about your Project" />
                            </div>
                        </div>
                        <div className="form-row">
                            <button className="form-submit" type="submit">Send a request</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
