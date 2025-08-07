"use client"

export default function Button(props){
    function imprimir(){
        console.log("hola")
    }

    return (
        <>
            <button onClick={imprimir}>hola</button>
        </>
    )
}