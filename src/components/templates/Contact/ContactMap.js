import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export default function Map() {

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

    return (
        <MapContainer center={[27.82670656468988, 52.32748721969582]} zoom={18} className='col-span-1 lg:col-span-2 !z-10' style={{ height: '300px', width: '100%'}}>
            <TileLayer
                attribution=''
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[27.82670656468988, 52.32748721969582]}>
                <Popup>پیلیسوک</Popup>
            </Marker>
        </MapContainer>
    );
}