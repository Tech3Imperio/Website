import "./styles.css";
import { imageContact } from "../../../@assets/image";
import React, { useState } from "react";
const Inputs = (props) => {
  var {
    id,
    value,
    type = "text",
    required = false,
    text,
    handleChange,
  } = props;
  return (
    <div className="right-contact-detail">
      <input
        type={type}
        className="forminputs"
        id={id}
        value={value}
        onChange={handleChange}
        required={required}
      />
      <label className="input-label" htmlFor={id}>
        {text}
      </label>
    </div>
  );
};

export const ContactRight = () => {
  const [form1, setForm1] = useState("");
  const [form2, setForm2] = useState("");
  const [form3, setForm3] = useState("");
  const [form4, setForm4] = useState("");
  const [message, setMessage] = useState("");
  const [rows, setRows] = useState(1);

  const handleForm1Change = (e) => {
    setForm1(e.target.value);
  };

  const handleForm2Change = (e) => {
    setForm2(e.target.value);
  };

  const handleForm3Change = (e) => {
    setForm3(e.target.value);
  };

  const handleForm4Change = (e) => {
    setForm4(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://sheetdb.io/api/v1/qe4fnx8qm5koc", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Company: form1,
            Name: form2,
            Email: form3,
            Number: form4,
            Query: message,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // setMessage("Message sent successfully");
        setForm1("");
        setForm2("");
        setForm3("");
        setForm4("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // return false;
  };
  const handleMessageChange = (e) => {
    const value = e.target.value;
    let matches = value.match(new RegExp("\n", "gi"));
    if (matches) {
      setRows(matches.length + 1);
    } else {
      setRows(1);
    }
    setMessage(value);
  };

  return (
    <form className="contact-right" onSubmit={handleSubmit}>
      <div className="contact-right-container">
        <div className="contact-right-design">
          <div className="contact-right-ring"></div>
          <div className="contact-right-ring"></div>
        </div>
        <div className="right-contact-container">
          <div className="right-contact-details">
            <Inputs
              id="form1"
              value={form1}
              text="Company Name"
              handleChange={handleForm1Change}
              required
            />
            <Inputs
              id="form2"
              value={form2}
              text="Name"
              handleChange={handleForm2Change}
              required
            />
          </div>
          <div className="right-contact-details">
            <Inputs
              id="form3"
              type="email"
              value={form3}
              text="Email"
              handleChange={handleForm3Change}
              required
            />
            <Inputs
              id="form4"
              value={form4}
              type="tel"
              text="Phone Number"
              handleChange={handleForm4Change}
              required
            />
          </div>
          <div className="right-contact-details">
            <div className="right-contact-detail">
              <textarea
                name="message"
                id="message"
                className="formTextArea"
                value={message}
                onChange={handleMessageChange}
                placeholder="Write your inquiry..."
                rows={rows}
                required
              />
            </div>
            {/* <div className="right-contact-detail">
              <label className="input-label" htmlFor={message}>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="formTextArea"
                value={message}
                onChange={handleMessageChange}
                placeholder="Write your message..."
                rows={rows}
              />
            </div> */}
          </div>
        </div>
        <div className="right-contact-footer">
          <div className="right-footer">
            <button type="submit" className="button footerbutoon">
              Submit Query
            </button>
          </div>
          <div className="right-image">
            <img src={imageContact} alt="arrows" />
          </div>
        </div>
      </div>
    </form>
  );
};
