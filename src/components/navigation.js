import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import config from '../../data/SiteConfig'

export default (props) => (
    <div className="menu"> 
        <div className="hiwords">
            <div className="text-wrapper">
                <b>Hello, I`m Simon,</b><br/>full-stack software engineer <span role="img" aria-label="wip">⛏️</span>, working on <a href={config.github} target="_blank" rel="noopener noreferrer">open-source</a> and writing about my vision to web-development.<span role="img" aria-label="paper">🧾</span>
            </div>
        </div>
        <div className="navigation">
            <StaticQuery
                query={graphql`
                query TagsList {
                    allMarkdownRemark {
                    distinct(field: frontmatter___tags)
                    }
                }
                `} 
                render={data => (
                    <div className="navigation-menu-tags">
                        <pre>  [</pre>
                        <pre>     {'{'}</pre>
                        <pre>       <span className="tags-list-header">tags</span>: [</pre>
                        {data.allMarkdownRemark.distinct
                        .map(tag => (
                        <pre key={tag}>        <Link to={"/"} activeClassName="link-active" key={tag} onClick={() => {props.handleClick(tag)}}>"{tag}"</Link>,</pre>
                        ))}
                        <pre>        ],</pre>
                        <pre>     {'}'},</pre>
                    </div>
                )}
            />
        <div className="navigation-menu-links">
                {props.pages.map(page => (
                    <div className="page-link" key={page.name}>
                        <pre>     <Link activeClassName="link-active" to={page.link} key={page.name}>{page.name}</Link>,</pre>
                    </div>
                ))}
                <pre>  ]</pre>
            </div>
        </div>
        <div className="newsletter">
          <div className="text-wrapper">
            You can get post updates directly from me <span role="img" aria-label="mailbox">📬 </span> 
            I`ll never send you a spam. <span role="img" aria-label="letter">📨</span> <a href="https://simonb.substack.com/" target="_blank" rel="noopener noreferrer">Subscribe to newsletter.</a> 
          </div>
    </div>
    </div>
)

