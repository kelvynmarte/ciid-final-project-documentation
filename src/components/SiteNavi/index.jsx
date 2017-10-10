import React from 'react'
import Link from 'gatsby-link'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <div className="sidebar">
        <div className="container sidebar-sticky">
          <div className="sidebar-about">
            <h1>
              <a className="hidden" href="/">
                Urbopie
              </a>
            </h1>
            <p className="lead">
              CIID final project documentation of <a href="http://ciid.dk/education/people/students-2017/kelvyn-marte/" target="_blank">Klevyn&nbsp;Marte</a>.
            </p>
          </div>

          <nav className="sidebar-nav">

            <Link
              to="/"
              className={
                location.pathname === '/'
                ? 'sidebar-nav-item active'
                : 'sidebar-nav-item'
              }>Home</Link>

              <Link
                to="/introduction/"
                className={
                  location.pathname === '/introduction/'
                  ? 'sidebar-nav-item active'
                  : 'sidebar-nav-item'
                }>Introduction</Link>

                <Link
                  to="/research/"
                  className={
                    location.pathname === '/research/'
                    ? 'sidebar-nav-item active'
                    : 'sidebar-nav-item'
                  }>Research</Link>

                  <Link
                    to="/concepting/"
                    className={
                      location.pathname === '/concepting/'
                      ? 'sidebar-nav-item active'
                      : 'sidebar-nav-item'
                    }>Concepting</Link>

                    <Link
                      to="/prototyping/"
                      className={
                        location.pathname === '/prototyping/'
                        ? 'sidebar-nav-item active'
                        : 'sidebar-nav-item'
                      }>Prototyping</Link>


                    </nav>
                  </div>
                </div>


              )
            }
          }

          export default SiteNavi
