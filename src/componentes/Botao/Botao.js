import './Botao.css'
const Botao = (props) => {
    return(
        <div className='botao'>
        <button type="submit" id= "Criar prato">
        {props.children}
        </button>
        </div>
    )
}
export default Botao
//O atributo children retorna tudo o que está dentro do componente. No caso do botão, criamos o componente dele neste arquivo e chamamos no formulário
//Mas no arquivo do formulário passamos informações dentro dele, essas informações, são os childrens que serão chamados aqui 