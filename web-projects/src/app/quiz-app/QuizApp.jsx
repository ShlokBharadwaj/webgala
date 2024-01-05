import React, { useState, useEffect } from 'react';
import styles from './QuizApp.module.css';

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
            console.log(data);
        } catch (error) {
            console.error('Error fetching questions: ', error);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.quizContainer} id="quiz">
                <div className={styles.quizHeader}>
                    <h2 id="question">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, porro.</h2>
                    <ul>
                        <li>
                            <input type="radio" name="answer" className={styles.answer} id="a" />
                            <label htmlFor="a" id="a_text">Answer 1</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" className={styles.answer} id="b" />
                            <label htmlFor="b" id="b_text">Answer 2</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" className={styles.answer} id="c" />
                            <label htmlFor="c" id="c_text">Answer 3</label>
                        </li>
                        <li>
                            <input type="radio" name="answer" className={styles.answer} id="d" />
                            <label htmlFor="d" id="d_text">Answer 4</label>
                        </li>
                    </ul>
                </div>
                <button id="submit">Submit</button>
            </div>
        </div>
    )
}

export default QuizApp;