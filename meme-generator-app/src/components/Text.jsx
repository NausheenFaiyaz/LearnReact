import { useRef, useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  // const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState("Double Click to Edit");
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} style={{ position: "relative" }}>
        <h4 contentEditable={true} onChange={(e) => setValue(e.target.value)}>
          {value}
        </h4>
      </div>
    </Draggable>
  );
};

export default Text;
