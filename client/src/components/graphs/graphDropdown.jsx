import { useState } from 'react';
import makeDoughnut from './doughnut/doughnut.jsx';
import makePie from './pie/pie.jsx';
import makeBar from './bar/bar.jsx';
import { useScrollTrigger } from '@mui/material'




const GraphDropdown = () => {
    const [graphType, setGraphType] = useState("doughnut");
    const handleOnchange = (e) => {
        console.log(e.target.value);
        setGraphType(e.target.value)
    }
    return (
        <>
            <select name="graph" id="graph" onChange={handleOnchange}>
                <option value="doughnut" >Doughnut Graph</option>
                <option value="pie">Pie Graph</option>
                <option value="bar">Bar Graph</option>
            </select>
            {
                graphType === "doughnut" ? (makeDoughnut())
                    : graphType === "pie" ? (makePie())
                        : (makeBar())

            }
        </>
    )
}

export default GraphDropdown;