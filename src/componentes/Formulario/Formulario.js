import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto';
import Lista from '../Lista/Lista';
import Botao from '../Botao/Botao';
const Formulario = () => {


    const tipos = [
        'Japonesa',
        'Brasileira',
        'Lanches',
        'Árabe',
        'Italiano',
    ]
    const aoSalvar= (evento) =>{
        evento.preventDefault() 
        console.log('Form foi submetido')
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para registrar seu prato</h2>
                < CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome" />
                < CampoTexto obrigatorio={true} label="Valor" placeholder="Digite o valor" />
                < CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" />
                <Lista obrigatorio={true} label= "Tipo" itens={tipos}/> 
                < Botao>
                    CRIAR PRATO 
                </Botao>
            </form>
        </section>
    )
}

export default Formulario