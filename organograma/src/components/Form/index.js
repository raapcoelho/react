import { useState } from 'react'
import Button from '../../Button'
import ComboBox from '../ComboBox'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeams] = useState('Gamefication')

    const save = (event) => {
        event.preventDefault()
        props.saveTicket({
            name: name, 
            type: type, 
            image: image, 
            team: team
        })
    }

    return (
        <section className="form">
            <form onSubmit={save}>
                <h2>Preencha os dados para comprar um ingresso</h2>
                <TextField 
                    value={name}
                    change={value => setName(value)}
                    required={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome" />
                <TextField 
                    value={type}
                    change={value => setType(value)}
                    label="Cargo" 
                    placeholder="Digite o seu cargo" />
                <TextField 
                    value={image}
                    change={value => setImage(value)}
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" />
                <ComboBox 
                    required={true} 
                    label={"Tipoo de Ingresso"} 
                    itens={props.teams}
                    value={team}
                    change={value => setTeams(value)} />
                <Button>
                    Comprar Ingresso    
                </Button>
            </form>
        </section>
    )
}

export default Form