import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component{
    constructor (props) {
        super(props);
        this.state = {
            name: "",
            salary: ''
        }
    }

    onChangeValue = (e) => {
        this.setState({
           [e.target.name] : e.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        let {name, salary} = this.state;
        if (name && salary) {
            let {onAdd} = this.props;
    
            this.setState({            
                name: "",
                salary: ''            
            }) 
    
            onAdd(name, salary);
        }
    }

    render(){
        let {name, salary} = this.state;
        
        return (
            <div className="app-add-form">
                <h3>Додайте нового співробітника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Ім'я Прізвище?"
                        name = "name"
                        value = {name} 
                        onChange={this.onChangeValue}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name = "salary"
                        value = {salary} 
                        onChange={this.onChangeValue}/>
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            >Додати</button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;