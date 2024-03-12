package com.songjourn.songjourn.repository;

import com.songjourn.songjourn.model.Track;
import org.springframework.data.repository.ListCrudRepository;

public interface ITrackRepository extends ListCrudRepository<Track, Long> {
}
