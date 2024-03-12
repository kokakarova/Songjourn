package com.songjourn.songjourn.repository;

import com.songjourn.songjourn.model.Country;
import org.springframework.data.repository.ListCrudRepository;

public interface ICountryRepository extends ListCrudRepository<Country, Long> {
}
