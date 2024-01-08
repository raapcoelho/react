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
    
    return (
        <section className="form">
            <form>
                <h2>Preencha os dados para comprar um ingresso</h2>
                <TextField label="Nome" placeholder="Digite o seu nome" />
                <TextField label="Cargo" placeholder="Digite o seu cargo" />
                <TextField label="Imagem" placeholder="Informe o endereço da imagem" />
                <ComboBox itens={teams}/>
                <Button>
                    Comprar Ingresso    
                </Button>
            </form>
        </section>
    )
}

export default Form