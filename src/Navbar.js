import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import ListItem from './ListItem.js'

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
    uri: "/",
    txt: "Home",
    view: Home,
    isExact: true,
  },
  {
    uri: "/profile/",
    txt: "Profile",
    view: Profile,
  },
  {
    uri: "/threads/",
    txt: "Threads",
    view: Threads,
  },
];

const Links = data.map(({uri, txt}) => (
  ListItem(<Link key={txt} to={uri} >{txt}</Link>)
));

const Routes = data.map(({uri, view, isExact}) => (
  <Route exact={isExact} path={uri} component={view} />
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
