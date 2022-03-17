import React from "react";
import img from "../../Ray.png"

const Header = () => {
    return (
        <header className="header-p2">
            <img src={img} alt="my photo" />
            <h1>Ray Tsai</h1>
            <h2>ddfee</h2>
            <h4>sdgfsgv</h4>
            <div>
                <a href=""><button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="email-icon"><path d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"/></svg><span>Email</span></button></a>
                <a href=""><button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="phone-icon"><path d="M304 0h-224c-35.35 0-64 28.65-64 64v384c0 35.35 28.65 64 64 64h224c35.35 0 64-28.65 64-64V64C368 28.65 339.3 0 304 0zM192 480c-17.75 0-32-14.25-32-32s14.25-32 32-32s32 14.25 32 32S209.8 480 192 480zM304 64v320h-224V64H304z"/></svg><span>Phone</span></button></a>
            </div>
            
        </header>
    )
}
export default Header