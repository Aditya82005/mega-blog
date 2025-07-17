import React from 'react'
import { Link } from 'react-router'

function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 mt-5">
    <div className="container text-center text-md-left">
      <div className="row">

        {/* About Section */}
        <div className="col-md-4 mb-4">
          <h5 className="text-uppercase">MyBlog</h5>
          <p>
            Sharing ideas, stories, and resources to inspire the developer community.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="col-md-4 mb-4">
          <h5 className="text-uppercase">Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="/" className="text-light text-decoration-none">Home</a></li>
            <li><a href="/about" className="text-light text-decoration-none">About</a></li>
            <li><a href="/blog" className="text-light text-decoration-none">Blog</a></li>
            <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="col-md-4 mb-4">
          <h5 className="text-uppercase">Follow Us</h5>
          <a href="https://twitter.com" className="text-light me-3">
            <i className="bi bi-twitter"></i> Twitter
          </a><br />
          <a href="https://github.com" className="text-light me-3">
            <i className="bi bi-github"></i> GitHub
          </a><br />
          <a href="https://linkedin.com" className="text-light">
            <i className="bi bi-linkedin"></i> LinkedIn
          </a>
        </div>

      </div>
    </div>

    {/* Bottom Bar */}
    <div className="bg-secondary text-center py-3 mt-4">
      © {new Date().getFullYear()} MyBlog. All Rights Reserved.
    </div>
  </footer>
  )
}

export default Footer
