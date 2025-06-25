import Text from "../atoms/Text"
import NavLink from "../atoms/NavLink"
import Image from "../atoms/Image"
import Icon from "../atoms/Icon"
import SiteLogo from "../molecules/SiteLogo"
import Img1 from '../../assets/images/Footer/1.png'
import Img2 from '../../assets/images/Footer/2.png'
import Img3 from '../../assets/images/Footer/3.png'
import Img4 from '../../assets/images/Footer/4.png'
import Img5 from '../../assets/images/Footer/5.png'
import Img6 from '../../assets/images/Footer/6.png'

const Footer = () => {
    const Icons = [
        {iconClass: "fa-brands fa-facebook"},
        {iconClass: "fa-brands fa-twitter"},
        {iconClass: "fa-brands fa-youtube"},
        {iconClass: "fa-brands fa-linkedin"},
    ]
    const navLinks = [
        {to: 'about', text: 'about us'},
        {to: 'product', text: 'product view'},
        {to: 'shop', text: 'shop now'},
        {to: 'collection', text: 'collection'},
        {to: 'mission', text: 'mission'},
        {to: 'contact', text: 'contact us'},
        {to: 'vision', text: 'vision'}
    ]
    const footerImages = [
        {src: Img1},
        {src: Img2},
        {src: Img3},
        {src: Img4},
        {src: Img5},
        {src: Img6},
    ]
    return (
        <footer>
            <div className="footer-content">
                <div className="main-column">
                    <section>
                        <SiteLogo/>
                        <Text tag='p' text='Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown.'/>
                    </section>
                    <div className="main-column-icons-container">
                        {Icons.map((icon, index) => (
                            <Icon key={index} iconClass={icon.iconClass}/>
                        ))}
                    </div>
                </div>
                <div className="nav-columns-container">
                    <div className="links-column">
                        <Text text='Links' tag='h4'/>
                        <ul>
                            {navLinks.map((link, index) => (
                                <li>
                                    <NavLink to={link.to} key={index} linkText={link.text}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="links-column">
                    <Text text='company support' tag='h4'/>
                        <ul>
                            {navLinks.map((link, index) => (
                                <li>
                                    <NavLink to={link.to} key={index} linkText={link.text}/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="instagram-column">
                    <Text tag='h4' text='follow us on instagram'/>
                    <div className="instagram-images-container">
                        {footerImages.map((img, index) => (
                            <Image src={img.src} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className="copyright">
                <Text tag='p' text='© Copyright, Company, 2020'/>
            </div>
        </footer>
    )
}
export default Footer