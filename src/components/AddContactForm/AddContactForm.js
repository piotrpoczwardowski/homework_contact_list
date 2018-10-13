import React, {Component} from 'react'

class AddContactForm extends Component{

    state = {
        contactName: '',
        error: null
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.contactName === ''){
           this.setState({
               error : new Error ('Need Name')
           })
           return;

        }
        console.log(this.state.contactName)
        this.props.addContactFunction(this.state.contactName)
        this.setState({contactName: '', error: null})

    }

    handleChange = event => {
        this.setState({
            contactName: event.target.value
        })
    }

render(){
    return(

        <form onSubmit={this.handleSubmit}>
        {
            this.state.error && <p>{this.state.error.message}</p>
        }
            <input value ={this.state.contactName} onChange ={this.handleChange} />
            <button>Add</button>
        </form>

    )
}

}

export default AddContactForm