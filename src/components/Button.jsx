const Button = ({ text, color, onClick, classProp, disabled, icon }) => {
    return (
        <button
            disabled={disabled}
            onClick={ onClick }
            style={{ backgroundColor: color }}
            className={`btn ${classProp}`}
            >
            { icon } { text }
        </button>
    );
}

export default Button;
