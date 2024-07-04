package com.songjourn.songjourn;

import com.songjourn.songjourn.model.Question;
import com.songjourn.songjourn.model.Track;
import com.songjourn.songjourn.repository.CountryRepository;
import com.songjourn.songjourn.repository.TrackRepository;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class QuizService {
    private final TrackRepository trackRepo;
    private final CountryRepository countryRepo;

    public QuizService(TrackRepository trackRepo, CountryRepository countryRepo) {
        this.trackRepo = trackRepo;
        this.countryRepo = countryRepo;
    }

    public List<Question> getListOfQuestions() {
        List<Track> randomTracks = getRandomTracks();
        return randomTracks.stream()
                .map(t -> new Question(
                        t.getSpotifyId(),
                        t.getCountry().getCountry(),
                        getRandomCountries(Math.toIntExact(t.getCountry().getId()))
                )).toList();
    }

    public List<Track> getRandomTracks() {
        int max = Math.toIntExact(trackRepo.getTrackTableSize());
        Set<Integer> fiveRandomNumbers = getRandomIds(5, max);
        return fiveRandomNumbers.stream()
                .map(n -> trackRepo.findTrackById((long) n))
                .toList();
    }
    private Set<Integer> getRandomIds(int numberOfIds, int maxRange) {
        return new Random().ints(1, maxRange + 1)
                .distinct()
                .limit(numberOfIds)
                .boxed()
                .collect(Collectors.toSet());
    }
//    public List<Integer> getRandomIds(int numberOfIds, int maxRange) {
//        List<Integer> randomIds = new ArrayList<>();
//        int randomNumber = 0;
//        for (int i = 0; i < numberOfIds; i++) {
//            randomNumber = getRandomNumber(1, maxRange);
//            while (randomIds.contains(randomNumber)) {
//                randomNumber = getRandomNumber(1, maxRange);
//            }
//            randomIds.add(randomNumber);
//        }
//        return randomIds;
//    }

    public int getRandomNumber(int min, int max) {
        Random random = new Random();
        return random.nextInt(max - min) + min;
    }

    public List<String> getRandomCountries(int countryIdCorrectAnswer) {
        int maxRange = Math.toIntExact(countryRepo.getCountryTableSize());
        Set<Integer> randomIds = getRandomIds(4, maxRange);
        if (!randomIds.contains(countryIdCorrectAnswer)) {
            var elementToRemove = randomIds.stream().findFirst().get();
            randomIds.remove(elementToRemove);
            randomIds.add(countryIdCorrectAnswer);
        }
        return randomIds.stream()
                .map(n -> countryRepo.findCountryById((long) n).getCountry())
                .toList();
    }
}
