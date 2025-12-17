import { useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Text from "../components/Text";
import * as htmlToImage from "html-to-image";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);

  const memeRef = useRef(null);

  const addText = () => {
    setCount(count + 1);
    console.log(setCount);
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
    <div className="edit-card-page">
      <div style={{ width: "351px" }} ref={memeRef} className="meme m-5">
        <img src={params.get("url")} width="350px" alt="" />
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <Text key={i} />
          ))}
      </div>
      <Button className="m-3" onClick={addText}>Add Text</Button>
      <Button variant="success" onClick={saveImage}>
        Save
      </Button>
    </div>
  );
};

export default EditPage;
