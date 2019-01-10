import React from "react";

let FooterStyle = {
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    color: 'white',
    fontSize: '18px',
    textAlign: 'center',
    background: 'black',
    width: '100%',
}
function Footer() {
  return (
    <div style={FooterStyle}>
      Temp Footer
      <hr />
    </div>    
  );
}
export default Footer;