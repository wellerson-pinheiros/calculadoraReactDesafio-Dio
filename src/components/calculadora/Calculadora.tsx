import { useState } from "react";
import ButaoCalc from "../butaocalc/ButaoCalc";


function Calculadora () {
  // estado que armazena o valor clicado pelo usúario
  const [valores, setValores] = useState<number[]>([]);
  const [valores2, setValores2] = useState<number[]>([]);

  const [operacaoarmazenado, setOperacaoArmazenado] = useState<
    string | undefined
  >();

    //const [calcular, setCalcular] = useState (0); 

  const [display, setDisplay] = useState<number | undefined > ();






  // função que cria um novo array com o numeros antigos persistidos no array que vamos receber do filho
  function handleClick(num: number): void {
    if (display !== undefined) {
      // Se o display contém o resultado, reseta o display e começa a digitar números novamente
      setDisplay(undefined); // Ou setDisplay(0) se preferir que apareça 0
      setValores([num]); // Começa a armazenar o primeiro número digitado
    } else if(operacaoarmazenado === undefined)
    setValores([...valores, num]);
   else if (operacaoarmazenado != undefined) {
    setValores2([...valores2,num])
   }
   
  }


  //função com evento de click e armazenar os valores no lugares devidos

  function handleOperacao(op: string | undefined): void {
    setOperacaoArmazenado(op);
    
  }


// calcular funçoes


function handleCalcular() {
  const num1 = Number(valores.join(""));
  const num2 = Number(valores2.join(""));

  let resultado = 0;

  switch (operacaoarmazenado) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    default:
      return;
  }


  
    
  setDisplay(resultado);  // Aqui você vai mostrar o resultado no display

  setValores([]);
  setValores2([]);
  setOperacaoArmazenado(undefined);

  
}
  
  


// funão para limpar o display 
function handleLimpar() {
  setValores([]);
  setValores2([]);
  setOperacaoArmazenado(undefined);
  setDisplay(undefined)
}


  return (
    <div
      id="estruturaCalc"
      className="w-64 min-h-70 bg-gray-400 rounded flex flex-col justify-center p-2  text-center gap-4"
    >
      <h1>Calculadora</h1>
      <div id="display" className="bg-gray-200 w-60 h-10">
        <div className="w-full h-full flex justify-center items-center">
          <h2 className="overflow-hidden ">{valores} {operacaoarmazenado} {valores2} {display}</h2>
        </div>
      </div>
      <ButaoCalc
       atualizarValor1={handleClick} 
       atualizarValor2={handleOperacao}
       calcular = {handleCalcular}
       limpar={handleLimpar}
      />
    </div>
  );

}
export default Calculadora;
