import Footer from "./Footer";
import Header from "./Header";
import ReviewCards from "./ReviewCards";

export default function Reviews() {
    return (
        <main className="bg-dark text-light">
            <Header/>
            <ReviewCards/>
            <Footer/>
        </main>
    )
}