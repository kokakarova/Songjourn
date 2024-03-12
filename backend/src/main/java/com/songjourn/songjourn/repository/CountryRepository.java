package com.songjourn.songjourn.repository;

import com.songjourn.songjourn.model.Country;
import org.springframework.stereotype.Repository;

@Repository
public class CountryRepository {

    private final ICountryRepository repo;

    public CountryRepository(ICountryRepository repo) {
        this.repo = repo;
    }

    public Long getCountryTableSize() {
        return repo.count();
    }

    public Country findCountryById(Long id) {
        return repo.findById(id).orElseThrow();
    }
}
