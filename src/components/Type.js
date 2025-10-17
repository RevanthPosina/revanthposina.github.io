import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Machine Learning",
          "Data Engineering",
          "AI Workflows"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        cursor: '|', // Custom cursor for more visibility
        wrapperClassName: 'typewriter-text', // Custom class for text
        cursorClassName: 'typewriter-cursor', // Custom class for cursor
      }}
    />
  );
}

export default Type;