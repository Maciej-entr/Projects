import React, { useRef, useState } from 'react'
import './Imagegenerator.css'
import default_image from '../../components/assets/default_image.jpg'

const ImageGenerator = () => {

const[image_url,setImage_url] = useState("/")
let inputRef = useRef(null)
const[loading,setLoading] = useState(false)

const imageGenerator = () => {
  if(inputRef.current.value===""){
    return 0;
  }
  setLoading(true)
  const response = async(e) =>  await fetch(
    "https://api.openai.com/v1/images/generations",
    {
      method: 'POST',
      headers:{
        "Content-Type":"application.json",
      Authorization:
      "Bearer YOUR-API-KEY",
      "User-Agent": "Chrome",

      },
      body: JSON.stringfy({
        model: "dall-e-3",
        prompt: `${inputRef.current.value}`,
        n:1,
        size: "512x512",
      })
    }
  )
  let data = async() => await response.json()
  let data_array = data.data[0]
  setImage_url(data_array[0].url)
  setLoading(false)
}
  return (
    <div className='ai-image-generator'>
        <div className="header">
            AI Image <span>Generator</span>
        </div>
           <div className="img-loading">
            <div className="image">
                <img src={image_url ==="/"?default_image:image_url} alt="" />
           <div className={loading?"loading-bar-full":"loading-bar"}>
            <div className={loading?"loading-text":"display-none"}>Loading..</div>
           </div>
            </div>
           </div>
           <div className="search-box">
            <input type="text" ref={inputRef} placeholder='What will we generate today?' className="search-input" />
            <div className="generate-btn" onClick={()=>{
              imageGenerator()
            }}>Generate</div>
           </div>
    </div>
  )
}

export default ImageGenerator