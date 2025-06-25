import Text from "../atoms/Text"
import Button from "../atoms/Button"
import Image from "../atoms/Image"
interface CollectionProductProps {
    product: {
        titleTag: string,
        titleText: string,
        discountTag: string,
        discountText: string,
        buttonText: string,
        imageSrc: string,
    }
}
const CollectionProduct = ({product} : CollectionProductProps) => {
    return (
        <div className="collection-product">
            <div className="collection-product-text">
                <section>
                    <Text tag={product.titleTag} text={product.titleText}/>
                    <Text tag={product.discountTag} text={product.discountText}/>
                </section>
                <Button buttonText={product.buttonText}/>
            </div>
            <Image src={product.imageSrc}/>
        </div>
    )
}
export default CollectionProduct