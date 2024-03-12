package com.songjourn.songjourn;

import com.songjourn.songjourn.model.Question;
import com.songjourn.songjourn.model.Track;
import com.songjourn.songjourn.repository.ITrackRepository;
import com.songjourn.songjourn.repository.TrackRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Service
public class QuizService {
    private final TrackRepository trackRepo;

    public QuizService(TrackRepository trackRepo) {
        this.trackRepo = trackRepo;
    }

    public List<Question> getListOfQuestions() {
        List<Question> questionList = new ArrayList<>();
        List<Track> randomTracks = getRandomTracks();
        // spotifyId: Track
        // correctAnswer: Track
        // option1: Country
        // option2: Country
        // option3: Country

        return questionList;
    }

    public List<Track> getRandomTracks() {
        int max = Math.toIntExact(trackRepo.getTrackTableSize());
        List<Integer> fiveRandomNumbers = getRandomTrackIds(max);
        List<Track> tracksList = fiveRandomNumbers.stream()
                .map(n -> trackRepo.findTrackById((long) n))
                .toList();
        return tracksList;
    }

    public List<Integer> getRandomTrackIds(int maxRange) {
        List<Integer> fiveRandomNumbers = new ArrayList<>();
        int randomNumber = 0;
        for (int i = 0; i < 5; i++) {
            randomNumber = getRandomNumber(1, maxRange);
            while (fiveRandomNumbers.contains(randomNumber)) {
                randomNumber = getRandomNumber(1, maxRange);
            }
            fiveRandomNumbers.add(randomNumber);
        }
        return fiveRandomNumbers;
    }

    public int getRandomNumber(int min, int max) {
        Random random = new Random();
        return random.nextInt(max - min) + min;
    }
}
