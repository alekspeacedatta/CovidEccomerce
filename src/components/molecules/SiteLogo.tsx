import Image from "../atoms/Image"
import Text from "../atoms/Text"
import Logo from '../../assets/images/Header/g18.png'

const SiteLogo = () => {
    return (
        <div className="logo">
            <Image src={Logo}/>
            <div className="logo-text">
                <Text tag='h3' text='covid19'/>
                <Text tag='p' text='coronavirus'/>
            </div>
        </div>
    )
}
export default SiteLogo