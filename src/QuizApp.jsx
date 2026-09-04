import { useState } from "react";
import './QuizApp.css';

const questions = [
        {
            question: "What is 2 + 2?",
            options: ["3",  "4", "5", "6" ],
            answer: "4"
        },
        {
            question: "What is the capital of Afghanistan?",
            options: ["Kabul", "Nangarhar", "Khost", "Ghazni"],
            answer: "Kabul"
        },
        {
            question: "What is the synynom of forest?",
            options: ["Jungle", "House", "Garden", "Home"],
            answer: "Jungle"
        }
    ];

function QuizApp(){

    

    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    
    

    function checkAnswer(){
        if(selectedAnswer === currentQuestion.answer){
            setScore( score + 5);
        }
    }

    function nextQuestion(){
        checkAnswer();
        const currentIndex = questions.indexOf(currentQuestion);
        if(currentIndex === 2){
            setQuizFinished(true);
            return;
         
        }
        setCurrentQuestion(questions[currentIndex + 1]);
    }


    

    return( 
        <>
        <h1 className = "title">Quiz App</h1>
        {!quizFinished && (

        <div className = "div">
            <h1 >Questions:</h1>
            <h2>{currentQuestion.question}</h2>
            <div className = "ans">
               {currentQuestion.options.map((option) => (
                <button onClick = {() => setSelectedAnswer(option)}>{option}</button>
            ))}
            </div>
            
             
             <br></br> <br></br>
            
            <button className  = "next" onClick = {nextQuestion}>Next</button>





        </div>)}
        
        {quizFinished}  <h1 className = "score"></h1>your score: {score}<h1/>

        <button className = "reStart" onClick = {() => window.location.reload()} >Restart Quiz</button>
           
        </>
    );
}

export default QuizApp;