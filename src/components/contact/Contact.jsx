import { useState } from "react";
import "./contact.scss"

export default function Contact() {

    const [message, setMessage] = useState(false)
    
    function handleSubmit(e){
        e.preventDefault();
        setMessage(!message)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" className="" />
                    <textarea placeholder="Message"></textarea>
                    <button>Send</button>
                    {message && <span>Thanks, I will reply ASAP!</span>}
                </form>
            </div>
        </div>
    )
}
