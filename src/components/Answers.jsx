import { useRef } from "react";


export default function Answers({ answers , selectedAnswer, answerState , onSelect , key}) {

    const shuffledAnswers = useRef();
    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
    }
    return (
        <ul id="answers">
            {shuffledAnswers.current.map((answer) => {
                const isSelected = selectedAnswer === answer;
                let cssClassses = '';
                if (answerState === 'answered' && isSelected) {
                    cssClassses = 'selected';
                }
                if ((answerState == 'correct' || answerState === 'wrong') && isSelected) {
                    cssClassses = answerState;
                }
                return <li key={answer} className="answer">
                    <button onClick={() => onSelect(answer)} className={cssClassses} disabled={answerState !== ''}>{answer}</button>
                </li>
            }
            )}
        </ul>
    );
}