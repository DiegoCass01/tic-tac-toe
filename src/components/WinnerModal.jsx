import { useEffect, useState } from "react";
import { Square } from "./Square";

// eslint-disable-next-line react/prop-types
export function WinnerModal({ winner, resetGame }) {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (winner !== null) {
            const timer = setTimeout(() => {
                setShowModal(true);
            }, 500); // Espera 1 segundo para mostrar el modal
            return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta o cambia el estado
        } else {
            setShowModal(false); // Asegura que el modal se oculte cuando no haya ganador
        }
    }, [winner]);

    if (winner === null || !showModal) return null;

    const winnerText = winner === false ? "Empate" : "Ganó:";

    return (
        <section className="winner">
            <div className="text">
                <h2>{winnerText}</h2>

                <header className="win">{winner && <Square>{winner}</Square>}</header>

                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    );
}
