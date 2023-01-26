import { Scene } from "react-scrollmagic-r18";

const Experience = () => {
    return(
        <section id="experience" className="section section--dark section--exp ">
            <div className="wrapper">
                <div className="wrapper--push work-push-up">
                    {/* <div className="text-center"><h2 className="tagline tagline--long tagline--light">Experience</h2></div>
                    <br />
                    <br /> */}
                    <div className="exp-col">
                        <Scene classToggle="left-effect" reverse={true} offset={-300}>
                            <div className="exp-col--item">
                                {/* <p className="tagline tagline--short tagline--light">01</p> */}
                                <p className="exp-number">01</p>
                                <h6>Jun 2019 - Present</h6>
                                <h5>Tech Lead II (Front-end)</h5>
                                <p><a href="https://worksimpli.io/" target="_blank" rel="noreferrer nofollow">WorkSimpli Software, LLC.</a></p>
                                <p className="small"><strong>Technology: </strong> 
                                {/* HTML5, CSS/SCSS, JavaScript, ReactJS, Angular, JSON, Bootstrap, Git and Azure. */}

                                ReactJS, JavaScript, JSON, HTML5, CSS3, SCSS/SASS, TailwindCSS, TailwindUI, Styled Components, Bootstrap, Git, GitHub and Azure DevOps.
                                {/* ReactJS, Redux, REST API, JSON, HTML5, SCSS/SASS, React-Bootstrap, Git and Azure DevOps. */}
                                
                                </p>
                            </div>
                        </Scene>
                        <Scene classToggle="left-effect" reverse={true} offset={-300}>
                            <div className="exp-col--item">
                                <p className="exp-number">02</p>
                                <h6>Dec 2015 - Jun 2019</h6>
                                <h5>Sr. Front End Developer</h5>
                                <p className="company-name"><a href="https://indecomm.com/" target="_blank" rel="noreferrer nofollow">Indecomm Global Services Pvt. Ltd.</a></p>
                                <p className="product">Product: Quint Digital Media Limited</p>
                                <p className="small"><strong>Technology: </strong> 
                                {/* HTML5, CSS/SCSS, JavaScript, ReactJS, JSON, Google API, Bootstrap and GitHub. */}
                                ReactJS, JavaScript, JSON, Google API, HTML5, CSS3, SCSS/SASS, Bootstrap and GitHub.
                                </p>
                            </div>
                        </Scene>
                        <Scene classToggle="left-effect" reverse={true} offset={-300}>
                            <div className="exp-col--item">
                                <p className="exp-number">03</p>
                                <h6>Jul 2015 - Dec 2015</h6>
                                <h5>Sr. Front End Developer</h5>
                                <p><a href="https://braahmam.net/" target="_blank" rel="noreferrer nofollow">Braahmam Net Solutions Pvt. Ltd.</a></p>
                                <p className="small"><strong>Technology:</strong> HTML5, CSS3, SCSS/SASS, JavaScript, jQuery, WodrPress, Bootstrap and GitHub.</p>
                            </div>
                        </Scene>
                        <Scene classToggle="left-effect" reverse={true} offset={-300}>
                            <div className="exp-col--item">
                                <p className="exp-number">04</p>
                                <h6>Dec 2014 - Jul 2015</h6>
                                <h5>Sr. Front End Developer</h5>
                                <p><a href="https://jktech.com/" target="_blank" rel="noreferrer nofollow">JK Technosoft Ltd.</a></p>
                                <p className="small"><strong>Technology:</strong> HTML5, CSS3, SCSS/SASS, JavaScript, jQuery Bootstrap and GitHub.</p>
                            </div>
                        </Scene>
                        <Scene classToggle="left-effect" reverse={true} offset={-300}>
                            <div className="exp-col--item">
                                <p className="exp-number">05</p>
                                <h6>Mar 2013 - Dec 2014</h6>
                                <h5>UI/UX Developer</h5>
                                <p><a href="https://www.18thdigitech.com/" target="_blank" rel="noreferrer nofollow">18th DigiTech Pvt. Ltd.</a></p>
                                <p className="small"><strong>Technology:</strong> HTML5, CSS3, SCSS/SASS, JavaScript, jQuery, Bootstrap and GitHub.</p>
                            </div>
                        </Scene>
                        <Scene classToggle="left-effect" reverse={true} offset={-300}>
                            <div className="exp-col--item">
                                <p className="exp-number">06</p>
                                <h6>Jun 2011 - Mar 2013</h6>
                                <h5>UI Developer</h5>
                                <p><a href="http://www.frillmedia.com/" target="_blank" rel="noreferrer nofollow">Frill Media Pvt. Ltd.</a></p>
                                <p className="small"><strong>Technology:</strong> HTML5, CSS3, SCSS/SASS, JavaScript, jQuery, Bootstrap and GitHub.</p>
                                
                            </div>
                        </Scene>
                    </div>
                    {/* <Scene classToggle="scroll-left" reverse={true} offset={-200}>
                        <div className="text-center fade-left">
                            <a className="link--arrow link--light" href="https://www.linkedin.com/in/shahadat-hussain-97256988/"><span>Know more about me</span></a>
                        </div>
                    </Scene> */}

                    <Scene classToggle="fade-up" reverse={true} offset={-200}>
                        <div className="text-center fade-effect">
                            {/* <a href="#portfolio" className="btn btn-primary">View all work</a>
                            <div className="btn-group"><a href="" className="btn-pixels">View all work</a></div> */}
                            <div className="btn-effect">
                                <div className="btn-effect-point">
                                    <a href="https://www.linkedin.com/in/shahadat-hussain-97256988/" className="btn-effect-link"><span>Know more about me</span></a>
                                </div>
                            </div>
                        </div>
                    </Scene>


                </div>
            </div>
        </section>
    )
}

export default Experience;