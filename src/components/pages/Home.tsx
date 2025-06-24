import Header from "../organisms/Header"
import Footer from "../organisms/Footer"
import Product from "../molecules/Product"
const Home = () => {
    return (
        <>
            <Header/>

            <main>
                <div className="products-container">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </main>

            <Footer/>
        </>
    )
}
export default Home