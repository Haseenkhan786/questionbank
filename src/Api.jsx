import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';

function Api() {
  const baseUrl = 'http://localhost:3001/uploads/';
  const [data, setData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
       
        const response = await axios.get('http://localhost:3001/getdata');

        // Update the component state with the fetched data
        setData(response.data);
        console.log(response.data.map(item => `${baseUrl}${item.storeimage}`));
      } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); 


  return (
    <div className='getdata'>
<h1> Data from database</h1>

  {
    
  data.map((item) => (
    <div  className='data' key={item.id}>
      <p>ID: {item.id}</p>
      <p style={{ fontWeight: 'bold' }}>Question: {item.question}</p>
      <p> Option1:{item.option1}</p>
      <p> Option2:{item.option2}</p>
      <p> Option3:{item.option3}</p>
      <p> Option4:{item.option4}</p>
      <p> Correct:{item.correctanswer}</p>
      <img src={`${baseUrl}${item.storeimage}`} alt='no image'/>


      </div>
  ))
  }


    </div>
  )
}

export default Api;