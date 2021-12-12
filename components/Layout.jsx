import Footer from "./Footer";
import Navbar from "./Navbar";


export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen">

                {children}
            </div>
            <Footer />
        </div>
    )
}
