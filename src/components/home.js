import React, { useState } from 'react'
import axios from 'axios'
import { StyledHome } from '../styled/Home.styled'

export function Home() {
  let formData;
  let file;
  const [imageFileName, setImageFileName] = useState("");

  const BASE_FILE_PATH = "images/";

  const handleFileChange = (event) =>{
    file = event.target.files[0];
    console.log(file);
    console.log(file.name);
    setImageFileName(file.name);
  }

  const fileUpload = (event) => {
    axios.post("http://192.168.0.108:8000/predictBacteriaClass", {"imageFilePath" : BASE_FILE_PATH + imageFileName})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledHome>
        <h1 class="heading">Identification of Urinary Tract Infection Causing Bacteria from Microbial Colony Images using Deep Learning</h1>
        <div className='formDiv'>
            <div className='innerDiv'>
              <div><label>Upload Image</label></div>
              <div><input type='file' name='petriDishImage' onChange={handleFileChange}/></div>
            </div>
            <div><input type='submit' className='submitButton' onClick={fileUpload}></input></div>
        </div>
    </StyledHome>
  )
}

