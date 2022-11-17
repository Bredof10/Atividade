import { useState } from "react";
import { sitOrcamento } from "../../Service";

export default function Index() {

    const [ganhos, setGanhos] = useState(0);
    const [gastos, setGastos] = useState(0);
    const [resposta, setResposta] = useState();

    function Familia () {
        const resp = sitOrcamento(ganhos, gastos);
        setResposta(resp);
    }

    return (
        <div>
            <h1>Orçamento</h1>
            <p>Insira os Ganhos do Mês: <input type="number" value={ganhos} onChange={e => setGanhos(e.target.value)} /></p>
            <p>Insira os Gastos do Mês: <input type="number" value={gastos} onChange={e => setGastos(e.target.value)} /></p>
            <button onClick={Familia}> Calcular </button>
            {resposta}
        </div>
    );
}