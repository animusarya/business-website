import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.nav`
  width: 94%;
  border-bottom: 6px solid #f5696a;
  margin-left: 3%!important;
}
  .icon {
    margin-left:9%;
    width: 1.75rem;
    height: 23px;
    color: #7f888f;
  }
`;

const MobileMenu = styled.div`
  position: relative;
  left: 0px;
  top: 60px;
  height: auto;
  width: 100%;
  background-color: red;
  z-index: 2;
  padding: 1rem;
  overflow: hidden;
  li {
    border-bottom: solid 1px white;
  }
  a {
    color: white;
  }
  a:hover {
    background-color: red;
  }
  .menu-list a {
    padding: 0 0.75em;
  }
`;

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.state = {
      isActive: false,
    };
  }

  toggleMobileMenu() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive,
    });
  }

  render() {
    const { isActive } = this.state;
    return (
      <Container className="navbar is-transparent">
        <div className="navbar-brand is-pulled-left">
          <div
            className="navbar-burger burger "
            data-target="navbarExampleTransparentExample"
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item is-size-5 has-text-grey has-text-weight-semibolid">
              <strong className="navbar-item is-size-5 has-text-black-ter has-text-weight-semibold">
                Editouiral
              </strong>{' '}
              by HTML5 UP
            </a>
          </div>
          {isActive ? (
            <MobileMenu className="is-hidden-desktop has-text-centered">
              <aside className="menu">
                <ul className="menu-list is-size-6">
                  <Link to="/sign-up/">
                    <li>Sign up for free</li>
                  </Link>
                  <Link to="/">
                    <li>Subscribe</li>
                  </Link>
                  <Link to="/login/">
                    {' '}
                    <li>Login</li>
                  </Link>
                  <Link to="/">
                    {' '}
                    <li>Help</li>
                  </Link>
                </ul>
              </aside>
            </MobileMenu>
          ) : null}

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="navbar-end">
                <i className="icon fab fa-twitter" />
                <i className=" icon fab fa-facebook-f" />
                <i className=" icon fas fa-bell" />
                <i className=" icon fab fa-instagram" />
                <i className="icon fab fa-medium-m" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
