import './ComboBox.css'

const ComboBox = (props) => {
    
    return (
        <div className="combo-box">
            <label>{props.label}</label>
            <select>
                {props.itens.map((item, index) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ComboBox