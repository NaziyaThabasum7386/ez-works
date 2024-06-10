import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import './EmailForm.css';

const EmailForm = () => {
  const [emailid, setEmailid] = useState("");
  const [error, setError] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "emailid") {
      setEmailid(value);
      setError("");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    console.log(`Email: ${email}, Valid: ${isValid}`);
    return isValid;
  };
  

  const handleForm = async (e) => {
    e.preventDefault();
    if (emailid === "") {
      enqueueSnackbar("Please fill the form", { variant: "error" });
    } else if (!validateEmail(emailid)) {
      enqueueSnackbar("Please enter a valid email", { variant: "error" });
    } else {
      try {
        const response = await fetch('http://localhost:8002/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: emailid })
        });

        const data = await response.json();

        if (response.status === 200) {
          enqueueSnackbar(data.message, { variant: "success" });
        } else {
          enqueueSnackbar(data.message, { variant: "error" });
        }
      } catch (error) {
        enqueueSnackbar("An error occurred while submitting the form", { variant: "error" });
      }
    }
  };

  return (
    <div className="email-form">
      <form onSubmit={handleForm}>
        <input
          type="text"
          id="emailid"
          name="emailid"
          value={emailid}
          onChange={handleChange}
          className={error ? "error" : ""}
          placeholder="Enter your email"
        />
        <button type="submit">Contact Me</button>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default EmailForm;
