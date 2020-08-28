import React from 'react';

class Form extends React.Component{
    initialState = {
        name: '',
        job: ''
    }
    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value,
        });
    }

    render(){
        const {name, job} = this.state;
        return(
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={name} onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input type="text" name="job" id="job" value={job} onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
    submitForm = () =>{
        if(document.getElementById("name").value===""){
            alert("Name must be filled");
        }
        else if(document.getElementById("job").value===""){
            alert("Job must be filled");
        }
        else{
            if(!document.getElementById("name").value.match("^[a-zA-Z ]*$")){
                alert("Name should be Alphabetic only");
            }
            else if(!document.getElementById("job").value.match("^[a-zA-Z ]*$")){
                alert("Job title should be Alphabetic only");
            }
            else{
                this.props.handleSubmit(this.state)
                this.setState(this.initialState)
            }
        }
    }
}

export default Form;