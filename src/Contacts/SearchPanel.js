import React from 'react';

export default function SearchPanel(props){
    return(
        <div className="filters">
            <label>
                <span>Search:</span>
                <input type="text" id="search-input" value={props.search} onChange={props.handleSearchChange} placeholder="Start enter a name or phone"/>
            </label>
            <label>   
                <input type="checkbox" className="checkbox" id="male-checkbox" onChange={props.toggleTick} defaultChecked="true"/>
                <img src={props.genderIcons.male} alt=""/>
            </label>
            <label>               
                <input type="checkbox" className="checkbox" id="female-checkbox" onChange={props.toggleTick} defaultChecked="true"/>
                <img src={props.genderIcons.female} alt=""/>
            </label>
            <label id="undefined-gender-label">
                <input type="checkbox" className="checkbox" id="undefined-gender-checkbox" onChange={props.toggleTick} defaultChecked="true"/>   
                <span>undefined</span>
            </label>
        </div> 
    )
}