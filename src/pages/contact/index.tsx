import React, {useRef, useState} from 'react'
import classes from './Contact.module.scss';

const emailValidity = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value)
}

const Contact = () => {
  const [isValid, setIsValid] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleFieldChange = (e) => {
      setIsValid(e.target.value.length)
  }

  const handleEmailChange = (e) => {
    if (emailValidity(e.target.value)) {
      setIsValid(true)
    } else {
      setIsValid(false);
    }
  }

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //
  //   //   emailjs.sendForm(serviceID, templateID, e.target, UserID)
  //   //   .then((result) => {
  //   //     console.log(result.text);
  //   //   }, (error) => {
  //   //     console.log(error.text);
  //   //   });
  //   // };

    return (
      <div className={classes.ContactWrapper}>
        <h1 className={classes.Title}>Contact.</h1>
        <p className={classes.Intro}>Get in touch or send me an email directly
          on <b>hayrapetyannelly1@gmail.com</b></p>
        <form>
          <input
            ref={nameRef}
            className={classes.Field}
            onChange={handleFieldChange}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            aria-required="true" required=""/>
          <input
            ref={emailRef}
            onChange={handleEmailChange}
            className={classes.Field}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            aria-required="true"
            required=""/>
          <textarea
            ref={messageRef}
            onChange={handleFieldChange}
            className={`${classes.Field} ${classes.TextField}`}
            name="message"
            id="message"
            placeholder="Message"
            aria-required="true"
            required=""
          ></textarea>
          <button
            disabled={!isValid}
            className="btn btn-default"
            type="submit"
            aria-label="Send Message"
          >Send Message
          </button>
        </form>
      </div>);
};

export default Contact;