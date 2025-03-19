import { useState } from "react";
import ButaoCalc from "../butaocalc/ButaoCalc";
import Display from "../display/Display";

function Calculadora() {
  // estado que armazena o valor clicado pelo usúario
  const [valores, setValores] = useState<number[]>([]);
  const [operacaoarmazenado, setOperacaoArmazenado] = useState<
    string | undefined
  >();

  // função que cria um novo array com o numeros antigos persistidos no array que vamos receber do filho
  function handleClick(num: number): void {
    setValores([...valores, num]);
    console.log(valores)
  }


  //função com evento de click e armazenar os valores no lugares devidos

  function handleOperacao(op: string | undefined): void {
    setOperacaoArmazenado(op);
    console.log(operacaoarmazenado);
  }

  return (
    <div
      id="estruturaCalc"
      className="w-64 h-70 bg-gray-400 rounded flex flex-col justify-center p-2  text-center gap-4"
    >
      <h1>Calculadora</h1>
      <Display  />
      <ButaoCalc
       atualizarValor1={handleClick} 
       atualizarValor2={handleOperacao}
      />
    </div>
  );
}

export default Calculadora;
