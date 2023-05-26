import React, { useEffect, useState } from "react";
import axios from 'axios';
const Jiang = () => {
  const [Data, setData] = useState({
    birthName: '',
    courtesyName: '',
    title: '',
    sect: '',
    weapon: [],
    picture: '',
    alt:''


  })
  useEffect(() => {
    axios.get('https://mdzs-api.fly.dev/characters/sect/jiang')
      .then(res => {
        console.log('Response from main API: ', res)
        console.log('Jiang Data: ', res.data)
        let index = Math.floor(Math.random()* res.data.length)
        let jiangData = res.data[index];
        
        
        document.body.style.backgroundColor = "rgb(203, 192, 232)"
        let name = jiangData.birthName;
        if(jiangData.birthName===""){
          name = jiangData.courtesyName;
        }
        console.log("name",name)
        setData({ birthName: jiangData.birthName, 
            courtesyName: jiangData.courtesyName, 
            title: jiangData.title, 
            allies: jiangData.allies, 
            sect: jiangData.sect, 
             weapon: jiangData.weapon,
             picture: jiangData.picture,
             alt: name
         })
      })
      .catch(err => {
        console.log(err);
      })
  }, [])


  return (
    <div>
      {/* <style>{'body { background-color: {Data.color}; }'}</style> */}
      <h1> Birth Name: {Data.birthName}</h1>
      <h1> Courtesy Name: {Data.courtesyName}</h1>
      <h1> Title: {Data.title}</h1>
      <h1> Sect: {Data.sect}</h1>
      <h1>Weapon: </h1>
      <>
        {Data.weapon.map((d) => {
          return (
            <div className="container">
              <ul>
                <h1>{d}</h1>
              </ul>
            </div>
          );
        })}
      </>
      <img src={Data.picture} alt={Data.alt} class="scale-down" />
    </div>
  );
};

export default Jiang;