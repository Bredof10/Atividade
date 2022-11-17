import { useState } from "react";
import { CalcularParadas } from "../../Service";

export default function Index() {

    const [capac, setCapac] = useState(0.0);
    const [consumo, setConsumo] = useState(0.0);
    const [dist, setDist] = useState(0.0);
    const [resposta, setResposta] = useState( );

    function stops () {
        const resp = CalcularParadas(capac, consumo, dist);
        if (isNaN(resp))
            setResposta(resp)
        else 
            setResposta(`Serão necessárias ${resp.toFixed(1)} paradas`)
    }

    return(
        <div>
            <h1>Abastecimento</h1>
            <p>Insira a capacidade do Tanque: <input type="number" value={capac} onChange={e => setCapac(e.target.value)} /> </p>
            <p>Insira o consumo do Carro: <input type="number" value={consumo} onChange={e => setConsumo(e.target.value)} /> </p>
            <p>Insira a distância a ser Percorrida: <input type="number" value={dist} onChange={e => setDist(e.target.value)} /> </p>
            <button onClick={stops}>Calcular</button>
            {resposta}
        </div>
    );
}