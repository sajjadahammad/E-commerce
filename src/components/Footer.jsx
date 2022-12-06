import React from "react";

function Footer() {
  return (
    <>
      <footer className="site-footer" style={{ backgroundColor: "#393D47" }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify" style={{ color: "white" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Similique quis nobis nihil suscipit, eveniet, voluptates odio
                dolores commodi modi, a inventore veniam ad! Laudantium ab
                asperiores iusto odio quasi explicabo! .
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <ul className="footer-links" style={{ color: "white" }}>
                <li>
                  <a
                    href="http://scanfcode.com/about/"
                    style={{ color: "white" }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/contact/"
                    style={{ color: "white" }}
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/contribute-at-scanfcode/"
                    style={{ color: "white" }}
                  >
                    Contribute
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/privacy-policy/"
                    style={{ color: "white" }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="http://scanfcode.com/sitemap/"
                    style={{ color: "white" }}
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
