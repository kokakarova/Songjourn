type Question = {
    songSpotifyLink: string;
    correctAnswer: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
}

const getQuestion = async () => {
    const newQuestion = await fetch
}