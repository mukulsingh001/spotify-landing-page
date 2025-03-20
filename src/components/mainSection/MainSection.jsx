import React from "react";
import HorizontalSection from "../horizontalSection/HorizontalSection";

const MainSection = ({ newRelease, categories }) => {
  return (
    <main className="bg-gray-900 p-6 min-h-lvh">
      <h2 className="text-2xl text-white">Latest Release</h2>
      <HorizontalSection itemArray={newRelease} />
      <h2 className="text-2xl text-white">Categories</h2>
      <HorizontalSection itemArray={categories} />
    </main>
  );
};

export default MainSection;
