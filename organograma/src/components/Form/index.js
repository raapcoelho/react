import Button from '../../Button'
import ComboBox from '../ComboBox'
import TextField from '../TextField'
import './Form.css'

const Form = () => {

    const teams = [
        'Generic',
        'Documentation',
        'OKR',
        'Gamefication'
    ]

    const save = (event) => {
        console.log('Form enviado')
    }

    return (
        <section className="form">
            <form onSubmit={save()}>
                <h2>Preencha os dados para comprar um ingresso</h2>
                <TextField required={true} label="Nome" placeholder="Digite o seu nome" />
                <TextField label="Cargo" placeholder="Digite o seu cargo" />
                <TextField label="Imagem" placeholder="Informe o endereço da imagem" />
                <ComboBox required={true} label={"Tipoo de Ingresso"} itens={teams}/>
                <Button>
                    Comprar Ingresso    
                </Button>
            </form>
        </section>
    )
}

export default Form