import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import "./contact.scss"

export default function Contact() {

    const [contact, setContact]= useState({email: "", msg: "",})
    
    function handleSubmit(){
        setContact({email: "", msg: "",})   
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
                >
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
                    <button type="submit" onSubmit={handleSubmit}>Send</button>
             
                </form>
            </div>
        </div>
    )
}
