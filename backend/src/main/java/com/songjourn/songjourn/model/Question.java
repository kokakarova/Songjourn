package com.songjourn.songjourn.model;

import org.springframework.stereotype.Component;

import java.util.List;

public class Question {
    private String spotifyId;
    private String correctAnswer;
    private List<String> answerOptions;

    public Question(String spotifyId, String correctAnswer, List<String> answerOptions) {
        this.spotifyId = spotifyId;
        this.correctAnswer = correctAnswer;
        this.answerOptions = answerOptions;
    }

    public String getSpotifyId() {
        return spotifyId;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public List<String> getAnswerOptions() {
        return answerOptions;
    }
}
