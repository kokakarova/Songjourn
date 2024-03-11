package com.songjourn.songjourn;

import com.songjourn.songjourn.model.Question;
import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class Controller {
    private Question testQuestion;

    public Controller(Question testQuestion) {
        this.testQuestion = testQuestion;
    }

    @GetMapping
    public ResponseEntity<Question> getQuestion() {
        testQuestion.setSpotifyId("https://api.spotify.com/v1/tracks/2takcwOaAZWiXQijPHIx7B");
        testQuestion.setCorrectAnswer("Sweden");
        testQuestion.setOption1("Sweden");
        testQuestion.setOption2("USA");
        testQuestion.setOption3("Finland");
        testQuestion.setOption4("Korea");
        return ResponseEntity.ok().body(testQuestion);
    }

    @GetMapping ("/test")
    public ResponseEntity<String> testGetString() {
        return ResponseEntity.ok().body("Result");
    }
}
