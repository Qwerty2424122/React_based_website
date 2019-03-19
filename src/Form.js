import React, {Component} from 'react';



class Form extends Component{

    state = {
        firstName : '' ,
        LastName : '',
        UserName : '',
        EMail : '',
        password : '',
    }
    render(){
        return(
            <form>
                <input placeholder="First Name"
                value={this.state.firstName}
                onChange={e => this.setState({firstName: e.target.value})}
            />
             <input placeholder="Last Name"
                value={this.state.LastName}
                onChange={e => this.setState({LastName: e.target.value})}
            />
             <input placeholder="First Name"
                value={this.state.UserName}
                onChange={e => this.setState({UserName: e.target.value})}
            />
             <input placeholder="First Name"
                value={this.state.EMail}
                onChange={e => this.setState({EMail: e.target.value})}
            />
             <input placeholder="First Name"
                value={this.state.password}
                onChange={e => this.setState({password: e.target.value})}
            />

            </form>
        );
    }

}

export default Form;