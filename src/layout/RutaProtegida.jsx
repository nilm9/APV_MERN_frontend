import { Outlet , Navigate, useNavigate} from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Header from "../components/Header"
import Footer from "../components/Footer"


const RutaProtegida = () => {
    const {auth, cargando} = useAuth()
    const navigate = useNavigate();

    console.log(auth);

    console.log(cargando);


    if(cargando) return 'cargando...'
  return (
    <>

    {/* no hauria de ser aixi navigate("/") */}

        <Header/>
            {auth._id ? ( <main className="container mx-auto mt-10"><Outlet/></main>) : <Navigate to={"/"}/>} 
        <Footer/>

        
    </>


  )
}

export default RutaProtegida