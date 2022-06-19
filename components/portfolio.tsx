import { Scene } from "react-scrollmagic-r18";
import { useState, useEffect } from "react";
import Image from 'next/image';
// import Port from "./portAPI";
// import PortCard from "./portCard";

interface IData {
    id: number
    href: string
    title: string
    description: string
    imgJPG: string
    imgWEBP: string
    imgAVIF: string
    btnTitle: string
}

const Portfolio = () => {
    const [data, setData] = useState<IData[]>([]);

    useEffect(() => {
        fetch("/api/portfolioAPI").then(res => res.json(
        )).then(res => (
            // console.log(res)
            setData(res)
        ));
    }, []);

    return (
        <section id="portfolio" className="section section--dark section--work">
            <div className="wrapper">
                <div className="wrapper--push work-push-up">

                    <div className="work-thumbs">
                        <Scene classToggle="fade-up" reverse={true} offset={-300}>
                            <div className="work-thumbs--item fade-effect">
                                <div className="hover-effect">
                                    <a href="https://pdfsimpli.com/" target="_blank" rel="noreferrer nofollow">
                                        <figure>
                                            <picture>
                                                <source type="image/webp" srcSet="/images/webp/port-recent.webp" />
                                                <source type="image/avif" srcSet="/images/avif/port-recent.avif" />
                                                <source type="image/jpeg" srcSet="/images/port-recent.jpg" />
                                                {/* <img decoding="async" loading="lazy" src={props.imgJPG} alt="Portfolio" /> */}
                                                <Image layout="responsive" loading="lazy" src="/images/port-recent.jpg" alt="Portfolio" width="1068" height="600" />
                                            </picture>
                                            <figcaption className="work-overlay">
                                                <div className="work-overlay--content">
                                                    <h4 className="work-item--text item-title">PDFSimpli.com</h4>
                                                    <h5 className="work-item--text item-description">Created component-based layout, ASP.NET MVC framework, Bootstrap, CSS pre-processor SCSS/SASS and Azure.</h5>
                                                    <button className="work-item--text item-btn" type="button" title="PDFSimpli.com">View Project</button>
                                                </div>
                                            </figcaption>
                                        </figure>
                                        <span className="link--icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z" /></svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </Scene>
                        {/* {Port.map((data) => (<PortCard {...data} key={data.id} />))} */}
                        {data?.map(item => (
                            <Scene classToggle="fade-up" reverse={true} offset={-300} key={item.id}>
                                <div className="work-thumbs--item fade-effect">
                                    <div className="hover-effect">
                                        <a href={item.href} target="_blank" rel="noreferrer nofollow">
                                            <figure>
                                                <picture>
                                                    <source type="image/webp" srcSet={item.imgWEBP} />
                                                    <source type="image/avif" srcSet={item.imgAVIF} />
                                                    <source type="image/jpeg" srcSet={item.imgJPG} />
                                                    {/* <img decoding="async" loading="lazy" src={props.imgJPG} alt="Portfolio" /> */}
                                                    <Image layout="responsive" loading="lazy" src={item.imgJPG} alt="Portfolio" width="495" height="495" />
                                                </picture>
                                                <figcaption className="work-overlay">
                                                    <div className="work-overlay--content">
                                                        <h4 className="work-item--text item-title">{item.title}</h4>
                                                        <h5 className="work-item--text item-description">{item.description}</h5>
                                                        <button className="work-item--text item-btn" type="button" title={item.btnTitle}>View Project</button>
                                                    </div>
                                                </figcaption>
                                            </figure>
                                            <span className="link--icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"/></svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </Scene>
                        ))}

                    </div>

                    <Scene classToggle="fade-up" reverse={true} offset={-300}>
                        <div className="text-center fade-effect">
                            {/* <a href="#portfolio" className="btn btn-primary">View all work</a>
                            <div className="btn-group"><a href="" className="btn-pixels">View all work</a></div> */}
                            <div className="btn-effect">
                                <div className="btn-effect-point">
                                    <a href="#portfolio" className="btn-effect-link"><span>View all work</span></a>
                                </div>
                            </div>
                        </div>
                    </Scene>

                </div>
            </div>
        </section>
    )
}

export default Portfolio;