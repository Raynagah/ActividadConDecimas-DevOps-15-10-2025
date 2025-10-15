import React from "react";

export default function Imagen({ src, alt }) {
  return <img src={src} alt={alt} className="rounded-xl shadow" />;
}
