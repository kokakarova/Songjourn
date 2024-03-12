package com.songjourn.songjourn;

import com.songjourn.songjourn.model.Question;

import java.util.Collections;
import java.util.List;

public class Converter {

    public static QuestionDto toDto(Question q) {
//        Collections.shuffle(q.getAnswerOptions());
        System.out.println("q.getAnswerOptions().get(0) = " + q.getAnswerOptions().get(0));
        return new QuestionDto(
                q.getSpotifyId(),
                q.getCorrectAnswer(),
                q.getAnswerOptions().get(0),
                q.getAnswerOptions().get(1),
                q.getAnswerOptions().get(2),
                q.getAnswerOptions().get(3)
                );
    }
}
