import React from 'react';
const welcomeMsg = "Thank you for coming!"

export default function Footer(props) {
  return <footer className="Footer" {...props}>{welcomeMsg}</footer>;
}
