import Text from "../atoms/Text"
import Image from "../atoms/Image"
import ProductImage from '../../assets/images/Product/Img - mask.png'
import Stars from '../../assets/images/Product/Rating.png'
const Product = () => {
    return (
        <div className="product">
            <div className="product-image">
                <Image src={ProductImage}/>
                <div className="discount">
                    <span>
                        20% 
                    </span>
                    <p>OFF</p>
                </div>                    
            </div>
            <div className="product-text">
                <Text tag='h4' text='Customized Reusable Face Mask'/>
                <section>
                    <p>$20.00 <span>$4.00</span></p>
                    <div className="stars-container">
                        <Image src={Stars} />
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Product