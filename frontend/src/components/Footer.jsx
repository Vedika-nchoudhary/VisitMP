function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5 border-top border-secondary">
      <div className="container">
        <div className="row gy-4">
          {/* Brand Section */}
          <div className="col-md-4 text-center text-md-start">
            <h4 className="fw-bold text-warning mb-2">MP Tourism</h4>
            <p className="text-secondary mb-0">
              Explore the heart of India with breathtaking landscapes, culture,
              and heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-center">
            <h6 className="text-uppercase fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a
                  href="/"
                  className="text-light text-decoration-none link-hover"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/explore"
                  className="text-light text-decoration-none link-hover"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-light text-decoration-none link-hover"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 text-center text-md-end">
            <h6 className="text-uppercase fw-semibold mb-3">Contact</h6>
            <p className="mb-1 text-secondary">📧 info@mptourism.com</p>
            <p className="mb-0 text-secondary">📍 Madhya Pradesh, India</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="border-secondary my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-2 mb-md-0 text-secondary">
            © 2026 MP Tourism. All rights reserved.
          </p>

          <div className="d-flex gap-3">
            <a href="#" className="text-secondary text-decoration-none">
              Privacy Policy
            </a>
            <a href="#" className="text-secondary text-decoration-none">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
