import React, { useState, useEffect } from 'react';
import styles from './QuizApp.module.css';

const decodeHTML = (html) => {
    return html.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");
}

const QuizApp = () => {

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
            const response = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
            const data = await response.json();
            if (data.results) {
                setQuestions(data.results.map((question) => ({
                    ...question,
                    question: decodeHTML(question.question),
                    incorrect_answers: question.incorrect_answers.map(decodeHTML),
                    correct_answer: decodeHTML(question.correct_answer),
                })));
            } else {
                console.error('Error fetching questions: ', data);
            }
        } catch (error) {
            console.error('Error fetching questions: ', error);
        }
    };

    const currentQuestion = questions.length > 0 ? questions[currentQuestionIndex] : null;

    return (
        <div className={styles.container}>
            <div className={styles.quizContainer}>
                {currentQuestion ? (


                    <div className={styles.quizHeader}>
                        <h2 id="question">{currentQuestion.question}</h2>
                        <ul>
                            {[...currentQuestion.incorrect_answers, currentQuestion.correct_answer].map((answer, index) => (
                                <li key={index}>
                                    <input
                                        type="radio"
                                        name="answer"
                                        className={styles.answer}
                                        value={answer}
                                        checked={selectedAnswer === answer}
                                    />
                                    <label htmlFor={answer}>
                                        {answer}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
                <button id="submit">Submit</button>
            </div>
        </div>
    )
}

export default QuizApp;