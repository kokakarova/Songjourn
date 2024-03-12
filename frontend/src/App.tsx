import { useEffect, useState } from 'react'
import './App.css'
import { HomeQuiz } from './components/HomeQuiz'
import { Route, Routes } from 'react-router-dom'
import Question from './components/Question'
import { getQuestion, setClientToken } from './util'
import Login from './components/LogIn'
import { Welcome } from './components/Welcome'

function App() {
  const [spotifyId, setSpotifyId] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2]  = useState("");
  const [option3, setOption3]  = useState("");
  const [option4, setOption4]  = useState("");
  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash: string = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const extractedToken = hash.split("=")[1].split("&")[0];
      window.localStorage.setItem("token", extractedToken);
      setToken(extractedToken);
      setClientToken(extractedToken);
    } else {
      setToken(token);
      setClientToken(token);
    }
  },[])
  
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

  return !token ? (
    <Login />
  ) : (
    <>
      <Routes>
        <Route index element={<Welcome />}></Route>
        <Route path="/homequiz/*" element={<HomeQuiz handleclick={handleclick}/>}></Route>
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
