package com.songjourn.songjourn;

import com.songjourn.songjourn.model.Question;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

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

//    public static List<Integer> getRandomIndexes() {
//        List<Integer> randomIndexes = new ArrayList<>(List.of(0, 1, 2, 3));
//        Collections.shuffle(randomIndexes);
//        int randomNumber = 0;
//        for (int i = 0; i < 4; i++) {
//            randomNumber = getRandomNumber(0, 3);
//            while (randomIndexes.contains(randomNumber)) {
//                randomNumber = getRandomNumber(0, 3);
//            }
//            randomIndexes.add(randomNumber);
//        }
//        return randomIndexes;
//    }

    public static int getRandomNumber(int min, int max) {
        Random random = new Random();
        return random.nextInt(max - min) + min;
    }
}
