import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import { siteMetadata } from '../../gatsby-config'
import SiteNavi from '../components/SiteNavi'

// import './gatsrap.scss'
// import './hyde.scss'
// import 'animate.css/animate.css'
// import 'font-awesome/css/font-awesome.css'
// import 'prismjs/themes/prism-okaidia.css'
// import 'devicon/devicon.min.css'
import './syntax.scss'
import './poole.scss'
import './hyde.scss'
import './custom.scss'



class Template extends React.Component {
  componentDidMount() {
    const WOW = require('wowjs')
    this.wow = new WOW.WOW()
    this.wow.init()
  }

  componentDidUpdate() {
    this.wow.sync()
  }

  render() {
    const { location, children } = this.props
    return (

      <div className="theme-base-0g layout-reverse">
          <SiteNavi title={siteMetadata.title} {...this.props} />
          {children()}
      </div>
    )
  }
}

export default Template
