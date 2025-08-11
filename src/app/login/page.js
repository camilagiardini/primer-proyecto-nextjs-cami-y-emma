"use client"

import Button from "@/components/Button";
import Input from "@/components/Input";
import Title from "@/components/Title";
import Form from "@/components/Form"


export default function LoginPage() {
    function cambio1() {
        console.log("CAMBIO1")
    }
       function cambio2() {
        console.log("CAMBIO2")
    }
       function cambio3() {
        console.log("CAMBIO3")
    }

    return(
        <>
            <h1>pagina login</h1>
            <Title></Title>
            <Input></Input>
            <Button></Button>

            <p>separador</p>
            <Form></Form>
        </>
    )
}