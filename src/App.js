import logo from './logo.svg';
import './App.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

function App() {
    const MyMapComponent = withScriptjs(withGoogleMap(({ isMarkerShown }) =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34, lng: 150 }}
        >
            {isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
    ))

    return (
        <MyMapComponent
            isMarkerShown={false}
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    );
}

export default App;
