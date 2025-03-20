import React from "react";

const Card = ({ item }) => {
  const name = item.name || "";
  const imgSrc = item?.images
    ? item.images[0]?.url
    : item?.icons
    ? item.icons[0]?.url
    : "";
  const artists = item?.artists
    ? item.artists?.reduce((acc, curr, i) => {
        return i === 0 ? `${acc} ${curr.name}` : `${acc}, ${curr.name}`;
      }, "")
    : "";
  return (
    <div className="h-75 w-45 grow-0 shrink-0 basis-auto">
      <img src={imgSrc} alt="image not found" className="rounded-xl" />
      <p className="text-white pt-2">{name}</p>
      <p className="truncate text-sm text-gray-300">{artists}</p>
    </div>
  );
};

export default Card;
