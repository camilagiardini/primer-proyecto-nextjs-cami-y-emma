"use client"

export default function Button(props){
    function funcionalidad(){
        console.log(props.texto)
    }

    return (
        <>
            <button onClick={props.onClick}>{props.title}</button>
        </>
    )
}