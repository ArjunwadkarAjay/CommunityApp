import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Nav, NavItem } from "reactstrap";
import { logout } from "../lib/auth";
import AppContext from "../context/AppContext";

const Layout = (props) => {
  const title = "Quantumniac's";
  const { user, setUser } = useContext(AppContext);

  return (
    <div>
      <Head>
        <title>{title}</title>  
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
        <script src="https://js.stripe.com/v3" />
      </Head>
      <header>
        <style jsx>
          {`
            a {
              color: white;
            }
            h5 {
              color: white;
              padding-top: 11px;
            }
            
          `}
        </style>
        <div className="navigation">
          <Nav className="navbar navbar-dark bg-dark">
              <NavItem>
                <Link href="/">
                  <a className="navbar-brand">Home</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/events">
                  <a className="navbar-brand">Events</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/resources">
                  <a className="navbar-brand">Resources</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/contact">
                  <a className="navbar-brand">Contact Info</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/announcements">
                  <a className="navbar-brand">Announcements/Notices</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/about">
                  <a className="navbar-brand">About</a>
                </Link>
              </NavItem>

            <NavItem className="ml-auto">
              {user ? (
                <h5>{user.username}</h5>
              ) : (
                <Link href="/register">
                  <a className="nav-link"> Sign up</a>
                </Link>
              )}
            </NavItem>
            <NavItem>
              {user ? (
                <Link href="/">
                  <a
                    className="nav-link"
                    onClick={() => {
                      logout();
                      setUser(null);
                    }}
                  >
                    Logout
                  </a>
                </Link>
              ) : (
                <Link href="/login">
                  <a className="nav-link">Sign in</a>
                </Link>
              )}
            </NavItem>
          </Nav>
        </div>
        
      </header>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout ;