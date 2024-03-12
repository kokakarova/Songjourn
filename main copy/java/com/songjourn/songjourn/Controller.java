package com.songjourn.songjourn;

import com.songjourn.songjourn.model.Questions;
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

    private final QuizService service;

    public Controller(QuizService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<QuestionDto>> getQuestion() {
        List<QuestionDto> questionsList = new ArrayList<>();
        // get 5 questions
        service.getQuestions();
        // convert questions to DTOs
        // add to list
//        QuestionDto q = new QuestionDto();

        return ResponseEntity.ok().body(questionsList);
    }

}
