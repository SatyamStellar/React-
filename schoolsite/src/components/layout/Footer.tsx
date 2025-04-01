// src/components/layout/Footer.tsx
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Brightfuture Academy</h3>
            <p className="text-sm text-muted-foreground">
              Empowering minds, shaping futures, and building character through
              excellence in education.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-sm hover:text-primary">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-sm hover:text-primary">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Education Street</li>
              <li>Learning City, LC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@brightfuture.edu</li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons/links here */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 Brightfuture Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};