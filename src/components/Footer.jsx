import { NavLink } from "react-router-dom";
import { CgPhone } from "react-icons/cg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import "../styles/components/footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="wrapper">
                <div className="footer-flex">
                    <div className="footer-flex-container">
                        <a className="logo" href="/">
                            <picture>
                                <source srcSet={ require('../assets/logo-white.webp')} type="image/webp" />
                                <img src={ require('../assets/logo-white.png') } type="image/png" alt="White BlueStone logo" />
                            </picture>
                            <div className="subtext">
                                <p>Empower Your Brand</p>
                            </div>
                        </a>

                        <div className="informations">
                            <h5 className="informations-country">India</h5>
                            <a href="https://www.google.com/maps/place/SATYA+TWO/@28.8082011,53.7732493,4z/data=!4m14!1m7!3m6!1s0x395e8366d33c3de5:0x16fb1ea27975b0dd!2sSATYA+TWO!8m2!3d23.0656825!4d72.5475466!16s%2Fg%2F11f38h_p5l!3m5!1s0x395e8366d33c3de5:0x16fb1ea27975b0dd!8m2!3d23.0656825!4d72.5475466!16s%2Fg%2F11f38h_p5l" className="informations-address" target="blank"><FaMapMarkerAlt /> <span>403, Satya Two, Near Ranna Park Bustop, Naranpura, Ahmedabad - 380013, Gujarat (India)</span></a>
                            <a className="informations-tel" href="tel:+91 98253 53267"><CgPhone /> <span>+91 98253 53267</span></a>
                            <a className="informations-email" href="mailto:info@bluestoneworldwide.com"><TfiEmail /> <span>info@bluestoneworldwide.com</span></a>
                        </div>

                        <div className="informations">
                            <h5 className="informations-country">Poland</h5>
                            <a href="https://www.google.com/maps/place/Telimeny+15,+05-270+Marki,+Poland/@50.644157,15.5433398,5.47z/data=!4m6!3m5!1s0x471ecf018fd5005d:0xa6a50b66d2dbd1a4!8m2!3d52.3119172!4d21.1001705!16s%2Fg%2F11hyt5fmlh" className="informations-address" target="blank"><FaMapMarkerAlt /> <span>Telimeny 15, Marki, Post Code 05-270, Warsaw, Poland (Europe)</span></a>
                            <a className="informations-tel" href="tel:+48 732 022 871"><CgPhone /> <span>+48 732 022 871</span></a>
                            <a className="informations-email" href="mailto:europe@bluestoneworldwide.com"><TfiEmail /> <span>europe@bluestoneworldwide.com</span></a>
                        </div>
                    </div>
                    <div className="footer-flex-grids">
                        <div className="quick-links">
                            <h4 className="quick-links-title">Exhibition</h4>
                            <a className="quick-links-link" href="/">Exhibition Design</a>
                            <a className="quick-links-link" href="/">Virtual Events</a>
                            <a className="quick-links-link" href="/">Merchandise</a>
                            <a className="quick-links-link" href="/">Event Marketing</a>
                            <a className="quick-links-link" href="/">Exhibition Stand Builders</a>
                            <a className="quick-links-link" href="/">Hybrid Events</a>
                            <a className="quick-links-link" href="/">Event Logistics</a>
                        </div>
                        <div className="quick-links">
                            <h4 className="quick-links-title">Digital</h4>
                            <a className="quick-links-link" href="/">Web Design</a>
                            <a className="quick-links-link" href="/">Animation</a>
                            <a className="quick-links-link" href="/">WordPress Development</a>
                            <a className="quick-links-link" href="/">Email Marketing</a>
                            <a className="quick-links-link" href="/">SEO</a>
                            <a className="quick-links-link" href="/">Social Marketing</a>
                            <a className="quick-links-link" href="/">App Design & Development</a>
                        </div>
                        <div className="quick-links">
                            <h4 className="quick-links-title">Branding</h4>
                            <a className="quick-links-link" href="/">Brand Strategy & Development</a>
                            <a className="quick-links-link" href="/">Rebranding</a>
                            <a className="quick-links-link" href="/">Logo Design</a>
                            <a className="quick-links-link" href="/">Packaging Design</a>
                            <a className="quick-links-link" href="/">Infographics</a>
                            <a className="quick-links-link" href="/">Presentation</a>
                        </div>
                        <div className="quick-links">
                            <h4 className="quick-links-title">Print</h4>
                            <a className="quick-links-link" href="/">Direct Mail</a>
                            <a className="quick-links-link" href="/">Digital Printing</a>
                            <a className="quick-links-link" href="/">Large Format</a>
                            <a className="quick-links-link" href="/">Point of Sale</a>
                            <a className="quick-links-link" href="/">Personalised Mailing</a>
                            <a className="quick-links-link" href="/">Exhibition & Event Planning</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-left">
                        <p className="footer-bottom-left-rights">Copyright &#169; 2022 Bluestone Exhibition and Event Pvt. Ltd.. All rights reserved</p>
                        <nav className="footer-bottom-left-navs">
                            <NavLink to="/">Terms of Use</NavLink>
                            <NavLink to="/">Privacy Policy</NavLink>
                            <NavLink to="/">Copyright Policy</NavLink>
                        </nav>
                    </div>

                    <div className="footer-bottom-right">
                        <a className='social' href="https://www.facebook.com/" target="blank"><i className="fab fa-facebook-f"></i></a>
                        <a className='social' href="https://twitter.com/" target="blank"><i className="fab fa-twitter"></i></a>
                        <a className='social' href="https://www.instagram.com/" target="blank"><i className="fab fa-instagram"></i></a>
                        <a className='social' href="https://rs.linkedin.com/" target="blank"><i className="fab fa-linkedin-in"></i></a>
                        <a className='social' href="https://www.youtube.com/" target="blank"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
