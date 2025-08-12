"use client"

import Button from "@/components/Button";
import Title from "@/components/Title";
import { useState } from "react";

export default function ContadorPage() {
    const [cuenta, setCuenta] = useState(0);

    function incrementar(){
        setCuenta(cuenta+1) // usa setCuenta para modificar el valor de cuenta (en este caso le suma 1)
    }

    function decrementar(){
        setCuenta(cuenta-1)
    }

    function ver(){
        console.log(cuenta)
    }

    return(
        <>
            <Title text="Página del contador"></Title>
            <Button onClick={incrementar}></Button>
        </>
    )
}