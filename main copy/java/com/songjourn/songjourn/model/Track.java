package com.songjourn.songjourn.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tracks")
public class Track {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "track_id")
    private Long id;

    @Column(name = "spotify_id")
    private String spotifyId;

    @ManyToOne(optional = false)
    @JoinColumn(name = "country_id")
    private Country country;

//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name = "question_id", referencedColumnName = "question_id")
//    private Questions question;

    public Track() {
    }

}
