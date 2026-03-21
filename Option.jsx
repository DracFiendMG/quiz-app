import clsx from "clsx"
import { decode } from "html-entities"

export default function Option(props) {
    const optionClass = clsx({
        correct: props.correct,
        wrong: props.wrong,
        other: props.other
    })
    return (
        <>
            <input className={optionClass} type="radio" name={props.name} id={props.option} value={props.option} />
            <label htmlFor={props.option}>{decode(props.option)}</label>
        </>
    )
}