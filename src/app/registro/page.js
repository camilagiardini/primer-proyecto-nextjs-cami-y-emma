"use client"
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegistroPage() {
    const [username, setUsername] = useState("");   
    const [alumnoId, setAlumnoId] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();


    function irATurnos(){
        if (username.length < 4){
            console.log(username)
            console.log("minimo 4 letras");
            setError(true);
        } else {
            setError(false);
            router.push(`/turnos?username=${username}&alumnoId=${alumnoId}`);
        }
    }
    return(
        <>
        <h1>pagina registro</h1>
        <h3>username</h3>
        <Input type="text" onChange={
            (event) => {
                setUsername(event.target.value)
                setError(false);
            }
        }></Input>
        {error && <p style={{color: "red"}}>El username debe tener al menos 4 letras</p>}
        <h3>id del alumno</h3>
        <Input onChange={
            (event) => setAlumnoId(event.target.value)
        }></Input>
        <Button title="Ir a turnos" onClick={irATurnos}></Button>
        </>
    )
}