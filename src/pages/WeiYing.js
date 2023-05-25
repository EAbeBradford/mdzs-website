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
    alt:''


  })
  useEffect(() => {
    axios.get('https://mdzs-api.fly.dev/characters')
      .then(res => {
        console.log('Response from main API: ', res)
        console.log('Wei Ying Data: ', res.data)
        let index = Math.floor(Math.random()* res.data.length)
        let WeiYingData = res.data[index];
        let color = "purple";
        if(WeiYingData.sect==="Gusu Lan"){
            color = "rgb(185, 205, 230)"
        }
        else if(WeiYingData.sect==="Qishan Wen"){
            color = "rgb(232, 151, 161)"
        }
        else if(WeiYingData.sect==="Lanling Jin"){
            color = "rgb(242, 220, 165)"
        }
        else if(WeiYingData.sect==="Qinghe Nie"){
            color = "rgb(70, 93, 107)"
        }
        else if(WeiYingData.sect==="Yunmeng Jiang"){
            color = "rgb(203, 192, 232)"
        }
        else{
            color = "rgb(192,192,192)"
        }
        console.log(color);
        document.body.style.backgroundColor = color
        let name = WeiYingData.birthName;
        if(WeiYingData.birthName===""){
          name = WeiYingData.courtesyName;
        }
        
        setData({ birthName: WeiYingData.birthName, 
            courtesyName: WeiYingData.courtesyName, 
            title: WeiYingData.title, 
            allies: WeiYingData.allies, 
            sect: WeiYingData.sect, 
             weapon: WeiYingData.weapon,
             picture: WeiYingData.picture,
             alt: name
         })
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  let color = "purple";
  if(Data.sect==="Gusu Lan"){
    color = "rgb(124, 180, 237)"
  }
 
  return (

    <div style={{backgroundColor:Data.color}}>
        {/* <style>{'body { background-color: {Data.color}; }'}</style> */}
      <h1> Birth Name: {Data.birthName}</h1>
      <h1> Courtesy Name: {Data.courtesyName}</h1>
      <h1> Title: {Data.title}</h1>
      <h1> Sect: {Data.sect}</h1>
      <h1> Weapon: {Data.weapon}</h1>

      <img src={Data.picture} alt={Data.alt} class='scale-down'/>

      

    </div>
  );
};

export default WeiYing;