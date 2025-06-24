import { Link } from "react-router-dom"
import React from "react"
interface LinkProps {
    to: string,
    linkText: string
}
const NavLink: React.FC<LinkProps> = ({to, linkText}) => {
    return (
        <Link to={to}>{linkText}</Link>
    )
}
export default NavLink