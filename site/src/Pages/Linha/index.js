import { useState } from "react";
import { Linha } from "../../Service";


export default function Index() {

    const [colunas, setColunas] = useState();
    const [arrai, setArrai] = useState();

    function lineMaker () {
        const resp = Linha(colunas);
        setArrai(resp);
    }

    return(
        <div>
            <h1>Linha</h1>
            <p>Insira o tamanho da Linha <input type="number" value={colunas} onChange={e => setColunas(e.target.value)} /> </p>
            <button onClick={lineMaker}>Gerar Linha</button>
            {arrai}      
        </div>
    );
}