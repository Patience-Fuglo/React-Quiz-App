import React from 'react';

const Quiz = () => {
    var questions = [{
        text: "1. Which of the following cities was the first to open a public library?",
        answers: ["a.Serville, Spain", "b.Warsaw, Poland", "c.Naples, Italy", "d.stuttgart, Germany"]
    },

    {
        text: "2. The movie industry of Bombay (or Mumbai), India is known as Bollywood",
        answers: ["a.True", "b.False", "c. ",  "d. "]
    },
    ]
    return (
        <div>
            <div className="container">
                <h1 className="home_text">Quiz</h1>
                <h3>{questions[0].text}</h3>
                <div class="container">

                    <div class="row row-cols-2">
                        <h3><div class="col"><a href="/Score" className="btn btn-dark">{questions[0].answers[0]}</a></div></h3>
                        <h3><div class="col"><a href="/Score" className="btn btn-dark">{questions[0].answers[1]}</a></div></h3>
                        <h3><div class="col"><a href="/Score" className="btn btn-dark">{questions[0].answers[2]}</a></div></h3>
                        <h3><div class="col"><a href="/Score" className="btn btn-dark">{questions[0].answers[3]}</a></div></h3>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Quiz;