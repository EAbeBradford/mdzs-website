import React, { useEffect, useState } from "react";
import axios from "axios";
const Location = () => {
  const [Data, setData] = useState({
    name: "",
    sect: "",
    didItGetDestroyed: false,
    picture: "",
    desc: "",
    alt: "",
  });
  useEffect(() => {
    axios
      .get("https://mdzs-api.fly.dev/locations")
      .then((res) => {
        console.log("Response from main API: ", res);
        console.log("Random Data: ", res.data[8]);
        let index = Math.floor(Math.random() * res.data.length);
        let randomData = res.data[index];
       // let randomData = res.data;
        let color = "purple";
        if (randomData.sect === "Gusu Lan") {
          color = "rgb(185, 205, 230)";
        } else if (randomData.sect === "Qishan Wen") {
          color = "rgb(232, 151, 161)";
        } else if (randomData.sect === "Lanling Jin") {
          color = "rgb(242, 220, 165)";
        } else if (randomData.sect === "Qinghe Nie") {
          color = "rgb(140, 151, 170)";
        } else if (randomData.sect === "Yunmeng Jiang") {
          color = "rgb(203, 192, 232)";
        } else {
          color = "rgb(192,192,192)";
        }
        console.log(color);
        document.body.style.backgroundColor = color;
        setData({
          name: randomData.name,
          sect: randomData.sect,
          didItGetDestroyed: randomData.didItGetDestroyed,
          picture: randomData.picture,
          desc: randomData.description,
          alt: randomData.name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* <style>{'body { background-color: {Data.color}; }'}</style> */}
      <h1> Birth Name: {Data.name}</h1>
      <h2> Did it get destroyed? {Data.didItGetDestroyed? 'Yes': 'No'}</h2>
      <h3> Sect: {Data.sect}</h3>
      <p>{Data.desc}</p>
      <img src={Data.picture} alt={Data.alt} class="scale-down" />
    </div>
  );
};

export default Location;
