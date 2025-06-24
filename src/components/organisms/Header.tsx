import Button from "../atoms/Button"
import NavLink from "../atoms/NavLink"
import Icon from "../atoms/Icon"
import SiteLogo from "../molecules/SiteLogo"
const navLinks = [
    {to: 'about', text: 'about us'},
    {to: 'product', text: 'product view'},
    {to: 'shop', text: 'shop now'},
    {to: 'contact', text: 'contact us'}
]
const Header = () => {
    return (
        <header>
            <div className="header-content">
                <SiteLogo/>
                <section className="nav-and-action">
                    <nav>
                        {navLinks.map((navLink, index) => (
                            <div className="link" key={index}>
                                <NavLink  to={navLink.to} linkText={navLink.text}/>
                            </div>
                        ))}
                    </nav>
                    <div className="action">
                        <Icon iconClass='fa-solid fa-bag-shopping'/>
                        <Button buttonText='sign up'/>
                    </div>
                </section>
            </div>
        </header>
    )
}
export default Header