//package com.songjourn.songjourn.model;
//
//import jakarta.persistence.*;
//
//import java.util.List;
//
//@Entity
//public class Questions {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "question_id")
//    private Long id;
//
//    @Column(name = "spotify_id") // foreign key to track table
//    private String spotifyId;
//
//    @Column(name = "correct_answer") // foreign key to track table
//    private String correctAnswer;
//
//    @ManyToMany
//    @JoinTable(
//            name = "answer_options",
//            joinColumns = @JoinColumn(name = "question_id"),
//            inverseJoinColumns = @JoinColumn(name = "country_id")
//    )
//    private List<Country> answerOptions;
//
////    @Column(name = "option_1")  // foreign key to country table
////    private String option1;
////
////    @Column(name = "option_2") // foreign key to country table
////    private String option2;
////
////    @Column(name = "option_3") // foreign key to country table
////    private String option3;
////
////    @Column(name = "option_4") // foreign key to country table
////    private String option4;
//
//    public Questions() {
//    }
//
//    public String getSpotifyId() {
//        return spotifyId;
//    }
//
//    public void setSpotifyId(String spotifyId) {
//        this.spotifyId = spotifyId;
//    }
//
//    public String getCorrectAnswer() {
//        return correctAnswer;
//    }
//
//    public void setCorrectAnswer(String correctAnswer) {
//        this.correctAnswer = correctAnswer;
//    }
//}
