import React from 'react'
// import Cards from './Cards'

// Take notes from hatchway assignment. Map a class within the JSX and call the photos within the class. 


const DockImages = images.map((docks) => {
    return (
        <div>
            <img src={docks} />
        </div>
    )
})



const CardImages = () => {
    return (
        <div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(imgId => {
                return (
                    <div className="card">
                        <div key={imgId}>
                            <div className="card" >
                                <img src={`images/img-${imgId}.jpg`} alt="decks" width="200px" height="200px" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DockImages
