import React from "react";

export const AppTile = ({title, description}) => {
    return (
      <div className="tile-container">
        <p className="tile-title">{title}</p>
        {Object.values(description).map((value, index) => (
           <p className="tile" key={index}>{value}</p>
        ))}
        
      </div>
    );
  };