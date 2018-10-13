import React, {Component} from 'react'

class AddContactForm extends Component{

    state = {
        contactName: '',
        contactSurName: '',
        contactNumber: '',
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
         if (this.state.contactNumber === ''){
            this.setState({
                error : new Error ('Need Number')
            })
            return;
 
         }
        
        this.props.x(this.state)
        
        this.setState({contactName: '', error: null})
        this.setState({contactSurName: '', error: null})
        this.setState({contactNumber: '', error: null})

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
    handleChangeNumber = event => {
        this.setState({
            contactNumber: event.target.value
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
            <input value ={this.state.contactNumber} onChange ={this.handleChangeNumber} />
            <button>Add</button>
        </form>

    )
}

}

export default AddContactForm