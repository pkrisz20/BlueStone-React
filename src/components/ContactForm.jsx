import { useState, useRef } from 'react';
import { contactSchema } from "../validations/contactValidation";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IoCloseSharp } from "react-icons/io5";
import "../styles/components/ContactForm.scss";
import useToggle from "../hooks/useToggle";

const ContactForm = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [toggleSelector, setToggleSelector] = useToggle(false);
    const formRef = useRef(null);

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        resolver: yupResolver(contactSchema),
    });

    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
    }

    const submitForm = (data) => {
        console.table(data);
        formRef.current.reset();
    }

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
                    <form onSubmit={ handleSubmit(submitForm) } ref={ formRef }>
                        <div className="form-row">
                            <div className={`form-row-item ${errors.fullname ? 'invalid' : ''}`}>
                                <label htmlFor="fullname" className="form-label">Full Name</label>
                                <input className="form-input" id="fullname" name="fullname" type="text" placeholder="Full Name" {...register("fullname")} />
                                {
                                    errors.fullname && (
                                        <>
                                            <small className='form-row-item-error'>{ errors.fullname?.message }</small>
                                            <IoCloseSharp className="form-row-item-wrong" />
                                        </>
                                    )
                                }
                            </div>
                            <div className={`form-row-item ${errors.company ? 'invalid' : ''}`}>
                                <label htmlFor="company" className="form-label">Your Company Name</label>
                                <input className="form-input" id="company" name="company" type="text" placeholder="Your Company Name" {...register("company")} />
                                {
                                    errors.company && (
                                        <>
                                            <small className='form-row-item-error'>{ errors.company?.message }</small>
                                            <IoCloseSharp className="form-row-item-wrong" />
                                        </>
                                    )
                                }
                            </div>
                        </div>
                        <div className="form-row">
                            <div className={`form-row-item ${errors.email ? 'invalid' : ''}`}>
                                <label htmlFor="email" className="form-label">Business email</label>
                                <input className="form-input" id="email" name="email" type="text" placeholder="Business email" {...register("email")} />
                                {
                                    errors.email && (
                                        <>
                                            <small className='form-row-item-error'>{ errors.email?.message }</small>
                                            <IoCloseSharp className="form-row-item-wrong" />
                                        </>
                                    )
                                }
                            </div>
                            <div className={`form-row-item ${errors.phone ? 'invalid' : ''}`}>
                                <label htmlFor="phone" className="form-label">Phone Number</label>
                                <input className="form-input" id="phone" name="phone" type="number" placeholder="Phone Number" {...register("phone")} />
                                {
                                    errors.phone && (
                                        <>
                                            <small className='form-row-item-error'>{ errors.phone?.message }</small>
                                            <IoCloseSharp className="form-row-item-wrong" />
                                        </>
                                    )
                                }
                            </div>
                        </div>
                        <div className="form-row">
                            <div className={`form-row-item selector ${errors.country ? 'invalid' : ''} ${toggleSelector ? 'selector-open' : ''}`}>
                                <label htmlFor="country" className="form-label">Country</label>
                                <select className='select' name="country" id='country' defaultValue={ selectedCountry } onChange={ handleChange } {...register("country")} onClick={ setToggleSelector }>
                                    <option disabled={true} value="">
                                        Select your Country
                                    </option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Germany">Germany</option>
                                </select>
                                {
                                    errors.country && (
                                        <>
                                            <small className='form-row-item-error'>{ errors.country?.message }</small>
                                            <IoCloseSharp className="form-row-item-wrong" />
                                        </>
                                    )
                                }
                            </div>
                            <div className={`form-row-item ${errors.services ? 'invalid' : ''}`}>
                                <label htmlFor="services" className="form-label">What service are you interested in?</label>
                                <input className="form-input" id="services" name="services" type="text" placeholder="What service are you interested in?" {...register("services")} />
                                {
                                    errors.services && (
                                        <>
                                            <small className='form-row-item-error'>{ errors.services?.message }</small>
                                            <IoCloseSharp className="form-row-item-wrong" />
                                        </>
                                    )
                                }
                            </div>
                        </div>
                        <div className="form-row">
                            <div className={`form-row-item ${errors.description ? 'invalid' : ''}`}>
                                <label htmlFor="description" className="form-label">Tell us about your Project</label>
                                <textarea className="form-input--textarea" id="description" name="description" placeholder="Tell us about your Project" {...register("description")} />
                                {
                                    errors.description && (
                                        <>
                                            <small className='form-row-item-error'>{ errors.description?.message }</small>
                                            <IoCloseSharp className="form-row-item-wrong" />
                                        </>
                                    )
                                }
                            </div>
                        </div>
                        <div className="form-row">
                            <button className="form-submit" type="submit" value="Submit">Send a request</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
