import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Jhon Smith', salary: 800, increase: true, rise: true, id: 1},
                {name: 'Carl Marks', salary: 3000, increase: false, rise: false, id: 2},
                {name: 'J. R. R. Tolkien', salary: 5000, increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
    }
    
    onFilterChange = (filter) => {
        this.setState({filter})        
    }

    filter = (items, filter) => {
        switch(filter){
            case 'rise': 
                return items.filter(item => item.rise);
            
            case 'bigSalory': 
                return items.filter(item => +item.salary > 1000);
            
            default:
                return items;
        }
    } 

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        })

    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }


    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);
            
            // const before = data.slice(0, index);
            // const after = data.slice(index+1);

            // const newArr = [...before, ...after];
            return {
                data: data.filter(item => item.id !== id)
            };

        })
    }

    addItem = (name, salary) => {
        this.setState(({data}) => {
            let idArray = data.map(item => +item.id);
            let id = Math.max(...idArray) + 1;

            let newItem = {
                name: name,
                salary: salary,
                increase: false,
                rise: false,
                id: id
            }

            return {
                data: [...data, newItem]
            }
        })
    }

    // onToggleIncrease = (id) => {
    //     // this.setState(({data}) => {
    //     //     const index = data.findIndex(elem => elem.id === id);

    //     //     const old = data[index];
    //     //     const newItem = {...old, increase: !old.increase};
    //     //     const newArray = [...data.slice(0, index), newItem, ...data.slice(index+1)];

    //     //     return {
    //     //         data:newArray
    //     //     }
    //     // })

    //     this.setState(({data}) => ({
    //         data: data.map(item => (item.id === id)?({...item, increase: !item.increase}):(item))
    //     }))

    // }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => (item.id === id)?({...item, [prop]: !item[prop]}):(item))
        }))        
    }

    render(){
        let {data, term, filter} = this.state;
        let visibleData = this.searchEmp(data, term);
        visibleData = this.filter(visibleData, filter);
        return (
            <div className="app">
                <AppInfo
                totalNum={data.length}
                increaseNum={data.filter(item => item.increase).length}/>
    
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch = {this.onUpdateSearch}/>
                    <AppFilter
                    onFilterChange = {this.onFilterChange}
                    filter = {filter}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete = {this.deleteItem}
  //                  onToggleIncrease = {this.onToggleIncrease}
                    onToggleProp = {this.onToggleProp}
                    />
    
                <EmployeesAddForm onAdd = {this.addItem}/>
            </div>
        );
    }

}

export default App;