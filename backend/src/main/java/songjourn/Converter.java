package songjourn;

import songjourn.model.Question;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Converter {

    public static QuestionDto toDto(Question q) {
        List<Integer> indexes = new ArrayList<>(List.of(0, 1, 2, 3));
        Collections.shuffle(indexes);
        return new QuestionDto(
                q.getSpotifyId(),
                q.getCorrectAnswer(),
                q.getAnswerOptions().get(indexes.get(0)),
                q.getAnswerOptions().get(indexes.get(1)),
                q.getAnswerOptions().get(indexes.get(2)),
                q.getAnswerOptions().get(indexes.get(3))
        );
    }
}
