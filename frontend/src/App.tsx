import { useState } from 'react'
import './App.css'
import { Home } from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Question from './components/Question'
import { getQuestion } from './util'

function App() {
  let spotifyId = "";
  let correctAnswer = "";
  let option1 = "";
  let option2 = "";
  let option3 = "";
  let option4 = "";

  const handleclick = () => {
    console.log("in try block");
    getQuestion()
      .then(async (res) => res.json())
      .then((data) => {
        // setQuestion(data);
        spotifyId = data.spotifyId;
        correctAnswer = data.correctAnswer;
        option1 = data.option1;
        option2 = data.option2;
        option3 = data.option3;
        option4 = data.option4;
        console.log("fetched data: ", data.spotifyId);
      })
      .catch((e) => console.log(e));
  };
  
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path="/home/*" element={<Home handleclick={handleclick}/>}></Route>
      <Route
        path="/questions"
        element={
          <Question
            spotifyId={spotifyId}
            correctAnswer={correctAnswer}
            option1={option1}
            option2={option2}
            option3={option3}
            option4={option4}
          />
        }
      ></Route>
      </Routes>
    </>
  )
}

export default App
