import './app-info.css';

const AppInfo = (props) => {
    const {totalNum, increaseNum} = props;
    return (
        <div className="app-info">
            <h1>Облік співробітників</h1>
            <h2>Загальна кількість співробітників: {totalNum}</h2>
            <h2>Премію отримують: {increaseNum}</h2>
        </div>
    )
}

export default AppInfo;