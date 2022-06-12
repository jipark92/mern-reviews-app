import Footer from "./Footer";
import Header from "./Header";
import ReviewCards from "./ReviewCards";
import {useState, useEffect} from 'react'

export default function Reviews() {

    const [reviewData, setReviewData] = useState([])
    // const [refreshData, setRefreshData] = useState(0)

    useEffect(()=>{
        getData()
    })

    const getData = async () =>{
        const url = await fetch('http://localhost:3001/')
        const data = await url.json()
        setReviewData(data)
    }
    
    return (
        <main className="bg-dark text-light">
            <Header/>
            <ReviewCards
                information={reviewData}
            />
            <Footer/>
        </main>
    )
}