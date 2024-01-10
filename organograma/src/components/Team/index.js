import Participant from '../Participant';
import './Team.css'

const Team = (props) => {

    const backgroundColor = {backgroundColor: props.secondaryColor};
    const borderColor = {borderColor: props.primaryColor};
    return (
        <section className="team" style={backgroundColor}>
            <h3 style={borderColor}>{props.name}</h3>
            <Participant/>
            <Participant/>
        </section>
    )
}

export default Team