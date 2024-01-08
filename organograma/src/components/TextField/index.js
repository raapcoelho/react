import './TextField.css'
// Aero Function
// o props é passado pelo react de forma implicita, que são as propriedades que o componente recebeu
const TextField = (props) =>{
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextField