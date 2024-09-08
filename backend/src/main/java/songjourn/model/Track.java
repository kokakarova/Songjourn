package songjourn.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "tracks")
@Data
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
}
