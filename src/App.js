import { useState } from "react";
import StartScreen from "./Components/StartScreen";
import GameScreen from "./Components/GameScreen";
import "./App.scss";

const App = () => {
  const [started,setStarted] = useState(false);
  const [startWord,setStartWord] = useState('');
  const handleStart =(word)=>{
    setStartWord(word);
    setStarted(true);
  }

  return (
    <div className="app">
      {
        !started ? 
        (<StartScreen onStart={handleStart}/>)
        : (<GameScreen startWord={startWord}/>)
      }
    </div>
  );
};

export default App;