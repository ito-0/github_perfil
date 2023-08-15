import { useState, useEffect, ChangeEvent } from "react";

const Formulario = () => {
    const [materialA, setMateriaA] = useState<number>(0);
    const [materialB, setMateriaB] = useState<number>(0);
    const [materialC, setMateriaC] = useState<number>(0);
    const [nome, setNome] = useState<string>('');

    useEffect(() => {
        // Aqui você pode adicionar qualquer lógica que queira executar após a renderização
    }, []);

    useEffect(() => {
        // Aqui você pode adicionar qualquer lógica que queira executar após a renderização
    }, [nome]);

    useEffect(() => {
        // Aqui você pode adicionar qualquer lógica que queira executar após a renderização
    }, [materialA, materialB, materialC]);

    const alteraNome = (evento: ChangeEvent<HTMLInputElement>) => {
        setNome(evento.target.value);
    }

    const rendResult = () => {
        const soma = materialA + materialB + materialC;
        const media = soma / 3;

        if (media >= 7) {
        return (
            <p>{nome}, aprovado!</p>
        );
        } else {
        return (
            <p>{nome}, não aprovado</p>
        );
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
                ))}
            </ul>
        <input type="text" placeholder="Seu nome" onChange={alteraNome} />
        <input type="number" placeholder="Nota matéria A" onChange={(evento) => setMateriaA(parseInt(evento.target.value))} />
        <input type="number" placeholder="Nota matéria B" onChange={(evento) => setMateriaB(parseInt(evento.target.value))} />
        <input type="number" placeholder="Nota matéria C" onChange={(evento) => setMateriaC(parseInt(evento.target.value))} />
        {rendResult()}
        </form>
    );
}

export default Formulario;