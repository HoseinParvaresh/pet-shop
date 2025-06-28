import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export default function Map({position}) {

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

    return (
        <MapContainer center={position} zoom={18} style={{ height: '300px', width: '100%' }}>
            <TileLayer
                attribution=''
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>پیلیسوک</Popup>
            </Marker>
        </MapContainer>
    );
}