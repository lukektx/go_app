"use client";

import { useState } from "react";

export enum Status {
    Empty = 0,
    Player1,
    Player2,
}

interface SpaceProps {
    row: number;
    col: number;
    status: Status;
}

const Space = ({ row, col, status }: SpaceProps) => {
    const [] = useState<Status>(status);
    return (
        <td className="w-5 aspect-square border-black border-2 p-0 m-0">
            <button>
                {status == Status.Player1 && <img src='/black_stone.png'></img>}
                {status == Status.Player2 && <img src='/white_stone.png'></img>}
            </button>
        </td>
    )
}

export default Space;