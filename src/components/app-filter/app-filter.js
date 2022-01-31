import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'promotion', label: 'На повышение'},
        {name: 'salary', label: 'З/П больше 1000$'}
    ];
    const buttons = buttonsData.map(item => {
        const {name, label} = item;
        const active = props.filter === name;// if props.filter === name, active = true, else active = false
        const clazz = active ? 'btn-light' : 'btn-outline-light';// if active === true, clazz = 'btn-light', else clazz = 'btn-outline-light'
        return (
            <button 
                className={`btn ${clazz}`}
                type="button"
                key={name} 
                onClick={() => props.onFilter(name)} >
                    {label}
            </button>
        );
    });
    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
    /*const {onFilter} = props;
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
    );*/
}

export default AppFilter;