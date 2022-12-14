import { useState } from "react";
import { Liquido } from "../../Service";

export default function Index() {

    const [salario, setSalario] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [desc, setDesc] = useState(0)
    const [resposta, setResposta] = useState()

    function salLiquido () {
        const resp = Liquido(salario, bonus, desc);
        if (isNaN(resp))
            setResposta(resp)
        else 
            setResposta(`Seu salário líquido é de R$${resp.toFixed(2)}`.replace('.',',')) 
    }

    return(
        <div>
            <h1>Salário</h1>
            <p>Insira o Salário <input type="number" value={salario} onChange={e => setSalario(e.target.value)} /> </p>
            <p>Insira o Bônus <input type="number" value={bonus} onChange={e => setBonus(e.target.value)} /> </p>
            <p>Insira o Desconto <input type="number" value={desc} onChange={e => setDesc(e.target.value)} /> </p>
            <button onClick={salLiquido}>Calcular</button>
            {resposta}
        </div>
    );
}