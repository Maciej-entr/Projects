import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import BAckground from './components/Background/BAckground';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HEro/Hero';

function App() {

let heroData = [
  {text1:"",text2:""},
  {text1:"",text2:""},
  {text1:"",text2:""},
]

const [heroCount,setHeroCount] = useState(2)

const [playStatus,setPlayStatus] = useState(false)

useEffect(()=>{
  setInterval(()=>{
    setHeroCount((count)=>{return count===2?0:count+1})
  },3000)
},[])

  return (
    <div className="App">
     <BAckground playStatus={playStatus} heroCount={heroCount}/>
     <Navbar/>
     <Hero
     setPlayStatus={setPlayStatus}
     heroData={heroData[heroCount]}
     heroCount={heroCount}
     setHeroCount={setHeroCount}
     playStatus={playStatus}
     />
    </div>
  );
}

export default App;
