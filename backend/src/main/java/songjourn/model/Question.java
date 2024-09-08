package songjourn.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class Question {
    private String spotifyId;
    private String correctAnswer;
    private List<String> answerOptions;

}
