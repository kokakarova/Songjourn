package songjourn;

import songjourn.model.Country;
import songjourn.model.Track;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
class QuizServiceTest {

    private static Country country;
    private static Track track;


    @Autowired
    QuizService service;

    //    @Value("${server.port}")
    protected int port = 9999;

    @Test
    void contextLoader() {

    }

    @Test
    void shouldSomething() {
        int correctAnswerCountryId = 1;
        List<String> expectedList = service.getRandomCountries(correctAnswerCountryId);
        List<String> distinctList = expectedList.stream().distinct().toList();
        assertEquals(4, distinctList.size());
    }
}