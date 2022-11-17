import { useState } from "react";
import { totalCompra } from "../../Service";

export default function Index() {

    const [inteiras, setInteiras] = useState(0);
    const [meias, setMeias] = useState(0);
    const [diaSemana, setDiaSemana] = useState('');
    const [nacional, setNacional] = useState(false);
    const [resposta, setResposta] = useState();

    function Compra () {
        const resp = totalCompra(inteiras, meias, diaSemana, nacional);
        if (isNaN(resp))
            setResposta(resp)
        else 
            setResposta(`O total a se pagar é R$${resp.toFixed(2)}`.replace('.', ','))
    }

    console.log(nacional);
    return (
        <div>
            <h1>Compra</h1>
            <p>Insira a Quantidade de Inteiras: <input type="number" value={inteiras} onChange={e=> setInteiras(e.target.value)} /></p>
            <p>Insira a Quantidade de Meias: <input type="number" value={meias} onChange={e=> setMeias(e.target.value)} /></p>
            <p>Insira o dia da Semana: <input type="text" value={diaSemana} onChange={e=> setDiaSemana(e.target.value)} /></p>
            <p>Nacional <input type="checkbox" value={nacional} onChange={e => setNacional(e.target.checked)} /></p>
            <button onClick={Compra}>Calcular</button>
            {resposta}
        </div>
    );
} 