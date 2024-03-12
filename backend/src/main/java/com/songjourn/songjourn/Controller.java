package com.songjourn.songjourn;

import com.songjourn.songjourn.model.Question;
import org.apache.catalina.connector.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class Controller {
//    private Question testQuestion1;
//    private Question testQuestion2;
//
//    public Controller(Question testQuestion1, Question testQuestion2) {
//        this.testQuestion1 = testQuestion1;
//        this.testQuestion2 = testQuestion2;
//    }

    //    @GetMapping
//    public ResponseEntity<Question> getQuestion() {
//        testQuestion.setSpotifyId("https://api.spotify.com/v1/tracks/2takcwOaAZWiXQijPHIx7B");
//        testQuestion.setCorrectAnswer("Sweden");
//        testQuestion.setOption1("Sweden");
//        testQuestion.setOption2("USA");
//        testQuestion.setOption3("Finland");
//        testQuestion.setOption4("Korea");
//        return ResponseEntity.ok().body(testQuestion);
//    }
    // 1EjIXKhNHI00ZLMRpS8iz8
    @GetMapping
    public ResponseEntity<List<Question>> getQuestion() {
        List<Question> testList = new ArrayList<>();
        Question testQ1 = new Question();
        Question testQ2 = new Question();
        testQ1.setSpotifyId("2takcwOaAZWiXQijPHIx7B");
        testQ1.setCorrectAnswer("Sweden");
        testQ1.setOption1("Sweden");
        testQ1.setOption2("USA");
        testQ1.setOption3("Finland");
        testQ1.setOption4("Korea");

        testList.add(testQ1);

        testQ2.setSpotifyId("1EjIXKhNHI00ZLMRpS8iz8");
        testQ2.setCorrectAnswer("Switzerland");
        testQ2.setOption1("UK");
        testQ2.setOption2("Switzerland");
        testQ2.setOption3("Netherlands");
        testQ2.setOption4("Germany");

        testList.add(testQ2);

        System.out.println("testList 1 = " + testList.get(0).getCorrectAnswer());
        System.out.println("testList 2 = " + testList.get(1).getCorrectAnswer());

        return ResponseEntity.ok().body(testList);
    }

}
