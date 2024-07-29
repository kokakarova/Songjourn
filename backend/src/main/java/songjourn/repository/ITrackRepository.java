package songjourn.repository;

import songjourn.model.Track;
import org.springframework.data.repository.ListCrudRepository;

public interface ITrackRepository extends ListCrudRepository<Track, Long> {
}
