import { useRef, useState } from "react";
import Draggable from "react-draggable";

const Text = ({ fontSize, color }) => {
  // const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("Double Click to Edit");
  const nodeRef = useRef(null);

  return (
    <>
      <Draggable bounds="parent" nodeRef={nodeRef}>
        <div
          ref={nodeRef}
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            cursor: "move",
            userSelect: "none",
          }}
        >
          <h4
            contentEditable
            suppressContentEditableWarning
            onChange={(e) => setValue(e.target.value)}
            style={{
              fontSize: `${fontSize}px`,
              color,
              fontWeight: "bold",
              margin: 0,
              outline: "none",
              whiteSpace: "nowrap",
            }}
          >
            {value}
          </h4>
        </div>
      </Draggable>
    </>
  );
};

export default Text;
