import React, { useEffect, useState } from "react";
import axios from "axios";
const Random = () => {
  const [Data, setData] = useState({
    birthName: "",
    courtesyName: "",
    title: "",
    sect: "",
    weapon: [],
    picture: "",
    desc: "",
    alt: "",
  });
  useEffect(() => {
    axios
      .get("https://mdzs-api.fly.dev/characters/")
      .then((res) => {
        console.log("Response from main API: ", res);
        console.log("Random Data: ", res.data);
        let index = Math.floor(Math.random() * res.data.length);
        let randomData = res.data[index];
        //let randomData = res.data;
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
        let name = randomData.birthName;
        if (randomData.birthName === "") {
          name = randomData.courtesyName;
        }
        console.log("name", name);
        setData({
          birthName: randomData.birthName,
          courtesyName: randomData.courtesyName,
          title: randomData.title,
          allies: randomData.allies,
          sect: randomData.sect,
          weapon: randomData.weapon,
          picture: randomData.picture,
          desc: randomData.description,
          alt: name,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* <style>{'body { background-color: {Data.color}; }'}</style> */}
      <h1> Birth Name: {Data.birthName}</h1>
      <h1> Courtesy Name: {Data.courtesyName}</h1>
      <h1> Title: {Data.title}</h1>
      <h3> Sect: {Data.sect}</h3>
      <h3>Weapon: </h3>
      <>
        {Data.weapon.map((d) => {
          return (
            <div className="container">
              <ul>
                <p>{d}</p>
              </ul>
            </div>
          );
        })}
      </>
      <p>{Data.desc}</p>
      <img src={Data.picture} alt={Data.alt} class="scale-down" />
    </div>
  );
};

export default Random;
