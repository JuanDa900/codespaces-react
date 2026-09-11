import { useState } from 'react';
import '../Figuras.css';

export default function Figuras() {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [rest, setRest] = useState(0);
    const [figura, setFigura] = useState('cuadrado');

    const calcular = (e) => {
        e.preventDefault();
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        let resultado = 0;
        switch (figura) {
            case 'cuadrado': resultado = n1 * n1;
                break;
            case 'rectangulo': resultado = n1 * n2;
                break;
            case 'triangulo': resultado = (n1 * n2) / 2;
                break;
            default:
                resultado = 0;
        }
        setRest(resultado);
    };
    const limpiarCajas = () => {setNum1(''); setNum2(''); setRest(0);};

    return (
        <div className="figuras-container">
            <div className="card figuras-card shadow">
                <div className="card-body">
                    <h2 className="text-center titulo">
                        Calculadora de Áreas
                    </h2>
                    <form onSubmit={calcular}>
                        <div className="mb-3">
                            <label className="form-label">
                                Selecciona una figura
                            </label>
                            <select
                                className="form-select"
                                value={figura}
                                onChange={(e) => setFigura(e.target.value)}
                            >
                                <option value="cuadrado"> Cuadrado </option>
                                <option value="rectangulo"> Rectángulo </option>
                                <option value="triangulo"> Triángulo </option>
                            </select>
                        </div>
                        <input  type="number" 
                                className="form-control"
                                placeholder ="Digite la base"
                                value = {num1}
                                onChange = {(e)=> setNum1(e.target.value)}
                        />
                        <input  type="number"
                                className="form-control"
                                placeholder ="Digite la altura"
                                value = {num2}
                                onChange = {(e)=> setNum2(e.target.value)}
                        />
                        <div className="d-flex gap-2">
                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                Calcular
                            </button>
                            <button
                                type="button"
                                className="btn btn-outline-secondary w-100"
                                onClick={limpiarCajas}
                            >
                                Limpiar
                            </button>
                        </div>
                    </form>
                    <div className="resultado mt-4">
                        <span>Resultado</span>
                        <h2>
                            {rest}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}