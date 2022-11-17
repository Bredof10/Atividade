import { Link } from  'react-router-dom'

export default function Index() {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li>        <Link to='/Acai'>Açai</Link>                    </li>
                <li>        <Link to='/Abastecimento'>Abastecimento</Link>  </li>
                <li>        <Link to='/Febre'>Febre</Link>                  </li>
                <li>        <Link to='/Orcamento'>Orcamento</Link>          </li>
                <li>        <Link to='/Salario'>Salario</Link>              </li>
                <li>        <Link to='/Signo'>Signo</Link>                  </li>
                <li>        <Link to='/Sorveteria'>Sorveteria</Link>        </li>
                <li>        <Link to='/Compra'>Compra</Link>                </li>
                <li>        <Link to='/Contar'>Contar</Link>                </li>
                <li>        <Link to='/Linha'>Linha</Link>                  </li>
                <li>        <Link to='/Retangulo'>Retangulo</Link>          </li>
                <li>        <Link to='/Cafe'>Cafe</Link>                    </li>
                <li>        <Link to='/Juros'>Juros</Link>                  </li>
                <li>        <Link to='/Alunos'>Alunos</Link>                  </li>
            </ul>
        </div>
    );
}