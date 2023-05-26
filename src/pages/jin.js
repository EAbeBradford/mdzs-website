import React, { useEffect, useState } from "react";
import axios from 'axios';
const Jin = () => {
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
    axios.get('https://mdzs-api.fly.dev/characters/sect/jin')
      .then(res => {
        console.log('Response from main API: ', res)
        console.log('Jin Data: ', res.data)
        let index = Math.floor(Math.random()* res.data.length)
        let jinData = res.data[index];
        
        
        document.body.style.backgroundColor = "rgb(242, 220, 165)"
        let name = jinData.birthName;
        if(jinData.birthName===""){
          name = jinData.courtesyName;
        }
        console.log("name",name)
        setData({ birthName: jinData.birthName, 
            courtesyName: jinData.courtesyName, 
            title: jinData.title, 
            allies: jinData.allies, 
            sect: jinData.sect, 
             weapon: jinData.weapon,
             picture: jinData.picture,
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

export default Jin;