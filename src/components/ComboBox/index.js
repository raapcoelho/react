import './ComboBox.css'

const ComboBox = (props) => {
    
    const keyPress = (event) =>{
        props.change(event.target.value)
    }

    return (
        <div className="combo-box">
            <label>{props.label}</label>
            <select onChange={keyPress} required={props.required} value={props.value}>
                <option value={''}></option>
                {props.itens.map((item, index) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ComboBox