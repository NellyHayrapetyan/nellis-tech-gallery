import React, {ChangeEvent, FormEvent, useState} from 'react'
import classes from './Contact.module.scss';
import Toaster from "@/components/toaster/Toaster";

const emailValidity = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value)
}

const Contact = () => {
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [toasterData, setToasterData] = useState<{message: string, type: string} | null>(null);

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsValid(!!e.target.value.length)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const { name, email, message } = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value,
        }),
      });

      if (response.ok) {
        showToast({ message: 'Email sent successfully', type: 'Success'})
      } else {
        showToast({ message: 'Failed to send email', type: 'Error'})
      }
    } catch (error) {
      showToast({ message: 'Failed to send email', type: 'Error'})
    }
  };

  const showToast = (data: { message: string, type: string }) => {
    setIsLoading(false);
    setToasterData(data);
    setTimeout(() => {
      setToasterData(null);
    }, 3000);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (emailValidity(e.target.value)) {
      setIsValid(true)
    } else {
      setIsValid(false);
    }
  }

    return (
      <div className={classes.ContactWrapper}>
        <h1 className={classes.Title}>Contact.</h1>
          <p className={classes.Intro}>Get in touch or send me an email directly
            on <b>hayrapetyannelly1@gmail.com</b></p>
        <form onSubmit={handleSubmit}>
          <input
            className={classes.Field}
            onChange={handleFieldChange}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            aria-required="true"
            required={true}/>
          <input
            onChange={handleEmailChange}
            className={classes.Field}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            aria-required="true"
            required={true}/>
          <textarea
            onChange={handleFieldChange}
            className={`${classes.Field} ${classes.TextField}`}
            name="message"
            id="message"
            placeholder="Message"
            aria-required="true"
            required={true}
          ></textarea>
          <button
            disabled={!isValid}
            className="btn btn-default"
            type="submit"
            aria-label="Send Message"
          >
            {isLoading && <span>Loading...</span>}
            {!isLoading && <span>Send Message</span>}
          </button>
        </form>
        {toasterData && (
          <Toaster type={toasterData.type} message={toasterData.message} />
        )}
      </div>
    );
};

export default Contact;