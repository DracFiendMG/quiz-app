import Option from "./Option"

export default function Question() {
    return (
        <div className="question">
            <p>How would one say goodbye in Spanish?</p>
            <div className="options">
                <Option name="q1" option="Adiós" />
                <Option name="q1" option="Hola" />
                <Option name="q1" option="Au Revoir" />
                <Option name="q1" option="Salir" />
            </div>
        </div>
    )
}