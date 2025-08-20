"use client"

import Button from "@/components/Button";
import Input from "@/components/Input";
import Title from "@/components/Title";
import Form from "@/components/Form"
import Link from "next/link";


export default function LoginPage() {
    function imprimirHola(){
        console.log("holaaaaaa")
    }

    function cambio1() {
        console.log("CAMBIO1")
    }
       function cambio2() {
        console.log("CAMBIO2")
    }
       function cambio3() {
        console.log("CAMBIO3")
    }

    function cambiarPagina() {
        if (logued){
            router.push("/contador")
        } else {
            router.push("/home")
        }
    }
    return(
        <>
            <h1>pagina login</h1>
            <Title></Title>
            <Input cambio={imprimirHola}></Input>
            <Button title="tocaste el primer boton"></Button>

            <p>separador</p>
            <Form title="tocaste el segundo boton" cambio1={cambio1} cambio2={cambio2} cambio3={cambio3}></Form>

            <Link href={"/home"} replace={true}>
                <Button title="no se puede volver a login"></Button>
            </Link>
        </>
    )
} 