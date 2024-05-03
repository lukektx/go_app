"use client";

import { useEffect, useRef } from "react";
import Space, { Status } from "./Space";

interface BoardProps {
    dimension: number;
}

const Board = ({ dimension }: BoardProps) => {
    // const rows = [];
    // for (let r = 0; r < dimension; r++) {
    //     const row = []
    //     for (let c = 0; c < dimension; c++) {
    //         row.push(<Space row={r} col={c} status={Status.Empty} key={r * dimension + c} />)
    //         row.push(<hr />)
    //     }
    //     rows.push(<tr key={r}>{row}</tr>);
    // }
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvasObj = canvasRef.current
        const ctx = canvasObj.getContext('2d');
        ctx.fillStyle = '#000000'
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }, [])

    return (
        <canvas ref={canvasRef} width={50 * dimension} height={50 * dimension} />
    )

    // return (
    //     <table className="w-1/2 h-auto bg-amber-500">
    //         <tbody>{rows}</tbody>
    //     </table>
    // )
}

export default Board;