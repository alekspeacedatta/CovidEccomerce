import Header from "../organisms/Header"
import Collections from "../organisms/Collections"
import Footer from "../organisms/Footer"
import FeaturedProducts from "../organisms/FeaturedProducts"
const Home = () => {
    return (
        <>
            <Header/>
                <main>
                    <div className="main-content">
                        <Collections/>
                        <FeaturedProducts/>
                    </div>
                </main>
            <Footer/>
        </>
    )
}
export default Home