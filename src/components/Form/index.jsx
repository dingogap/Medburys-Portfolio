// Contacts Form

import { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // update the state value
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Test for vaild email & a name
    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or Name is invalid");
      return;
    }
    if (!message) {
      setErrorMessage(`Please enter a message`);
      return;
    }
    setName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  };

  // Display the Form
  return (
    <div className="container text-center">
      <form className="form col s12" onSubmit={handleFormSubmit}>
        <div className="row">
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="row">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="row">
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Message"
          />
        </div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
export default Form;
