import Text from "../atoms/Text"
import Image from "../atoms/Image"
interface ProductProps {
    product: {
        imageSrc: string,
        discount: string,
        discountText: string,
        titleTag: string,
        titleText: string,
        newPrice: string,
        oldPrice: string,
        starImg: string,
    }
}
const Product = ({product}: ProductProps) => {
    return (
        <div className="product">
            <div className="product-image">
                <Image src={product.imageSrc}/>
                <div className="discount">
                    <span>
                        {product.discount}
                    </span>
                    <p>{product.discountText}</p>
                </div>                    
            </div>
            <div className="product-text">
                <Text tag={product.titleTag} text={product.titleText} />
                <section>
                    <p>{product.newPrice} <span> {product.oldPrice} </span></p>
                    <div className="stars-container">
                        <Image src={product.starImg} />
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Product