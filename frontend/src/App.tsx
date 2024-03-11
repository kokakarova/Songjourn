import { useState } from 'react'
import './App.css'
import { Home } from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Question from './components/Question'
import { getQuestion } from './util'

function App() {
  const [spotifyId, setSpotifyId] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2]  = useState("");
  const [option3, setOption3]  = useState("");
  const [option4, setOption4]  = useState("");

  const handleclick = () => {
    console.log("in try block");
    getQuestion()
      .then(async (res) => res.json())
      .then((data) => {
        // setQuestion(data);
        setSpotifyId(data.spotifyId);
        setCorrectAnswer(data.correctAnswer);
        setOption1(data.option1);
        setOption2(data.option2);
        setOption3(data.option3);
        setOption4(data.option4);
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
