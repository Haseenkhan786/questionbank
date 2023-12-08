
import './App.css';

import React, { useState } from 'react';
import axios from 'axios';


function App() {
  
const [formData, setFormData] = useState({
    id: '',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correctanswer: '',
  });
  const [file, setFile] = useState();

  const handleImageChange = (e) => {
     
    setFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit =  async(e) => {
    e.preventDefault();

   
    const formData1 = new FormData();
    formData1.append('file', file); 
    formData1.append('id', formData.id);
    formData1.append('question', formData.question);
    formData1.append('option1', formData.option1);
    formData1.append('option2', formData.option2);
    formData1.append('option3', formData.option3);
    formData1.append('option4', formData.option4);
    formData1.append('correctanswer', formData.correctanswer);


    try {
      
      const response = await axios.post('http://localhost:3001/postdata', formData1);
      console.log(response.data);
     
    } catch (error) {
      console.error('Error:', error);
      
    }
    console.log('form submitted',formData);
  };

  return (
    <div className='container'>
      <h2>Question Bank</h2>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <div>
        <label>
          ID:
          <input  type="text" name="id" value={formData.id} onChange={handleChange} />
        </label>
        </div>
        <div>
        <label>
          Question:
          <input  type="text" name="question" value={formData.question} onChange={handleChange} />
        </label>
        </div>
        <div>
        <label>
          Option1:
          <input name='option1' type="text" value={formData.option1} onChange={handleChange} />
        
        </label>
        </div>
        <div>
        <label>
        Option2:
          <input  name='option2' type="text" value={formData.option2} onChange={handleChange} />
        </label>
        </div>
        <div>
        <label>
        Option3:
          <input  name='option3' type="text" value={formData.option3} onChange={handleChange} />
        </label>
        </div>

        <div>
        <label>
        Option4:
          <input  type="text" name='option4' value={formData.option4} onChange={handleChange} />
        </label>
        </div>

        <div>
        <label>
          Image for option1:
          <input type="file"   onChange={handleImageChange} />
        </label>

        </div>

        <div>
        <label>
        Correct Answer:
          <input  type="text" name='correctanswer' value={formData.correctanswer} onChange={handleChange} />
        </label>
        </div>
       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  
}

export default App;




