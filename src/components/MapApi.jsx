import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

const containerStyle = {
  width: '700px',
  height: '450px',
}

const center = {
  lat: -21.86952928883352,
  lng: -51.84803314557645,
}

function MapApi() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyADpaslrfJgiIBYcZYzX1Mz8NXKDet2lRM',
  })

  const [map, setMap] = React.useState(null)

  return isLoaded ? (
    <GoogleMap
    mapContainerClassName='rounded-xl'
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(MapApi)