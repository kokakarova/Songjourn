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

    public String getSpotifyId() {
        return spotifyId;
    }
}
