import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import {useState} from "react"
import getCenter from "geolib/es/getCenter"

function Map({searchResults}) {

    const [selectedLocation, setSelectedLocation] = useState({})
  
    const coordinates = searchResults.map((item) => {
        return {longitude:item.long,latitude: item.lat}
    })

    const center = getCenter(coordinates)


    const [viewport, setViewport] = useState({
        width: '100%',
        height: '35%',
        latitude:center.latitude,
        longitude:center.longitude,
        zoom:11,
    })

    return <ReactMapGL
    mapStyle='mapbox://styles/sudershhh/ckt8b3rpu1tbh17qu8g33iuir'
    mapboxApiAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
        {searchResults.map((item) => (
            <div key={item.long}>
                <Marker
                    longitude={item.long}
                    latitude={item.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <p className='cursor-pointer text-2xl animate-bounce' aria-label="push-pin" onClick={() => setSelectedLocation(item)}>📌</p>
                </Marker>

                {selectedLocation.long ===item.long ? (
                    <Popup
                    onClose={() => setSelectedLocation({})}
                    closeOnClick={true}
                    latitude={item.lat}
                    longitude={item.long}
                    >
                        {item.title}
                    </Popup>
                ) : (
                    false
                )}

            </div>
        ))}
    </ReactMapGL>
}

export default Map
