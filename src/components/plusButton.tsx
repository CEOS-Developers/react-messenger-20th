const PlusButton: React.FC = () => {
    return (
        <button className="rounded-lg">
            <img src={require('../assets/plusButtonImg.svg').default} alt="Network" />
        </button>
    );
};

export default PlusButton;