package com.songjourn.songjourn;

public record QuestionDto(String spotifyId,
                          String correctAnswer,
                          String option1,
                          String option2,
                          String option3,
                          String option4) {
}
