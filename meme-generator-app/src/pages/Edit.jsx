import { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Text from "../components/Text";
import * as htmlToImage from "html-to-image";
import "../App.css"

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const [fontSize, setFontSize] = useState(24);
const [color, setColor] = useState("#ffffff");


  const memeRef = useRef(null);

  const addText = () => {
    setCount(count + 1);
  };

  const saveImage = () => {
    htmlToImage.toJpeg(memeRef.current).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "meme.jpeg";
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div className="">
      <div ref={memeRef} className="meme">
        <img src={params.get("url")} width="350px" alt="" />
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <Text key={i} fontSize={fontSize} color={color}/>
          ))}
      </div>

<div className="controls">
  <input
    type="range"
    min="12"
    max="72"
    value={fontSize}
    onChange={(e) => setFontSize(e.target.value)}
  />

  <input
    type="color"
    value={color}
    onChange={(e) => setColor(e.target.value)}
  />
</div>

      <Button className="m-3" onClick={addText}>Add Text</Button>
      <Button variant="success" onClick={saveImage}>
        Save
      </Button>
    </div>
  );
};

export default EditPage;
