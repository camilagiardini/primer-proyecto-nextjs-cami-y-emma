"use client"

export default function Button(props){
    function funcionalidad(){
        console.log(props.texto)
    }

    return (
        <>
            <button onClick={funcionalidad}>hola</button>
        </>
    )
}