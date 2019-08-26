import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home</h2>;
}

function Profile() {
  return <h2>Profile</h2>;
}

function Threads() {
  return <h2>Threads</h2>;
}

const data = [
  {
    URI:"/",
    TXT:"Home",
    isExact: true,
  },
  {
    URI:"/profile/",
    TXT:"Profile",
  },
  {
    URI:"/threads/",
    TXT:"Threads",
  },
];

const Links = data.map(({URI, TXT}) => (
  <li>
    <Link to={URI} >{TXT}</Link>
  </li>
));

const Routes = data.map(({URI, TXT, isExact}) => (
  <Route path={URI} {...(isExact)? 'exact': undefined} component={TXT} />
));


export default function Navbar() {
  return (
    <Router>
      <div>
        <nav className="Navbar">
          <ul>
            {Links}
          </ul>
        </nav>
        {Routes}
      </div>
    </Router>
  );
};
