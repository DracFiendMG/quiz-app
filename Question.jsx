import Option from "./Option"
import { useState } from "react"

export default function Question(props) {
    const correctOption = props.correctOption
    const [shuffledOptions, setShuffledOptions] = useState(shuffle([correctOption, ...props.options]))

    const optionEl = shuffledOptions.map((option) => {
        // modify this logic to maintain the correct/wrong/other state of the options
        let isCorrect = false
        let isWrong = false
        let isOther = false

        if (props.isSubmitted) {
            if (option === correctOption) {
                isCorrect = true
            }
            
            if (option === props.selectedOption) {
                isWrong = true
            } else {
                isOther = true
            }
        }

        return (
            <Option 
                key={option} 
                name={props.id} 
                option={option} 
                correct={isCorrect} 
                wrong={isWrong} 
                other={isOther} 
            />
        )
    })

    function shuffle(options) {
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [options[i], options[j]] = [options[j], options[i]]
        }
        return options
    }

    return (
        <div className="question">
            <p>{props.question}</p>
            <div className="options">
                {optionEl}
            </div>
        </div>
    )
}