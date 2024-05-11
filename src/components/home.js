import React, { useState } from 'react'
import axios from 'axios'
import { StyledHome } from '../styled/Home.styled'

export function Home() {
  let file;
  const [imageFileName, setImageFileName] = useState("");
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  const BASE_FILE_PATH = "images/";

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      file = event.target.files[0];
      console.log(file);
      setImageFileName(file.name);
      console.log(file.name);

      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  const fileUpload = (event) => {
    axios.post("http://localhost:8000/predictBacteriaClass", { "imageFilePath": BASE_FILE_PATH + imageFileName })
      .then((response) => {
        console.log(response);
        if (response !== "") {
          setResult("Bacteria Class: " + (response.data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <StyledHome>
      <h1 className="heading">Identification of Urinary Tract Infection Causing Bacteria from Microbial Colony Images using Deep Learning</h1>
      <div className='mainDiv'>
        <div className='formDiv'>
          <div className='innerDiv'>
            <div><label>Upload Image</label></div>
            <div><input type='file' name='petriDishImage' onChange={handleFileChange} /></div>
            <input type='submit' className='submitButton' onClick={fileUpload}></input>
          </div>
        </div>
        <div className='mainImageDiv'>
          <div className='headingsDiv'>
            <h1>Image</h1>
          </div>
          <div className='imageInputDiv'>
            <div className='imageDiv'>{image && <img src={image}/>}</div>
            <div className='result'><h2>{result}</h2></div>
          </div>
        </div>
      </div>
    </StyledHome>
  )
}

