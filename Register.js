import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import $ from "jquery";
import Toast from "../component/Toast";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            action:"insert",
            id_user:"",
            username:"",
            email:"",
            password:"",
            role:"User",
            message:""
        }
        
    }

    bind = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    Save = (event) => {
        event.preventDefault();
        let url = "http://localhost/lapangan/public/register";
        let form = new FormData();
        form.append("action", this.state.action);
        form.append("id_user", this.state.id_user);
        form.append("username", this.state.username);
        form.append("email", this.state.email);
        form.append("password", this.state.password);
        form.append("role", this.state.role);
        // form.append("img_user", this.state.img_user, this.state.img_user.name);
        axios.post(url, form)
  
        .then(response => {
          this.setState({message: response.data.message});
          $("#message").toast("show");
          window.location = "/login";
        })
        .catch(error => {
          console.log(error);
        });
      }



    render() {
        return (
            <div className="card-body">
                <div className="container">
                    <div className="col-md-6 mt-5 mx-auto">
                        <center><h3 className="font-weight-bold">𝕊𝕡𝕠𝕣𝕥.𝕚𝕟𝕔</h3>
                        <h8 className="h5 mb-3 font-weight-normal">Rᥱgιstᥱr</h8></center>
                        <form onSubmit={this.Save}>
                            <div className="form-group">
                                <label for="name">Username</label>
                                <input type="text" className="form-control" name="username" placeholder="Enter Username"
                                    value={this.state.username}
                                    onChange={this.bind}
                                />
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" name="email" placeholder="Enter email"
                                    onChange={this.bind}
                                />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.bind}
                                />
                                 
                            </div>
                            <br></br>
                            <center><a href="/login">Already have an account?</a></center>
                            <br></br>
                            <div className="col-md-13 mb-6">
                                <button type="submit" className="btn btn-info btn-primary btn-block">
                                    Register
                                    <Link to="/login"></Link>
                                </button>
                               
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;