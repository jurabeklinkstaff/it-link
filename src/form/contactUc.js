import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../form/contact.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bkolhb4', 'template_9yoqk8r', form.current, 'i2OSidvQgr2JA9eAM')
      .then((result) => {
        console.log(result.text);
        console.log(form)
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <form className='formDiv' ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder='お名前' className='ichiban' />
      <input type="text" name="company_name" placeholder='会社の名前' />
      <input type="email" name="user_email" placeholder='メルアドレス' />
      <textarea name="message" placeholder='メッセージ' />

      <div className='button'>
        <input type="submit" value="もどる" className='cencel' />
        <input type="submit" value="送信" className='send' />
      </div>
    </form>


  );
};

