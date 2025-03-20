import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full p-8 gap-6 bg-black justify-center sm:flex-row sm:gap-16">
      <div>
        <h3 className="text-white mb-4">Company</h3>
        <ul className="text-sm text-gray-300">
          <li>About</li>
          <li>Jobs</li>
          <li>For the Record</li>
        </ul>
      </div>
      <div>
        <h3 className="text-white mb-4">Communities</h3>
        <ul className="text-sm text-gray-300">
          <li>For Artists</li>
          <li>Developers</li>
          <li>Advertising</li>
          <li>Investors</li>
          <li>Vendors</li>
        </ul>
      </div>
      <div>
        <h3 className="text-white mb-4">Useful links</h3>
        <ul className="text-sm text-gray-300">
          <li>Support</li>
          <li>Free Mobile App</li>
        </ul>
      </div>
      <div>
        <h3 className="text-white mb-4">Spotify Plans</h3>
        <ul className="text-sm text-gray-300">
          <li>Premium Individual</li>
          <li>Premium Duo</li>
          <li>Premium Family</li>
          <li>Premium Student</li>
          <li>Spotify Free</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
