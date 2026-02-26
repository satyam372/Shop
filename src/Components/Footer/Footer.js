import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-start justify-between gap-4">
          {/* Logo left */}
          <div className="flex-shrink-0">
            <img
              src="/path/to/logo.png"
              alt="Shop Logo"
              className="w-16 h-16"
            />
          </div>

          {/* Contact centered */}
          <div className="flex-1 text-center">
            <p className="text-lg font-semibold">Contact Us</p>
            <p className="mt-2">Phone: 9922214545</p>
            <p>Email: SatyamPokharna45@gmail.com</p>
            <p className="mt-1">Shop Address: 123 Main Street, City, Country</p>
          </div>

          {/* spacer to balance layout */}
          <div className="w-16" />
        </div>
      </div>

      {/* Copyright bottom */}
      <div className="bg-gray-900 text-white text-center py-3">
        &copy; 2024 Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
