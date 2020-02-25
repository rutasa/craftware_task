import React from "react";
import ReactTooltip from "react-tooltip";
import * as questionIcon from "./assets/question.png";

export default function Tooltip({ content, className }) {
  return (
    <>
      <img
        src={questionIcon}
        alt="question icon"
        data-tip={content}
        title={content}
        className={className}
      />
      <ReactTooltip />
    </>
  );
}
