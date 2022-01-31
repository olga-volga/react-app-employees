import {Component} from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: this.props.salary
        }
    }
    changeSalary = (e) => {
        const {name, onUpdateSalary} = this.props;
        const salary = +e.target.value.replace(/\D/gi, '');
        this.setState({
            salary: salary
        })
        onUpdateSalary(name, salary)
    }
    render() {
        const {name, increase, promotion, onDelete, onToggleProp} = this.props;

        let classNames = 'list-group-item d-flex justify-content-between';
        if (increase) {
            classNames += ' increase';
        }
        if(promotion) {
            classNames += ' like';
        }
        return (
            <li className={classNames}>
                <span onClick={onToggleProp} className="list-group-item-label" data-toggle="promotion">{name}</span>
                <input 
                    type="text" 
                    className="list-group-item-input" 
                    defaultValue={this.state.salary + '$'}
                    onChange={this.changeSalary} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onToggleProp} 
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>
        
                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }  
};

export default EmployeesListItem;