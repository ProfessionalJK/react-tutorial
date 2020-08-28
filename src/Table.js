import React from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
                <th></th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const editButton = (index) => {
        document.getElementsByClassName("icon-edit")[index].style.display = 'none';
        document.getElementsByClassName("icon-cancel")[index].style.display = 'block';        
        document.getElementsByClassName("icon-save")[index].style.display = 'block'; 
        var name = props.characterData[index].name; 
        var job = props.characterData[index].job; 
        document.getElementsByClassName("rowName")[index].innerHTML= "<td><input type='text' name='currName' value='"+name+"'/></td>";
        document.getElementsByClassName("rowJob")[index].innerHTML= "<td><input type='text' name='currJob' value='"+job+"'/></td>";
    }
    const cancelButton = (index) => {
        document.getElementsByClassName("icon-edit")[index].style.display = 'block';
        document.getElementsByClassName("icon-cancel")[index].style.display = 'none';        
        document.getElementsByClassName("icon-save")[index].style.display = 'none';
        var name = props.characterData[index].name; 
        var job = props.characterData[index].job; 
        document.getElementsByClassName("rowName")[index].innerHTML= "<td>"+name+"</td>";
        document.getElementsByClassName("rowJob")[index].innerHTML= "<td>"+job+"</td>";
    }
    const saveButton = (index) => {
        var name = document.getElementsByName("currName")[0].value;
        var job = document.getElementsByName("currJob")[0].value; 
        document.getElementsByClassName("rowName")[index].innerHTML= "<td>"+name+"</td>";
        document.getElementsByClassName("rowJob")[index].innerHTML= "<td>"+job+"</td>";
        document.getElementsByClassName("icon-edit")[index].style.display = 'block';
        document.getElementsByClassName("icon-cancel")[index].style.display = 'none';        
        document.getElementsByClassName("icon-save")[index].style.display = 'none';
    }
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td className="rowName">
                    {row.name}
                </td>
                <td className="rowJob">
                    {row.job}
                </td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
                <td>
                    <button  class="icon-edit" onClick={() => editButton(index)}><img alt="" src="https://image.flaticon.com/icons/svg/66/66761.svg"/></button>
                    <button  class="icon-cancel" onClick={() => cancelButton(index)}><img alt="" src="https://image.flaticon.com/icons/svg/66/66847.svg"/></button>
                    <button  class="icon-save" onClick={() => saveButton(index)}><img alt="" src="https://www.flaticon.com/premium-icon/icons/svg/2767/2767140.svg"/></button>
                </td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const {characterData,removeCharacter} = props
    return(
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
            </table>
        );
}

export default Table;