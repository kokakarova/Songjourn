package songjourn;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import songjourn.dto.QuestionDto;

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
        List<QuestionDto> questionsList = service.getListOfQuestions()
                .stream()
                .map(QuestionDto::toDto)
                .toList();
        return ResponseEntity.ok().body(questionsList);
    }

}
