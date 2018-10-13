import React, {Component} from 'react'

class AddContactForm extends Component{

    state = {
        contactName: '',
        contactSurName: '',
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
        if (this.state.contactSurName === ''){
            this.setState({
                error : new Error ('Need SurName')
            })
            return;
 
         }
        console.log(this.state.contactName)
        this.props.addName(this.state.contactName)
        this.props.addSurName(this.state.contactSurName)
        this.setState({contactName: '', error: null})
        this.setState({contactSurName: '', error: null})

    }

    handleChangeName = event => {
        this.setState({
            contactName: event.target.value
        })
    }
    handleChangeSurName = event => {
        this.setState({
            contactSurName: event.target.value
        })
    }

render(){
    return(

        <form onSubmit={this.handleSubmit}>
        {
            this.state.error && <p>{this.state.error.message}</p>
        }
            <input value ={this.state.contactName} onChange ={this.handleChangeName} />
            <input value ={this.state.contactSurName} onChange ={this.handleChangeSurName} />
            <button>Add</button>
        </form>

    )
}

}

export default AddContactForm