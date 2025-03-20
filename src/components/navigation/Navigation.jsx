import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import spotify from "/spotify_logo5.svg";
import hamburger from "/hamburger_menu1.png";
import close from "/close1.png";

const navItems = (
  <ul className="flex flex-col items-center justify-center gap-8 text-white sm:flex-row-reverse">
    <li>Sign Up</li>
    <li>Login</li>
    <li>Premimum</li>
    <li>Support</li>
    <li>Download</li>
  </ul>
);

const Navigation = () => {
  const [showButton, setShowButton] = useState(
    window.innerWidth < 640 ? true : false
  );
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    addEventListener("resize", () => {
      if (window.innerWidth < 640) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  return (
    <nav className="flex items-center justify-around h-16 py-2 bg-black">
      <div className="flex items-center gap-8">
        <img src={spotify} className="size-16" alt="spotify logo" />
        <input
          type="text"
          placeholder="What do you want to play?"
          className="h-10 rounded-full text-white p-4 w-full overflow-ellipsis lg:w-96 bg-[#1f1f1f1]"
        />
      </div>

      {showButton ? (
        <img
          src={hamburger}
          className="size-8 cursor-pointer"
          alt="Menu button"
          onClick={() => setShowMenu((prev) => !prev)}
        />
      ) : (
        navItems
      )}
      {showMenu &&
        createPortal(
          <div className="fixed top-0 left-0 size-full p-16 bg-gray-800">
            <div className="flex w-full justify-end mb-4">
              <img
                src={close}
                alt="Close icon"
                className="size-6 cursor-pointer"
                onClick={() => setShowMenu((prev) => !prev)}
              />
            </div>
            {navItems}
          </div>,
          document.body
        )}
    </nav>
  );
};

export default Navigation;
