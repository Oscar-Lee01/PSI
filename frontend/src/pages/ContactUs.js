import React, { useRef } from "react"
import emailjs from '@emailjs/browser';
import './ContactUsForm.css'

const ContactUs = () => {

  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault()

      //.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {publicKey: 'YOUR_PUBLIC_KEY',})
      emailjs
      .sendForm('service_9elwazl', 'template_ts0cmhl', form.current, {
        publicKey: 'j4jLY9CMbg93aH9ly',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      e.target.reset()
    }

    return (
      <div className="ContactUs">
        <h2>Contact Us</h2>
        <div className="formm">
        <form ref={form} onSubmit={sendEmail}>
            
        <label>Full Name</label>
            <input 
            type="text" placeholder="Enter Full Name" name="user_name"
            required />
            
            <label>Matric Number</label>
            <input 
            type="text" placeholder="Enter Matric No" name="user_matricnumber"
            required />

            <label>Email Address</label>
            <input 
            type="email" placeholder="Enter Email" name="user_email"
            required />

            <label>Message</label>
            <textarea name="message" id="message" cols={20} rows={5}
            required placeholder="Enter Text">    
            </textarea>

            <button type="submit">Send Message</button>
            </form>
        </div>
      </div>

    )
}


export default ContactUs;