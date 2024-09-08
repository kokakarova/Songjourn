package songjourn;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import songjourn.dto.QuestionResponseDto;

import java.util.List;


@RestController
@RequestMapping("/api")
@CrossOrigin
@AllArgsConstructor
public class Controller {

private final QuizService service;


    @GetMapping
    public ResponseEntity<List<QuestionResponseDto>> getQuestion() {
        List<QuestionResponseDto> questionsList = service.getListOfQuestions()
                .stream()
                .map(QuestionResponseDto::toDto)
                .toList();
        return ResponseEntity.ok().body(questionsList);
    }

}
