import React from 'react';
import {
    useState
}  from "react";
import { useHistory } from "react-router-dom";

const Quiz = (props) => {
    const [questionIndex, setQuestionIndex]= useState(0); // state variable, starts equal to 0
    const history = useHistory();

    var questions = [{
        text: "1. Which of the following cities was the first to open a public library?",
        answers: ["a.Serville, Spain", "b.Warsaw, Poland", "c.Naples, Italy", "d.stuttgart, Germany"],
        correctAnswer: "b.Warsaw, Poland"
    },
    {
        text: "2. Which nation in the world consumes more Coca-Cola per capita than any other?",
        answers: ["a.Mexico", "b.Norway", "c.USA", "d.Iceland"], 
        correctAnswer: "d.Iceland"
    },  
    {
         text: "3. When did East Germany begin building the Berlin Wall?",
         answers: ["a. August 13, 1962", "b.August 13, 1961", "c.September 13, 1962", "d.July 13, 1961"],
         correctAnswer:  "b.August 13, 1961"
    },   
    {
         text: "4.  Which is the oldest republic in the world?",
         answers: ["a.Austria", "b.Cuba", "c.Argentina", "d.San Marino"],
         correctAnswer: "d.San Marino"
    },  
    {
         text: "5. The shortest war on record lasted ...?",
         answers: ["a.1 hour", "b.42 minutes", "c.38 minutes", "c.55 minutes"],
         correctAnswer: "c.38 minutes"
    }];

    /**
     * Adds 1 to questionIndex everytime a button is clicked.
     * @param {*} event 
     */
    function handleButtonClick(event) {
        let answer = event.target.innerText; // the user's answer
        let correctAnswer = questions[questionIndex].correctAnswer;

        if (answer === correctAnswer) {
            // user's answer is the same as correct answer
            // Add 1 to the score
            props.setScore(props.score + 1);
        }
        console.log("Current Score is:", props.score);

        if (questionIndex === questions.length - 1) { // questionIndex is on last question
            // redirect to score page
            history.push("/Score");
        } else {
            setQuestionIndex(questionIndex + 1); 
        }
    }
    
    return (
        <div>
            <div className="container">
                <h1 className="home_text">Quiz</h1>
                <h3>{questions[questionIndex].text}</h3>
                <div class="container">

                    <div class="row row-cols-2">
                        <h3><div class="col"><a onClick={handleButtonClick} className="btn btn-dark">{questions[questionIndex].answers[0]}</a></div></h3>
                        <h3><div class="col"><a onClick={handleButtonClick} className="btn btn-dark">{questions[questionIndex].answers[1]}</a></div></h3>
                        <h3><div class="col"><a onClick={handleButtonClick} className="btn btn-dark">{questions[questionIndex].answers[2]}</a></div></h3>
                        <h3><div class="col"><a onClick={handleButtonClick} className="btn btn-dark">{questions[questionIndex].answers[3]}</a></div></h3>
                        
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default Quiz;