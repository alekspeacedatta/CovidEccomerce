import Img1 from '../../assets/images/BigOffer/Kit.png'
import Img2 from '../../assets/images/BigOffer/Subtraction 1.png'
import Text from '../atoms/Text'
import Image from '../atoms/Image'
import Button from '../atoms/Button'
const BigOffer = () => {
    return (
        <div className="big-offer">
            <div className="big-offer-content">
                <div className="big-offer-text">
                    <div className="head">
                        <section>
                            <Text tag='p' text='Be Aware Of Coronavirus' />
                            <Text tag='h2' text='Corona Health Protection Safety Kit.'/>
                        </section>
                        <Text tag='p' text='Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer tookng.'/>
                    </div>
                    <div className="foot">
                        <Button buttonText='Buy Now' />
                        <Text tag='p' text='only for $200.00' />
                    </div>
                </div>
                <div className="product">
                    <Image src={Img1}/>
                </div>
            </div>
            <div className="woman">
                <Image src={Img2}/>
            </div>
        </div>
    )
}
export default BigOffer