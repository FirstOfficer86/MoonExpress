import React from 'react';



const MoonTable = ({moons}) => (


    <div className='div-moons-right'>
        {moons.map(moon =>(
            <div key={moon.data[0].nasa_id}>
                <h2>{moon.data[0].title}</h2>
                <p>{moon.data[0].description}</p>
            </div>
        ))}

    </div>
);

export default MoonTable