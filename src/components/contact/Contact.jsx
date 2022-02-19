import { useState } from "react";
import "./contact.scss"

export default function Contact() {

    const [message, setMessage] = useState(false)
    const [contact, setContact]= useState({email: "", msg: "",})
    
    function handleSubmit(e){
        e.preventDefault();
        setContact({email: "", msg: "",})
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
                    className="" 
                    value={contact.email}
                    onChange={
                        (e)=>setContact((oldContact)=>{ return {...oldContact, email: e.target.value} })
                    }
                    />
                    <textarea 
                    placeholder="Message"
                    name="message"
                    value={contact.msg}
                    onChange={(e)=>setContact((oldContact)=>{ return {...oldContact, msg: e.target.value}})}
                    ></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will reply ASAP!</span>}
                </form>
            </div>
        </div>
    )
}
