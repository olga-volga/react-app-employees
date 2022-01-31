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
            term: '',
            filter: 'all'
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
    /*toggleIncrease = (id) => {
        //this.setState(({data}) => {
            //const index = data.findIndex(item => item.id === id);
            //const oldItem = data[index];
            //const newItem = {...oldItem, increase: !oldItem.increase};
            
            //const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            //return {
                //data: newArr
            //}
        //});
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item;
            })
        }));
    }*/
    /*togglePromotion = (id) => {
        console.log(`promotion this ${id}`);
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, promotion: !item.promotion}
                }
                return item;
            })
        }));
    }*/
    toggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }));
    }
    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        });
    }
    updateSearch = (term) => {
        //this.setState({term: term});// или краткая запись ниже
        this.setState({term});
    }
    filterEmployees = (items, filter) => {
        switch(filter) {
            case 'all':
                return items;
            case 'promotion':
                return items.filter(item => {
                    return item.promotion;//или сокращенная запись return item.promotion === true
                });
            case 'salary':
                return items.filter(item => {
                    return item.salary > 1000;
                });
        }
    }
    updateFilter = (filter) => {
        this.setState({filter});
    }
    updateSalary = (name, salary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.name === name) {
                    return {...item, salary: salary}
                }
                return item;
            })
        }));
    }
    render() {
        const {data, term, filter} = this.state;
        const employeesTotal = this.state.data.length;
        const employeesIncreased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterEmployees(this.searchEmployee(data, term), filter);
        return (
            <div className="app">
                <AppInfo 
                    employeesTotal={employeesTotal}
                    employeesIncreased={employeesIncreased} />
    
                <div className="search-panel">
                    <SearchPanel onSearch={this.updateSearch} />
                    <AppFilter onFilter={(e) => this.updateFilter(e.currentTarget.getAttribute('data-filter'))} />
                </div>
    
                <EmployeesList 
                    data={visibleData} 
                    onDelete={this.deleteItem}
                    //onToggleIncrease={this.toggleIncrease}
                    //onTogglePromotion={this.togglePromotion} 
                    onToggleProp={this.toggleProp} 
                    onUpdateSalary={this.updateSalary} />

                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;