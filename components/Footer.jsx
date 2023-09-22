// import React from 'react'

// export default function Footer() {
//   return (
//     <div>
//         <h3>Contact:</h3>
//         <a href='https://mail.google.com/mail/u/0/?ogbl#inbox'>r.naveenprakash2942004@gmail.com</a></div>
//   )
// }
import React from 'react';

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '1.5rem',
  marginBottom: '10px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.2rem',
};

const Footer = () => {
  return (
    <div style={footerStyle}>
      <h3 style={headingStyle}>Contact:</h3>
      <a style={linkStyle} href='https://mail.google.com/mail/u/0/?ogbl#inbox'>
        r.naveenprakash2942004@gmail.com
      </a>
    </div>
  );
};

export default Footer;
