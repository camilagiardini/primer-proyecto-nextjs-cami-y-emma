export default function Input() {
    function cambio(){
        console.log("cambiaste el input")
    }

    return (
        <>
            <input type="text" onChange={cambio}></input>
        </>
    )
}