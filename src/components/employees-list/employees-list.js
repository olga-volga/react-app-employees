import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;//вытаскиваем id
        return (
            //<EmployeesListItem name={item.name} salary={item.salary}/>//или так:
            //<EmployeesListItem {...item}/>//до добавления id (key prop)
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)} />
        );
    });
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
};

export default EmployeesList;