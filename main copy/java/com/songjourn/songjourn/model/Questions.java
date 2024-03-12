package com.songjourn.songjourn.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Questions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    private Long id;

    @Column(name = "spotify_id") // foreign key to track table
    private String spotifyId;

    @Column(name = "correct_answer") // foreign key to track table
    private String correctAnswer;
//    @OneToOne(mappedBy = "question")
//    private Track track;

    @ManyToMany
    @JoinTable(
            name = "answer_options",
            joinColumns = @JoinColumn(name = "question_id"),
            inverseJoinColumns = @JoinColumn(name = "country_id")
    )
    private List<Country> answerOptions;

    public Questions() {
    }
}
