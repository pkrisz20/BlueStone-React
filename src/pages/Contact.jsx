import BlockTitle from '../components/BlockTitle';
import { useTranslation } from 'react-multi-lang';
import NumberPicker from "react-widgets/NumberPicker";
import Multiselect from "react-widgets/Multiselect";
import DatePicker from "react-widgets/DatePicker";
import Localization from 'react-widgets/esm/Localization';
import { DateLocalizer } from 'react-widgets/IntlLocalizer';
import { DropdownList } from 'react-widgets';
import "../styles/components/Donate.scss";
import { useState } from 'react';
import { useEffect } from 'react';

const Contact = () => {
    const trans = useTranslation();
    const [dateValue, setDateValue] = useState("");

    useEffect(() => {
        console.log(dateValue);
    }, [dateValue]);

    return (
        <section className="contact">
            <div className="wrapper">
                <BlockTitle title="Donate" />
                <div className="contact-map">MAP</div>
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