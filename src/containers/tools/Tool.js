import React from "react";
import "./Tool.scss";
import ToolCard from "../../components/toolCard/ToolCard";
import {techStackInfo} from "../../portfolio";

export default function Tool() {
  if (techStackInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">tools</h1>
        <div className="education-card-container">
          {techStackInfo.schools.map((school, index) => (
            <ToolCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
