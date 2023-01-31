import "../styles/components/BlockTitle.scss"

const BlockTitle = ({ main, sub }) => {
    return (
        <header className="block-title">
            <h2 className="block-title-main">{ main }</h2>
            { sub && <h3 className="block-title-sub">{ sub }</h3> }
        </header>
    );
}

export default BlockTitle;
