import React from'react';
import Planet from './Planet.css'

function PlanetList()
{
    const planets=['Mars','Venus','Jupiter','Earth','Saturn','Neptune'];
    return (
            <div className="set">
            {
                planets.map(planet => <table><tr><td>{planet}</td></tr></table>)
            }
        </div>     
    )
}
export default PlanetList
