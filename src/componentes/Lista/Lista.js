import "./Lista.css"
const Lista = (props) => {
    console.log(props.itens)
    //Método Array do js para iterar sobre cada item da lista retornar um array novo manipulado
    //Exemplo: transformar uma lista de nome em uma lista de options

    return (
        <div className="lista-comida">
            <label>
                {props.label}
            </label>
            <select onChange={evento =>props.aoAlterado(evento.target.value)} required= {props.required} value ={props.value} >
                //para cada item retorna uma option
                {props.itens.map(item => {
                    return<option key = {item}>{item}</option>
                })}
            </select>
        </div>

    )

}
export default Lista