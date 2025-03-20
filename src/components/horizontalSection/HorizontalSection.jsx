import React from "react";
import Card from "../card/Card";

const HorizontalSection = ({ itemArray }) => {
  return (
    <section className="flex  gap-6 overflow-auto no-scrollbar pt-4">
      {itemArray?.items?.map((item, i) => (
        <Card item={item} key={item.name} />
      ))}
    </section>
  );
};

export default HorizontalSection;
