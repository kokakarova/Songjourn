package songjourn.repository;

import songjourn.model.Track;
import org.springframework.stereotype.Repository;

@Repository
public class TrackRepository {
    private final ITrackRepository repo;

    public TrackRepository(ITrackRepository repo) {
        this.repo = repo;
    }

    public Long getTrackTableSize() {
        return repo.count();
    }

    public Track findTrackById(Long trackId) {
        return repo.findById(trackId).orElseThrow();
    }
}

