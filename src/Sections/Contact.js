import React, { useState } from "react";
import { Title } from "./CardText";
import emailjs from "emailjs-com";
require("dotenv").config();

export const Contact = () => {
  const [email, setEmail] = useState({ name: "", msg: "", id: "" });
  const [btn, setBtn] = useState("Send");

  var template_params = {
    from_id: email.id,
    from_name: email.name,
    message_html: email.msg,
  };

  const service_id = "default_service";
  const template_id = process.env.REACT_APP_TMP;
  const user_id = process.env.REACT_APP_USER;

  const handleEmail = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };

  const handleContact = (e) => {
    e.preventDefault();
    setBtn("Sending...");
    emailjs
      .send(service_id, template_id, template_params, user_id)
      .then((res) => {
        document.getElementById("msg-sent").style.display = "block";
        console.log(res);
        setBtn("Send");
        document.getElementById("form").reset();
      })
      .catch((err) => {
        document.getElementById("msg-fail").style.display = "block";
        console.error("Oh well, you failed. Here some thoughts on the error that occured:", err);
        setBtn("Send");
      });

    setEmail({ name: "", msg: "", id: "" });
  };
  return (
    <div className='cW400 card mx-2 d-inline-block rounded-lg'>
      <div className='card-body rounded-lg'>
        <form onSubmit={(e) => handleContact(e)} id='form'>
          <Title title='Contact me' />
          <hr />
          <label className='text-dark'>Name</label>
          <input
            name='name'
            id='ip_nm'
            className='form-control form-control-sm mb-3'
            onChange={handleEmail}
            type='text'
            required
          />
          <label className='text-dark'>Email</label>
          <input
            name='id'
            id='ip_id'
            className='form-control form-control-sm mb-3'
            onChange={handleEmail}
            type='email'
            required
          />
          <label className='text-dark'>Message</label>
          <textarea
            name='msg'
            id='ip_mg'
            className='form-control form-control-sm mb-4'
            rows='3'
            onChange={handleEmail}
            type='text'
            required
          />
          <button className='btn btn-sm btn-primary btn-block' type='submit'>
            {btn}
          </button>
        </form>
      </div>
    </div>
  );
};
