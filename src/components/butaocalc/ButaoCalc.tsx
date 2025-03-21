
interface Props {
  atualizarValor1: (num: number) => void;  // Função para atualizar o valor
  atualizarValor2: (op: string | undefined) => void;  // Função para atualizar a operação
  calcular: () => void;

  limpar: () => void; // Adicionando a função de limpar
}

const ButaoCalc: React.FC<Props> = ({ atualizarValor1, atualizarValor2,calcular,limpar }) => {

  return (
    <div id="butoes" className="w-60 h-40 bg-slate-400 grid-cols-4 grid-rows-5 grid gap-4 " > 

              <div className=" flex justify-center items-center border col-span-2 text-center">
              <button className="w-full cursor-pointer " onClick={()=> limpar()}  >limpar</button></div>
             
              <div className=" col-span-2">
              <button className="w-full cursor-pointer " ></button></div>
        
              <div className=" flex justify-center border items-center">
                <button className="w-full cursor-pointer " onClick={()=> atualizarValor1(7)}>7</button></div>

              <div className=" flex justify-center border items-center" >
                <button className="w-full cursor-pointer" onClick={()=> atualizarValor1(8)}>8</button></div>

              <div className=" flex justify-center border items-center">
                <button className="w-full cursor-pointer" onClick={()=> atualizarValor1(9)}>9</button></div>

              <div className=" flex justify-center border items-center">
                <button className="w-full cursor-pointer" onClick={()=> atualizarValor2('*')}>x</button></div>

              <div className=" flex justify-center border items-center">
                <button className="w-full cursor-pointer" onClick={()=> atualizarValor1(4)}>4</button></div>

              <div className="flex justify-center border items-center">
                <button className="w-full cursor-pointer" onClick={()=> atualizarValor1(5)}>5</button></div>

              <div className=" flex justify-center border items-center">
                <button className="w-full cursor-pointer" onClick={()=> atualizarValor1(6)}>6</button></div>

              <div className="flex justify-center border items-center">
                <button className="w-full cursor-pointer" onClick={()=> atualizarValor2('-')}>-</button></div>

              <div className=" flex justify-center border items-center">
                <button className="w-full cursor-pointer" onClick={()=> atualizarValor1(1)}>1</button></div>

              <div className=" flex justify-center border items-center">
                <button className="w-full cursor-pointer" onClick={()=> atualizarValor1(2)}>2</button></div>

              <div className=" flex justify-center border items-center">
                <button className="w-full cursor-pointer" onClick={()=> atualizarValor1(3)}>3</button></div>

              <div className=" flex justify-center border items-center">
                <button className="w-full cursor-pointer" onClick={()=> atualizarValor1(0)}>0</button></div>
              <div className=" flex justify-center border items-center">
                <button className="w-full cursor-pointer" onClick={()=> atualizarValor2('/')}>/</button></div>

              <div className=" flex justify-center border items-center">
                <button className="w-full cursor-pointer " onClick={()=>calcular() } >=</button></div>

                <div className=" flex justify-center border col-span-2 items-center">
                <button className="w-full cursor-pointer bg-green-600" onClick={()=> atualizarValor2('+')} >+</button></div>
               
        
    </div>
  )
}

export default ButaoCalc