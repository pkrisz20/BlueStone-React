import BlockTitle from '../components/BlockTitle';
import NumberPicker from "react-widgets/NumberPicker";
import Multiselect from "react-widgets/Multiselect";
import DatePicker from "react-widgets/DatePicker";
import Localization from 'react-widgets/esm/Localization';
import { DateLocalizer } from 'react-widgets/IntlLocalizer';
import "../styles/components/Donate.scss";
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
// import { geosearch } from "esri-leaflet-geocoder";
// import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';

const Contact = () => {
    const [dateValue, setDateValue] = useState("");
    // const mapRef = useRef();

    // useEffect(() => {
    //     const { current } = mapRef;
    //     const { leafletElement: map } = current;

    //     const control = geosearch();
    //     control.addTo(map);
    // }, []);

    const polygon = [
        [46.08005284225203, 19.643207047941498],
        [46.08880245979531, 19.631222957952453],
        [46.09938887774486, 19.651762892607348],
    ];
    const purpleOptions = { color: 'purple' };

    return (
        <section className="contact">
            <div className="wrapper">
                <BlockTitle title="Digital Hive" />
                <MapContainer className="contact-map" center={[46.09470952698606, 19.653792205001455]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[46.09470952698606, 19.653792205001455]}>
                        <Popup>Digital Hive IT center</Popup>
                    </Marker>
                    <Polygon pathOptions={purpleOptions} positions={polygon} />
                </MapContainer>

                <div className="contact-form">
                    <form>
                        <label className='label'>Donate amount</label>
                        <NumberPicker
                            defaultValue={1.4}
                            format={{ style: "currency", currency: "EUR" }}
                        />

                        <label className='label'>For whom</label>
                        <Multiselect
                            defaultValue={["Sick childrens"]}
                            data={["Hospitals", "Sick childrens", "Orphange", "Psychiatry"]}
                            textField='whom'
                            filter='contains'
                        />

                        <label className='label'>Date</label>
                        <Localization date={new DateLocalizer({
                            culture: window.lang ?? 'en',
                            firstOfWeek: 1 }
                        )}>
                        <DatePicker
                            defaultValue={new Date()}
                            min={new Date()}
                            onChange={value => setDateValue(value)}
                            valueEditFormat={{ dateStyle: "medium" }}
                            valueDisplayFormat={{ dateStyle: "medium" }}
                        />
                        </Localization>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;