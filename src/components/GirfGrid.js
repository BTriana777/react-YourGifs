import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

const GirfGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);
  return (
    <>
      <div className="titleCategory animate__animated animate__slideInLeft">
        <h3>{category}</h3>
      </div>
      {loading && <p className="loading animate__animated animate__flash animate__repeat-3">Loading...</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
export default GirfGrid;
