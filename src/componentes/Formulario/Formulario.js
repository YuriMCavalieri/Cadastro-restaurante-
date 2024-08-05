import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto';
import Lista from '../Lista/Lista';
import Botao from '../Botao/Botao';
import { useState } from 'react';
const Formulario = (props) => {


    const tipos = [
        'Japonesa',
        'Brasileira',
        'Lanches',
        'Árabe',
        'Italiano',
    ]

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [imagem, setImagem] = useState('')
    const [tipo, setTipo] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            preco,
            imagem,
            tipo
        })
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para registrar seu prato</h2>
                < CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o nome" valor = {nome} aoAlterado= {valor => setNome(valor)} />
                < CampoTexto obrigatorio={true} label="Valor" placeholder="Digite o valor" valor = {preco} aoAlterado= {valor => setPreco(valor)} />
                < CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" valor = {imagem} aoAlterado = {valor => setImagem(valor)} />
                <Lista obrigatorio={true} label= "Tipo" itens={tipos} valor = {tipo} aoAlterado= {valor => setTipo(valor)} /> 
                < Botao>
                    CRIAR PRATO 
                </Botao>
            </form>
        </section>
    )
}

export default Formulario