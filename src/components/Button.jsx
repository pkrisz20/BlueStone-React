const Button = ({ text, color, onClick, classProp }) => {
    return (
        <button
            onClick={ onClick }
            style={{ backgroundColor: color }}
            className={`btn ${classProp}`}
            >
            { text }
        </button>
    );
}

export default Button;
