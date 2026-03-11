export default function Option(props) {
    return (
        <>
            <input type="radio" name={props.name} id={props.option} />
            <label htmlFor={props.option}>{props.option}</label>
        </>
    )
}