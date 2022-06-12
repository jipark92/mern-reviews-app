import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Reviews from './components/Reviews'

export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Reviews/>}/>
            </Routes>
        </BrowserRouter>
    )
}
