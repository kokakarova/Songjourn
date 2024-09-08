package songjourn.dto;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public record QuestionResponseDto(String spotifyId,
                                  String correctAnswer,
                                  String option1,
                                  String option2,
                                  String option3,
                                  String option4) {

    public static QuestionResponseDto toDto(QuestionDto q) {
        List<Integer> indexes = new ArrayList<>(List.of(0, 1, 2, 3));
        Collections.shuffle(indexes);
        return new QuestionResponseDto(
                q.spotifyId(),
                q.correctAnswer(),
                q.answerOptions().get(indexes.get(0)),
                q.answerOptions().get(indexes.get(1)),
                q.answerOptions().get(indexes.get(2)),
                q.answerOptions().get(indexes.get(3))
        );
    }
}
