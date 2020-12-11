import React from 'react';

const Home = () =>{
    return(
        <div>
         <div className="container">
           <h1 className="home_text">Fun Trivia Games</h1>
           <h3>
           <br/> World Fact Quizes
           
           </h3>
         <p>
           Quiz Maker, Pop Questions!  
         </p>
         <a href="#/Quiz" className="btn btn-dark">Start Quiz</a> 
         {/* Button start quiz */}
        </div>
        </div>
    )
}

export default Home;