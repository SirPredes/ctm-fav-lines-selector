import '../index.css'
import { useEffect, useState } from 'react'
import fav_grey from '../assets/fav_grey.svg'

import type {LineColors} from './LineColors'
import linesArray from './sictmLinesCTM.json'

export function FavLinesSelector(){

    const [lines, setLines] = useState<Array<LineColors>>([])

    
    const getTransportType = (typ: number): string => {
        switch (typ) {
        case 1:
            return "tren";
        case 2:
            return "metro";
        case 3:
            return "autobus";
        default:
            return "desconocido";
        }
    }

    useEffect(() => {
        const mappedLines: LineColors[] = linesArray.linesInfo.map((line) => ({
            id: line.id,
            name: line.cod,
            color: line.color,
            link: `/${getTransportType(line.typ)}/-/linia/${line.cod}`
        }))
        setLines(mappedLines)
    })

    return(
        <>
            <div className='lines-selector-container'>
                <div className='lines-selector-title'>
                    <img className='lines-selector-star' src={fav_grey} alt="Línies preferides" />
                    <h3>Línies preferides</h3>
                </div>
                <div className='linies-selector-content'>
                    <ul>
                        {lines.map(
                            (line) => (
                                <li key={line.id} style={{backgroundColor: `${line.color}`}}>
                                    <a href={line.link}>{line.name}</a>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}