import React, { useState } from 'react'
import axios from 'axios'
import { StyledHome } from '../styled/Home.styled'

export function Home() {
  let formData;

  const handleFileChange = (event) =>{
    const file = event.target.files[0];
    formData = new FormData();
    formData.append("file", file);
  }

  const fileUpload = (event) => {
    axios.post("", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },})
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

