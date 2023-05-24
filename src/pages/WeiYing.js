import React, { useEffect, useState } from "react";
import axios from 'axios';
const WeiYing = () => {
  const [Data, setData] = useState({
    birthName: '',
    courtesyName: '',
    title: '',
    sect: '',
    weapon: [],
    picture: '',


  })
  useEffect(() => {
    axios.get('https://mdzs-api.fly.dev/characters/644fffc6ad59705a8ee36956')
      .then(res => {
        console.log('Response from main API: ', res)
        console.log('Wei Ying Data: ', res.data)
        // let index = Math.floor(Math.random()* res.data.length)
        let WeiYingData = res.data;
        
        console.log(WeiYingData.picture.width)
        
        setData({ birthName: WeiYingData.birthName, 
            courtesyName: WeiYingData.courtesyName, 
            title: WeiYingData.title, 
          allies: WeiYingData.allies, 
          sect: WeiYingData.sect, 
          weapon: WeiYingData.weapon,
          picture: WeiYingData.picture
         })
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
 
  return (

    <div>
      <h1> Birth Name: {Data.birthName}</h1>
      <h1> Courtesy Name: {Data.courtesyName}</h1>
      <h1> Title: {Data.title}</h1>
      <h1> Sect: {Data.sect}</h1>
      <h1> weapon: {Data.weapon}</h1>

      <img src={Data.picture} alt={Data.birthName} class='scale-down'/>

      

    </div>
  );
};

export default WeiYing;