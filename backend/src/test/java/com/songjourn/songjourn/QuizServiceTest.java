package com.songjourn.songjourn;

import com.songjourn.songjourn.model.Country;
import com.songjourn.songjourn.model.Track;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

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
}