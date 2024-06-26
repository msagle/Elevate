import React from 'react';
import styles from "./ContactUsPage.module.css";


export default function ContactUsPage() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (e: any) => {
      e.preventDefault();
      setResult("Sending....");
      const formData = new FormData(e.target);
  
      formData.append("access_key", "6840f420-ffa0-429a-8603-c7b3f57078b5");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        e.target?.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div className={styles.contact}>
        <br />
        <h1>Contact Us</h1>
        <br />
        <p className={styles.contactMessage}>
            Please send us a message if you have questions or want more information about ELEVATE Synchronized Skating.
            Use the form below or email us directly at <strong>elevatesynchro@gmail.com</strong>.
        </p>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder='Full Name' required/>
          <input type="email" name="email" placeholder='Email' required/>
          <input type="subject" name="subject" placeholder='Subject' required/>
          <textarea name="message" placeholder='Message' required></textarea>
  
          <button type="submit">Submit Form</button>
  
        </form>
        <span className={styles.result}>{result}</span>
  
      </div>
    );
  }