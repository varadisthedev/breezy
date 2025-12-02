import React, { useRef } from "react";
import Moveable from "react-moveable";

export default function TestMoveable() {
  const targetRef = useRef(null);

  return (
    <>
      <div
        ref={targetRef}
        className="target"
        style={{
          width: "150px",
          height: "150px",
          background: "skyblue",
          position: "absolute",
          left: "300px",
          top: "200px",
          zIndex: 10,
        }}
      />

      <Moveable
        target={targetRef.current}
        draggable={true}
        resizable={true}
        throttleDrag={0}
        onDrag={({ target, left, top }) => {
          target.style.left = `${left}px`;
          target.style.top = `${top}px`;
        }}
        onResize={({ target, width, height }) => {
          target.style.width = `${width}px`;
          target.style.height = `${height}px`;
        }}
      />
    </>
  );
}
