import React from 'react';

class Score extends React.Component {

    // Called after the component unmounts
    componentWillUnmount() {
        this.props.setScore(0);
    }

    // returns what we see on the page (HTML)
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="home_text">Score</h1>
                    <h2> {this.props.score} </h2>
                    {this.props.score === 5 && 
                        <h3>Perfect!</h3>
                    }
                    <a href="#/Quiz" className="btn btn-dark">Retake Quiz</a> 
                </div>
            </div>
        )
    } 
}



export default Score;