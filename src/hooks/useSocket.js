import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export function useSocket() {
    const [socket, setSocket] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const socket = io("http://10.1.5.137:4000");

        socket.on("connect", () => {
            console.log("SOCKET CONECTADO");
            setIsConnected(true);
        });

        socket.on("disconnect", () => {
            console.log("SOCKET DESCONECTADO");
            setIsConnected(false);
        });

        setSocket(socket);

        return () => {
            socket.disconnect();
        };
    }, []);

    return { socket, isConnected };
}
