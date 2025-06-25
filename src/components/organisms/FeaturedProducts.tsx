import Button from "../atoms/Button"
import Text from "../atoms/Text"
import Product from "../molecules/Product"
import Img1 from '../../assets/images/Product/5a493d518e4758bdb11d7683f9e219e0-removebg-preview.png';
import Img2 from '../../assets/images/Product/hand-sanitizer-gel-products-75-alcohol-component-kills-up-99-99-viruses-covid-19-bacteria-germs-packed-clear-plastic-top-press-bottle-realistic-file_3.png';
import Img3 from '../../assets/images/Product/img- mask 2.png';
import Img4 from '../../assets/images/Product/pngtree-medical-mask-surgical-mask-n95-mask-png-image_2217548-removebg-preview.png';
const products = [ 
    { imageSrc: Img1, discount: '20%', discountText: "OFF", titleTag: 'h4', titleText: 'Customized Reusable Face Mask', newPrice: '$20.00', oldPrice: '$40.00', starImg: 'dd'  },
    { imageSrc: Img2, discount: '20%', discountText: "OFF", titleTag: 'h4', titleText: 'Customized Reusable Face Mask', newPrice: '$20.00', oldPrice: '$40.00', starImg: 'dd'  },
    { imageSrc: Img3, discount: '20%', discountText: "OFF", titleTag: 'h4', titleText: 'Customized Reusable Face Mask', newPrice: '$20.00', oldPrice: '$40.00', starImg: 'dd'  },
    { imageSrc: Img4, discount: '20%', discountText: "OFF", titleTag: 'h4', titleText: 'Customized Reusable Face Mask', newPrice: '$20.00', oldPrice: '$40.00', starImg: 'dd'  },
    { imageSrc: Img1, discount: '20%', discountText: "OFF", titleTag: 'h4', titleText: 'Customized Reusable Face Mask', newPrice: '$20.00', oldPrice: '$40.00', starImg: 'dd'  },
    { imageSrc: Img2, discount: '20%', discountText: "OFF", titleTag: 'h4', titleText: 'Customized Reusable Face Mask', newPrice: '$20.00', oldPrice: '$40.00', starImg: 'dd'  },
]
const FeaturedProducts = () => {
    return (
        <div className="featured-products">
            <div className="section-heading">
                <Text tag='h3' text='Protect Your Health'/>
                <Text tag='h2' text='Our Featured Products'/>
            </div>
            <div className="featured-products-content">
                <div className="products-container">
                    {products.map((productProps, index) => (
                        <Product product={productProps} key={index}/>
                    ))}
                </div>
            </div>
            <Button buttonText='view all products'/>
        </div>
    )
}
export default FeaturedProducts