import React from "react";

function formatPhoneNumber(value) {
  const digits = value.replace(/\D/g, '');
  const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  if(!match) return '';
  let formated = '';
  if(match[1]) formated += match[1];
  if(match[2]) formated += '-' + match[2];
  if(match[3]) formated += '-' + match[3];
  return formated;
}

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
       <input 
       type="text" 
       placeholder="Name" 
       value={name} 
       onChange={e => setName(e.target.value)}
       required
       />

       <input 
       type="tel"
        placeholder="Phone"
        value={phone} 
        onChange={e => setPhone(formatPhoneNumber(e.target.value))}
        title="Format: 123-456-7890"
        />

       <input
       type="email"
        value={email}
        placeholder="Email" 
        onChange={e => setEmail(e.target.value)}
        />

       <input type="submit" value="Add Contact"/>
    </form>
    
  );
};

