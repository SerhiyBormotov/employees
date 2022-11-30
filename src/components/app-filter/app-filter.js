
import './app-filter.css';

const AppFilter = (props) => {
    const activeClass = "btn btn-light",
        passiveClass = "btn btn-outline-light";

    const buttonsData = [
        {name: 'all', label: 'Всі співробітники'},
        {name: 'rise', label: 'На підвищення'},
        {name: 'bigSalory', label: 'З / П більше 1000$'}
    ]

    const buttons = buttonsData.map(({name, label}) => {
        let active = name === props.filter;
        return (
            <button 
            className={active?activeClass:passiveClass} 
            type="button" 
            key={name}
            onClick={() => props.onFilterChange(name)}>
                {label}
            </button>
        )
    })


    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default AppFilter;