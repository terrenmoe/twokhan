import React from 'react';

const links = [
  ["Menu", "/#Menu"],
  ["Nutritional", "/#Nutritional"],
  ["Careers", "/#Careers"],
  ["Locations", "/#Locations"],
  ["Contact", "/#Contact"],
].map((cur) => (
  <li key={cur[0]}>
    <a className="Link" href={cur[1]}>
      {cur[0]}
    </a>
  </li>
));

export default function Navbar(props) {
  return (
    <nav className="Navbar" {...props}>
      <ul>
        {links}
      </ul>
    </nav>
  );
}
