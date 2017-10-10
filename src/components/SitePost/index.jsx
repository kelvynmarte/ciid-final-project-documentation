import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import size from 'lodash/size'
import ReadNext from '../ReadNext'
import './style.scss'

class SitePost extends React.Component {
  more(body, path) {
    if (body.match('<!--more-->')) {
      return (
        <Link className="readmore" to={path}>
          <span className="btn btn-outline-primary btn-block">MORE</span>
        </Link>
      )
    }
    return
  }

  description(body) {
    let test = body.replace(/<blockquote>/g, '<blockquote class="blockquote">')
    if (test.match('<!--more-->')) {
      test = test.split('<!--more-->')
      if (typeof test[0] !== 'undefined') {
        return test[0]
      }
    }
    return test
  }

  categories(data) {
    if (!data) {
      return
    }
    const categories = []
    data.forEach((category, i) => {
      categories.push(
        <span className="badge badge-primary text-white" key={i}>
          {category}
        </span>
      )
    })
    return categories
  }

  render() {
    const { site, data, isIndex } = this.props

    const title = get(data, 'frontmatter.title')
    const subtitle = get(data, 'frontmatter.subtitle')
    const path = get(data, 'frontmatter.path')
    const date = get(data, 'frontmatter.date')
    const desc = get(data, 'frontmatter.description') || get(data, 'html')
    const cate =
      get(data, 'frontmatter.category') || get(data, 'frontmatter.categories')

    const categories = cate ? this.categories(cate) : ''
    const description = isIndex ? this.description(desc) : desc
    const more = isIndex ? this.more(desc, path) : ''
    return (
      <div className="content container">
        <div className="posts">
          <div className="post">
            <h1 className="post-title">
              <a href="/2013/12/28/introducing-hyde/">
                {title}
              </a>
            </h1>

            <span className="post-date">
              <time dateTime={date}>{date}</time>
            </span>
            <span className="post-date">
              {subtitle}
            </span>


            <div
              className="page-content"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          {more}
          </div>
        </div>
      </div>
    )
  }
}

export default SitePost
