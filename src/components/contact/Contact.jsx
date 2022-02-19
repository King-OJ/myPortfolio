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
                <form
                action="https://formspree.io/f/moqrdkaw"
                method="POST"
                onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Email"
                    name="email" 
                    className="" />
                    <textarea 
                    placeholder="Message"
                    name="message"
                    ></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will reply ASAP!</span>}
                </form>
            </div>
        </div>
    )
}
