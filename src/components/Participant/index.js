import './Participant.css'

const Participant = ({name, type, image, primaryColor}) =>{

    return (
        <div className='participant'>
            <div className='header' style={{backgroundColor: primaryColor}}>
                <img src={image} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{type}</h5>
            </div>
        </div>
    )
}

export default Participant