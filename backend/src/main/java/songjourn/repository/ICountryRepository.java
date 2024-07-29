package songjourn.repository;

import songjourn.model.Country;
import org.springframework.data.repository.ListCrudRepository;

public interface ICountryRepository extends ListCrudRepository<Country, Long> {
}
