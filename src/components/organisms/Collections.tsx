
import CollectionProduct from '../molecules/CollectionProduct';
import CollectionImage1 from '../../assets/images/Product/4120568-removebg-preview.png';
import CollectionImage2 from '../../assets/images/Product/realistic-style-hand-sanitizer_23-2148481389-removebg-preview.png';
import CollectionImage3 from '../../assets/images/Product/safety-equipment-protective-suit-fight-coronavirus-covid-19-virus-outbreak-safety-glasses-protective-glove-isolated-white-background_136875-1073-removebg-preview.png';
const collectionProducts = [
    {titleTag: 'h3', titleText: 'Health Security Mask Collection', discountTag: 'span', discountText: '20% Off', buttonText: 'view now', imageSrc: CollectionImage1 },
    {titleTag: 'h3', titleText: 'Best Hand Sanitizer Collection', discountTag: 'span', discountText: '40% Off', buttonText: 'view now', imageSrc: CollectionImage2 },
    {titleTag: 'h3', titleText: 'Medical Gloves & Sunglasses Collection', discountTag: 'span', discountText: '20% Off', buttonText: 'view now', imageSrc: CollectionImage3 }
]
const Collections = () => {
  return (
    <div className="collection-products-container">
        {collectionProducts.map((product, index) => (
            <CollectionProduct product={product} key={index}/>
        ))}
    </div>
  )
}
export default Collections