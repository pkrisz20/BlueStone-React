import BlockTitle from '../components/BlockTitle';
import NumberPicker from "react-widgets/NumberPicker";
import Multiselect from "react-widgets/Multiselect";
import DatePicker from "react-widgets/DatePicker";
import Localization from 'react-widgets/esm/Localization';
import { DateLocalizer } from 'react-widgets/IntlLocalizer';
import "../styles/components/Donate.scss";
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Contact = () => {
    const [dateValue, setDateValue] = useState("");

    useEffect(() => {
        console.log(dateValue);
    }, [dateValue]);

    return (
        <section className="contact">
            <div className="wrapper">
                <BlockTitle title="Donate" />
                <MapContainer className="contact-map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
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