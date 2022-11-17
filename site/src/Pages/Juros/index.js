import { useEffect, useState } from "react";
import { jurosCompostos } from "../../Service";

export default function Index() {

    const [entrada, setEntrada] = useState();
    const [capital, setCapital] = useState();
    const [taxa, setTaxa] = useState();
    const [periodo, setPeriodo] = useState();
    const [resposta, setResposta] = useState([]);

    function Juros () {
        const resp = jurosCompostos(entrada, capital, taxa, periodo);
        setResposta(resp);
        console.log(resp)
    }

    return(
        <div>
            <h2>Aniversário do Brunex!! 🥳</h2>
            <h1>Cálculo de Juros Compostos</h1>
            <p>Insira o Capital: <input type="number" value={capital} onChange={e => setCapital( Number(e.target.value) )} /></p>
            <p>Insira a Entrada: <input type="number" value={entrada} onChange={e => setEntrada( Number(e.target.value) )} /></p>
            <p>Insira a Taxa (anual): <input type="number" value={taxa} onChange={e => setTaxa( Number(e.target.value) )} /></p>
            <p>Insira o Periodo: <input type="number" value={periodo} onChange={e => setPeriodo( Number(e.target.value) )} /></p>
            <button onClick={Juros}>Calcular</button>
            {resposta}            
        </div>
    );
}