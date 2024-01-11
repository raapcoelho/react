import Participant from '../Participant';
import './Team.css'

const Team = (props) => {

    const backgroundColor = {backgroundColor: props.secondaryColor};
    const borderColor = {borderColor: props.primaryColor};
    return (
        (props.participants.length > 0) ? <section className="team" style={backgroundColor}>
            <h3 style={borderColor}>{props.name}</h3>
            <div className="participants">
                {props.participants.map( participant => <Participant key={participant.name} primaryColor={props.primaryColor} name={participant.name} type={participant.type} image={participant.image}/>)}
            </div>
        </section>
        : ''
    )
}

export default Team