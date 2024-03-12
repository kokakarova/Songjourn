package com.songjourn.songjourn.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "countries")
public class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "country_id")
    private Long id;

    @Column(name = "country_name")
    private String country;

//    @ManyToMany(mappedBy = "answerOptions")
//    private List<Questions> questions;

    @OneToMany(mappedBy = "country")
    private List<Track> tracks;
}
