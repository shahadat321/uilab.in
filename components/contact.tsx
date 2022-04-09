import React, { useState } from "react";
import { Scene } from "react-scrollmagic";

const Contact = () => {
  const [error, setError] = useState<null | string>(null);
  const [success, setSuccess] = useState<null | string>(null);

  //state = {error: null, success: null}
  const onSubmit = (e:any) => {
    e.preventDefault();
    fetch(
      "https://script.google.com/macros/s/AKfycbw31RppvJmmR-jHf3hS9BhtAcLVlL8FHqDs-mMeE10khROwvg/exec",
      {
        method: "POST",
        body: new FormData(e.currentTarget),
      }
    )
      .then((response) => {
        console.log("Thanks your feedback!");
        setSuccess("Thanks your feedback!");

        setTimeout(() => {
          setSuccess(null);
        }, 3000);
        e.target.reset();
      })
      .catch((error) => {
        setError("All fields are mandatory");
        setTimeout(() => {
          setError(null);
        }, 3000);
      });
  };

  return(
    <section id="contact" className="section section--dark section--contact chunk--see-more">
        <div className="wrapper">
            <div className="wrapper--push">
                <Scene classToggle="fade-up" reverse={true} offset={-200}>
                    <div className="text-center fade-effect">
                        <h3 className="tagline tagline--long tagline--light">Want to share</h3>
                        <p className="contact--text">Any comments and suggestions will be appreciated.</p>
                    </div>
                </Scene>
                <Scene classToggle="fade-up" reverse={true} offset={-200}>
                    <div className="contact-col contact--form fade-effect">
                        <form onSubmit={onSubmit} className="form-wrap">
                            <div className="contact-col--item">
                                <div className="form-group">
                                    <input id="name" name="name" className="form-control" type="text" placeholder=" " required />
                                    <label htmlFor="name" className="form-label">Name</label>
                                </div>
                            </div>
                            <div className="contact-col--item">
                                <div className="form-group">
                                    <input id="email" name="email" className="form-control" type="email" placeholder=" " required />
                                    <label htmlFor="email" className="form-label">Email</label>
                                </div>
                            </div>
                            <div className="contact-col--item item-fluid">
                                <div className="form-group">
                                    <textarea id="comment" name="comment" className="form-control form-control--textarea" placeholder=" " required></textarea>
                                    <label htmlFor="comment" className="form-label">Feedback</label>
                                </div>
                            </div>

                            <div className="contact-col--item item-fluid text-center">
                                {/* <button className="btn btn-primary" type="submit">Submit</button> */}
                                <div className="btn-effect">
                                    <div className="btn-effect-point">
                                        <button className="btn-effect-link" type="submit"><span>Submit</span></button>
                                    </div>
                                </div>
                            </div>
                            
                            <span className="submit-message">
                                <span className="error-message">{error}</span>
                                <span className="success-message">{success}</span>
                            </span>

                            <div className="contact-col--item item-fluid text-center site-nominee">
                                <a href="https://www.csswinner.com/details/shahadat-hussain-frontend-developer/15939" target="_blank" rel="noreferrer">
                                    <span>Site of the day nominated in:</span>
                                    <img decoding="async" loading="lazy" src="/images/nominee-white-2.png" alt="Site of the day CSS Winner" title="Site of the day CSS Winner" />
                                </a>
                            </div>

                        </form>
                    </div>
                </Scene>
                <Scene classToggle="fade-up" reverse={true} offset={-500}>
                    <div className="contact-col contact--form fade-effect">
                        <div className="contact-col--item item-fluid text-center">
                            <p className="contact-phone"><a href="https://wa.me/919910613200?text=Hi%20there,%20How%20are%20you%20doing?"> <img className="whatsapp-icon" src="./images/whatsapp.png" width="30" height="30" loading="lazy" alt="" /> +91-99106132<span className="is-desktop">00</span><span className="animate-text tel"><b>...00</b></span></a></p>

                            <p className="contact-email"><a href="mailto:shahadat.rockstar@gmail.com">shahadat.rock<span className="is-desktop">star</span><span className="animate-text"><b>...star</b></span>@<span className="animate-text--last">gmail.com</span></a></p>

                            <p className="contact-social"><a href="https://www.linkedin.com/in/shahadat-hussain-97256988/" target="_blank" rel="noreferrer">LinkedIn</a> <a href="https://github.com/shahadat321" target="_blank" rel="noreferrer">GitHub</a> <a href="https://twitter.com/shahadat15" target="_blank" rel="noreferrer">Twitter</a></p>
                            <p className="copyright">© 2011-22 <a href="https://uilab.in/">UILab.in</a> All right reserved.</p>
                        </div>
                    </div>
                </Scene>
            </div>
            
        </div>
    </section>
)
};
export default Contact;
