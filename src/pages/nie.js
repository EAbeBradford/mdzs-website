import React, { useEffect, useState } from "react";
import axios from 'axios';
const Nie = () => {
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
    axios.get('https://mdzs-api.fly.dev/characters/sect/nie')
      .then(res => {
        console.log('Response from main API: ', res)
        console.log('nie Data: ', res.data)
        let index = Math.floor(Math.random()* res.data.length)
        let nieData = res.data[index];
        
        
        document.body.style.backgroundColor = "rgb(140, 151, 170)"
        let name = nieData.birthName;
        if(nieData.birthName===""){
          name = nieData.courtesyName;
        }
        console.log("name",name)
        setData({ birthName: nieData.birthName, 
            courtesyName: nieData.courtesyName, 
            title: nieData.title, 
            allies: nieData.allies, 
            sect: nieData.sect, 
             weapon: nieData.weapon,
             picture: nieData.picture,
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

export default Nie;