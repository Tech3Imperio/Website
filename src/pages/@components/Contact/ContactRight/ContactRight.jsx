import "./styles.css";
import React, { useState } from "react";

const RadioButton = (props) => {
  const { id, divid, text, checked, handleChange } = props;
  return (
    <div className="right-contact-detail" id={divid} onClick={handleChange}>
      <label htmlFor={id}>
        <input
          type="radio"
          name="query"
          id={id}
          className="formtypes"
          checked={checked}
          onChange={() => {}}
        />
        <span className="lable-text">{text}</span>
      </label>
    </div>
  );
};

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
  const [formType, setFormType] = useState([true, false, false]);
  const [form1, setForm1] = useState("");
  const [form2, setForm2] = useState("");
  const [form3, setForm3] = useState("");
  const [form4, setForm4] = useState("");
  const [message, setMessage] = useState("");
  const [rows, setRows] = useState(1);

  const handleFormTypeChange = (e) => {
    const id = e.currentTarget.id;
    if (id === "per") {
      setFormType([true, false, false]);
    } else if (id === "big") {
      setFormType([false, true, false]);
    } else {
      setFormType([false, false, true]);
    }
  };

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
    <aside className="contact-right">
      <div className="contact-right-container">
        <div className="contact-right-design">
          <div className="contact-right-ring"></div>
          <div className="contact-right-ring"></div>
        </div>
        <div className="right-contact-container">
          <div className="right-contact-details">
            <RadioButton
              divid="per"
              id="personalUse"
              text="Personal Use"
              checked={formType[0]}
              handleChange={handleFormTypeChange}
            />
            <RadioButton
              divid="big"
              id="bigProject"
              text="Big Project"
              checked={formType[1]}
              handleChange={handleFormTypeChange}
            />
            <RadioButton
              divid="dea"
              id="dealer"
              text="Dealer"
              checked={formType[2]}
              handleChange={handleFormTypeChange}
            />
          </div>
          <div className="right-contact-details">
            <Inputs
              id="form1"
              value={form1}
              text={formType[0] ? "First Name" : "Company Name"}
              handleChange={handleForm1Change}
              required={!formType[1]}
            />
            <Inputs
              id="form2"
              value={form2}
              text={formType[0] ? "Last Name" : "Name"}
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
            <textarea
              name="message"
              id="message"
              className="formTextArea"
              value={message}
              onChange={handleMessageChange}
              rows={rows}
            />
          </div>
        </div>
        <div className="right-contact-footer"></div>
      </div>
    </aside>
  );
};
