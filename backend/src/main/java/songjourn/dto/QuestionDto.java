package songjourn.dto;

import java.util.List;

public record QuestionDto(
        String spotifyId,
        String correctAnswer,
        List<String>answerOptions
) {
}
