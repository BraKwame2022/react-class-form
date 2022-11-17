import React, { Component } from 'react'
import User from './User';




class UsersForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email:"",
            gen:"",
            users:[
                {
                name:"Chickson",
                email:"arhin.kingsley1@gmail.com",
                gen:"23"
            },
            {
                name: "Solomon",
                email: "solomon@gmail.com",
                gen: "12"
            }
        ],
        }
    }

    /* creating functions for various input */
    handleNameChange = (e) => {
        this.setState({
            name:e.target.value,
        })
    }

    handleEmailChange = (e) =>{
        this.setState({
            email:e.target.value,
        })
    }

    handleGenChange = (e) =>{
        this.setState({
            gen:e.target.value,
        })
    }

    /*creating function for the form or submit*/
     handleonSubmit = (e) =>{
        e.preventDefault();
        /*single out the name email and gen from the state*/
        const {name, email, gen} = this.state;
        // create variable to store the user-info
        const user = {name, email, gen};
       
        /*adding everything inside the user and the initial state*/
        this.setState({
            users : [...this.state.users, user],
            /*setting the input empty after submitted*/
            name:"",
            email:"",
            gen:"",
        });
        console.log(this.state.users)
     }


  render() {
    const {users} = this.state;
    return (
      <div className='Main-container'>
        <form onSubmit = {this.handleonSubmit}>
        <label>Full Name</label>
        <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder='Full Name'/>

        <label>Email</label>
        <input type="text" value={this.state.email} onChange={this.handleEmailChange} placeholder='Email'/>

        <label>Gen</label>
        <input type="number" value={this.state.gen} onChange={this.handleGenChange} placeholder='Gen'/>

        <button onSubmit={this.handleonSubmit}>Submit</button>

        </form>

            <div>
                {users.map((user, index) => (
                    <div key={index} className="main-container">
                        <User name={user.name} email={user.email} gen={user.gen}/>
                    </div>
                ))}
            </div>
      </div>
    )
  }
}

export default UsersForm;
