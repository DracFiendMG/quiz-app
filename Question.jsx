import Option from "./Option"

export default function Question(props) {

    const optionEl = props.options.map((option) => {
        return <Option name={props.id} option={option} />
    })

    return (
        <div className="question">
            <p>{props.question}</p>
            <div className="options">
                {optionEl}
            </div>
        </div>
    )
}