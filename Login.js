import React, { Component } from "react";
import axios from "axios";
import Toast from "../component/Toast";
import $ from "jquery";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      message: ""
    };
  }

  bind = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  Login = event => {
    event.preventDefault();
    let url = "http://localhost/lapangan/public/login";
    let form = new FormData();
    form.append("username", this.state.username);
    form.append("password", this.state.password);
    axios.post(url, form)
      .then(response => {
        let logged = response.data.status;
        if (logged) {
          window.location = "/Home";
          this.setState({ message: "Login Berhasil!" });
          // saves token data to local storage
          localStorage.setItem("Token", response.data.token);
          localStorage.setItem("role", response.data.users.role);
          // saves user login data to local storage
          localStorage.setItem("id", JSON.stringify(response.data.users.id));
          // directs to data siswa page
          if(response.data.users.role === "admin"){
            window.location = "/lapangan";
          }else{
            window.location = "/home";
          }
          localStorage.setItem("id", JSON.stringify(response.data.users.id));
        } else {
          this.setState({ message: "Login Gagal" });
        }
        $("#message").toast("show");
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="card-body">
        <div className="container">
          <div className="col-md-6 mt-5 mx-auto">
          <center><h3 className="font-weight-bold">𝕊𝕡𝕠𝕣𝕥.𝕚𝕟𝕔</h3>
            <h5 className="h5 mb-3 font-weight-normal">Login</h5></center>
          </div>

          <div className="form-group">
            <center>
            <Toast id="message" autohide="false" title="Informasi">
              {this.state.message}
            </Toast></center>
            <form onSubmit={this.Login}>
              <center>
            <div className="form-group">
              <label for="name"></label>
              <input
                type="text"
                className="form-control"
                name="username"
                style={{ width: "60%" }}
                value={this.state.username}
                onChange={this.bind}
                required
                placeholder="Masukkan Username"
              />
              </div>
              </center>

              <center>
              <div className="form-group">
              <label for="name"></label>
              <input
                type="password"
                className="form-control "
                name="password"
                style={{ width: "60%" }}
                value={this.state.password}
                onChange={this.bind}
                required
                placeholder="Masukkan password"
              />
              </div>
              </center>
              
              <br/>
              <center><button className="mt-2 btn btn-info" style={{ width: "40%" }}type="submit">
                Login
              </button></center>
            </form>
          </div>
        </div>
       <center>Belum punya akun?&nbsp;<a href="/register" class="btn-" >Register</a></center>
      </div>
    );
  }
}

export default Login;
