"use client"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { useSocket } from "@/hooks/useSocket"
import Turno from "@/components/Turno"
import AgendarNuevoTurno from "@/components/agendarNuevoTurno";

export default function Turnos() {
    const searchParams = useSearchParams();
    const username = searchParams.get("username");
    const alumnoId = searchParams.get("alumnoId");
    const [numeroTurnoNuevo, setNumeroTurno] = useState(1);
    const [turno, setTurno] = useState(null);
    const [historial, setHistorial] = useState([]);
    const [mensajeCompleto, setMensajeCompleto] = useState("");
    const { socket } = useSocket();
    const ip = ("http://10.1.5.137:4000")

    useEffect(() => {
        if (!socket) return;
        socket.on("connect", () => {
            console.log("conectado al socket")
        })

        socket.on("joined_OK_turnos", (data) => {
            setTurno(data)
            setMensajeCompleto("")
        })

        socket.on("nueva_reserva", (data) => {
            setTurno(data)
            const reserva = {
                numeroTurno: data.turnoActual,
                paciente: data.pacienteActual
            };
            setHistorial(prev => [reserva, ...prev].slice(0,5)) //mantiene solo las ultimas 5 reservas, agrega la nueva al inicio
        })

        socket.on("turnos_completos", (data) => {
            setMensajeCompleto("No hay más turnos disponibles")
            setTurno(null)
            setHistorial([])
        })

        return () => {
            socket.off("joined_OK_turnos");
            socket.off("nueva_reserva");
            socket.off("turnos_completos");
        };

    }, [socket])

    function unirseAlSocket() {
        socket.emit("join_turnos", { alumnoId })
    }

    function reservarTurno() {
        if (!turno) return;

        if (numeroTurnoNuevo <= turno.turnoActual) { //si el numero del nuevo turno es menor o igual al actual
            alert("El número de turno debe ser mayor al turno actual");
            return;
        }

        socket.emit("realizar_reserva", {
            paciente: username,
            numeroTurnoNuevo: Number(numeroTurnoNuevo)
        })
    }


    return (
        <>
            <h1>Página de turnos</h1>
            <p>Usuario: {username}</p>
            <p>ID del alumno: {alumnoId}</p>
            {turno && (
                <Turno especialidad={turno.especialidad} turnoActual={turno.turnoActual} cantidadReservas={turno.cantidadReservas} pacienteActual={turno.pacienteActual}></Turno>
            )}

            <AgendarNuevoTurno
                onChangeNumeroTurno={setNumeroTurno} onClickReservarTurno={reservarTurno}>
            </AgendarNuevoTurno>

            {!turno && <p>{mensajeCompleto}</p>}
            <h1>Historial</h1>
            {
                historial.length == 0 ? (
                    <p>No hay turnos reservados</p>
                ) : (
                    historial.map((reserva, index) => (
                        <div key={index}>
                            <p>Turno reservado: {reserva.numeroTurno} - Paciente: {reserva.paciente}</p>
                        </div>
                    ))
                )
            }

            <button onClick={unirseAlSocket}>Unirse al socket</button>
        </>
    )
}