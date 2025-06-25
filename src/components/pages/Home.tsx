import Header from "../organisms/Header"
import Collections from "../organisms/Collections"
import Footer from "../organisms/Footer"
import FeaturedProducts from "../organisms/FeaturedProducts"
import BigOffer from "../organisms/BigOffer"
const Home = () => {
    return (
        <>
            <Header/>
                <main>
                    <div className="main-content">
                        <Collections/>
                        <FeaturedProducts/>
                        <BigOffer/>
                    </div>
                </main>
            <Footer/>
        </>
    )
}
export default Home