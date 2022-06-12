import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Reviews from './components/Reviews'
import Upload from './components/Upload'

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Reviews/>}/>
                <Route path='/newproject' element={<Upload/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/faq' element={<Faq/>}/>
            </Routes>
        </BrowserRouter>
    )
}