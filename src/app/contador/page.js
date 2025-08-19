"use client"

import Button from "@/components/Button";
import Input from "@/components/Input";
import Title from "@/components/Title"
import { useEffect, useState } from "react";

export default function ContadorPage() {

    const [cuenta, setCuenta] = useState(0);
    const [checked, setChecked] = useState(true);
    const [color, setColor] = useState("rojo");

    function incrementar(){
        setCuenta(cuenta+1)
    }

    function decrementar(){
        setCuenta(cuenta-1)
    }

    function checkbox(event){
        setChecked(event.target.checked)
        setColor(event.target.checked)
    }


    function cambiarValor(){
        if (checked==true) {
            incrementar()
        } else {
            decrementar()
        }
    }

    useEffect(() => {
        if (checked==true) {
            setColor("rojo")
        } else {
            setColor("verde")
        }
    }, [color])

    useEffect(() => {
        if (cuenta==20 || cuenta==-20){
            setCuenta(0)
        }
        console.log("cuenta varió: ", cuenta)
    }, [cuenta])

    return (
        <>
        <Title title="Página del contador"></Title>
        <Button title="incrementar" onClick={cambiarValor} color={color}></Button>
        <Input type="checkbox" onChange={checkbox} checked={checked}></Input>
        <h2>Contador: {cuenta}</h2>
        </>
    )
}