import { Scene } from "react-scrollmagic-r18";
import Image from 'next/image';

const PortCard = (props:any) => {
    return(
        <Scene classToggle="fade-up" reverse={true} offset={-300}>
            <div className="work-thumbs--item fade-effect">
                <div className="hover-effect">
                    <a href={props.href} target="_blank" rel="noreferrer nofollow">
                        <figure>
                            <picture>
                                <source type="image/webp" srcSet={props.imgWEBP} />
                                <source type="image/avif" srcSet={props.imgAVIF} />
                                <source type="image/jpeg" srcSet={props.imgJPG} />
                                {/* <img decoding="async" loading="lazy" src={props.imgJPG} alt="Portfolio" /> */}
                                <Image layout="responsive" loading="lazy" src={props.imgJPG} alt="Portfolio" width="495" height="495" />
                            </picture>
                            <figcaption className="work-overlay">
                                <div className="work-overlay--content">
                                    <h4 className="work-item--text item-title">{props.title}</h4>
                                    <h5 className="work-item--text item-description">{props.description}</h5>
                                    <button className="work-item--text item-btn" type="button" title={props.btnTitle}>View Project</button>
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
    )
}

export default PortCard;