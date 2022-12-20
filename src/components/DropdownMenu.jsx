import "../styles/components/DropdownMenu.scss";
import useToggle from "../hooks/useToggle";
import useClickOutside from "../hooks/useClickOutside";
import { useRef } from "react";

const DropdownMenu = ({ items, classProp, onClick, selectedLang }) => {
    const [open, setOpen] = useToggle(false);
    const dropdownRef = useRef();

    useClickOutside(dropdownRef, (e) => {
        if (!(dropdownRef.current.contains(e.target)) && open) setOpen(false);
    });

    return (
        <div className={`dropdown ${classProp ? classProp : ''}`} onClick={() => setOpen(!open)}>
            <div ref={dropdownRef} className="dropdown-link">{ selectedLang.toUpperCase() ?? 'EN' }</div>

            <ul className={`dropdown-list ${open ? 'active' : ''}`}>
                { items?.filter(item => item.selected ? false : true).map((item, index) => {
                    return <li onClick={() => onClick(item.language)} className="dropdown-list-item" key={index}>{ item.language }</li>
                })}
            </ul>
        </div>
    );
}

export default DropdownMenu;