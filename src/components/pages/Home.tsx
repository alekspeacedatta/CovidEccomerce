import Header from "../organisms/Header"
import Collections from "../organisms/Collections"
import Footer from "../organisms/Footer"
const Home = () => {
    return (
        <>
            <Header/>
                <main>
                    <div className="main-content">
                        <Collections/>
                    </div>
                </main>
            <Footer/>
        </>
    )
}
export default Home