"use client"
import styles from "@/components/Button.module.css"
import clsx from "clsx"

export default function Button(props){
    function funcionalidad(){
        console.log(props.texto)
    }

    return (
        <>
            <button className={
                clsx(
                    {
                        [styles.button] : true,
                        [styles.incrementar] : props.color == "verde",
                        [styles.decrementar] : props.color == "rojo"
                    }
                )
            } onClick={props.onClick}>{props.title}</button>
        </>
    )
}