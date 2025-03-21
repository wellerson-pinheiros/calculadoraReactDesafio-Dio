import Calculadora from "../../components/calculadora/Calculadora"

function Home() {
  return (
    <div  className="flex justify-center items-center h-screen w-screen  bg-[url('https://ik.imagekit.io/50n5k5wmb/pexels-eberhardgross-443446.jpg?updatedAt=1742592846962')] bg-cover bg-center bg-no-repeat">
        <div>
        <Calculadora/>
        </div>
        
    </div>
  )
}

export default Home