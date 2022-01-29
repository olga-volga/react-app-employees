import './app-info.css';

const AppInfo = ({employeesTotal, employeesIncreased}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании "Рога и копыта"</h1>
            <h2>Общее число сотрудников: {employeesTotal}</h2>
            <h2>Премию получат: {employeesIncreased}</h2>
        </div>
    );
};

export default AppInfo;