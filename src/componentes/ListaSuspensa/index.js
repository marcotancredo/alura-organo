import './ListaSuspensa.css'

export function ListaSuspensa(props) {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        required={props.obrigatorio} value={props.valor}
        onChange={event => props.aoAlterar(event.target.value)}>
        <option value=""></option>
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}