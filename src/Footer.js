import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home(props) {
  return <h2>Home</h2>;
}
function About(props) {
  return <h2>About</h2>;
}
function Users(props) {
  return <h2>Users</h2>;
}

const data = [
  {
    uri:"/",
    txt:"Home",
    view:Home,
    isExact: true,
  },
  {
    uri: "/about/",
    txt: "About",
    view: About,
  },
  {
    uri: "/users/",
    txt: "Users",
    view: Users,
  },
];

function Links(props) {
  return data.map(({uri, txt}) => (
    <li className='Link' key={`foot${txt}`}>
      <Link to={uri} >{txt}</Link>
    </li>
  ));
}

function Routes(props) {
  return data.map(({uri, view, isExact}) => (
    <Route exact={isExact} path={uri} component={view} />
  ));
}

function FooterRouter(props) {
  return (
    <Router>
      <ul>
        <Links />
      </ul>
      <Routes/>
    </Router>
  );
}

export default function Footer(props) {
  return (
    <footer className="Footer" >
      <FooterRouter />
    </footer>
  );
}
