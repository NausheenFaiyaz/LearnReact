import { useEffect, useState } from "react";
import MemeCard from "../components/Card.jsx";
import { getAllMemes } from "../api/memes.js";
import "../App.css"

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);
  return (
    <div className="row">
      {
        data.map((el,i)=> <MemeCard key={i} img={el.url} title={el.name}/> )
      }
    </div>
  );
};

export default HomePage;
