import './app-filter.css';

const AppFilter = (props) => {
    const {onFilter} = props;
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button"
                data-filter="all"
                onClick={onFilter} >
                        Все сотрудники
            </button>
            <button 
                className="btn btn-outline-light"
                type="button"
                data-filter="promotion"
                onClick={onFilter} >
                        На повышение
            </button>
            <button 
                className="btn btn-outline-light"
                type="button"
                data-filter="salary"
                 onClick={onFilter} >
                        З/П больше 1000$
            </button>
        </div>
    );
}

export default AppFilter;