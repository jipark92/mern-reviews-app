import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

export default function Footer() {
    return (
        <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
            <section className="mb-4">
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><AiFillGithub/>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><AiFillLinkedin/>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><AiFillTwitterCircle/>
            </a>
            </section>
        </div>
        <div className="text-center p-3" style={{"backgroundColor":"rgba(0, 0, 0, 0.2)"}}>
            <a className="text-white" href="https://github.com/norfkorean/mern-reviews-app" target="_label">Ji Park © 2022</a>
        </div>
    </footer> 
    )
}