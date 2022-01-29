import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, promotion: true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, promotion: false, id: 2},
                {name: 'Carl W.', salary: 1750, increase: false, promotion: false, id: 3}
            ],
            increase: '',
            promotion: ''
        };
        this.maxId = 4;
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            promotion: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
    toggleIncrease = (id) => {
        /*this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            const oldItem = data[index];
            const newItem = {...oldItem, increase: !oldItem.increase};
            
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        });*/
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }));
    }
    togglePromotion = (id) => {
        console.log(`promotion this ${id}`);
    }
    render() {   
        return (
            <div className="app">
                <AppInfo />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployeesList 
                    data={this.state.data} 
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.toggleIncrease}
                    onTogglePromotion={this.togglePromotion} />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;