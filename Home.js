import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slide1 from '../image/Slide1.jpg';
import Slide2 from '../image/Slide2.jpg';
// import ProductItem from '../client/ProductItem';

export default class Home extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            product: [],
            find: "",
            filter:""
        }

        let auth = localStorage.getItem("Token")
        if (!auth)
        window.location = "/login"
    }

    bind = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    GetProducts = () => {
        let url = "http://localhost/toko_online/public/product"
        axios.get(url)
        .then(res => {
            this.setState({product: res.data.product})
        })
        .catch(error => {
            console.log(error)
        })
    }

    Search = (e) => {
        if (e.keyCode === 13) {
            let url = "http://localhost/toko_online/public/product"
            
            let form = new FormData()
            form.append("find", this.state.find)
            axios.post(url, form)
                .then(res => {
                    this.setState({product: res.data.product})
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    componentDidMount() {
        this.GetProducts()
    }

    render() {
        return (
        
        <div className=" container">
            <div className="row">
                
                <div className="">
                    <div id="slideshow" className="carousel slide my-4" data-ride="carousel">
                    <input type="text" className="form-control" name="find" value={this.state.find} onChange={this.bind} onKeyUp={this.Search} required placeholder="Pencarian..." />
<br></br>
                        <ol className="carousel-indicators">
                            <li data-target="#slideshow" data-slide-to="0" className="active"></li>
                            <li data-target="#slideshow" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img className="d-block img-fluid" src={Slide1} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block img-fluid" src={Slide2} alt="Second slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#slideshow" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#slideshow" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                        
                        <br></br><br></br><br></br>
                        <center><h1 className="my-4" class="font-weight-bold" shadow>Selamat Datang di Sport.inc!</h1>
                        </center></div>

                </div>

                <div class="card-deck">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Sport.inc</h5>
                        <p class="card-text">Booking online lapangan lapangan yang mumpuni, kualitas internasional dan tentunya hemat di kantong</p>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Cara penggunaan?</h5>
                        <p class="card-text"><p>1.Cari lapangan yang akan anda pilih/gunakan</p><p>2.Cari tanggal untuk dibooking</p><p>3.Lakukan pembayaran sesuai dengan harga yang sudah ditentukan</p></p>
                        <p class="card-text"><small class="text-muted">Detail-->></small></p>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title">Kontak dan Lokasi</h5>
                        <p class="card-text">Level 18a, Office 8, Jl. Jend. Sudirman No.Kav.52-53, RT.1/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190</p>
                        <br></br>
                        <br></br>
                        <p class="card-text"><small class="text-muted">+62 857 482 363 71</small></p>
                      </div>
                    </div>
                    </div>
                    <center><a className="text-white">sajsuchusdbua  sldmsljh nsjxjsnbciusbcgduifvdbuin</a></center>
                    <div>
                <center></center><h2 className="my-4">Pilih lapangan yang anda pilih.</h2>
                        <hr></hr>
                        <h4>Kategori</h4>
                        <form>
                            <div className="form-group">
                                <select className="form-control" name="filter" value={this.state.value} onChange={this.bind} >
                                    <option value="">Pilih</option>
                                    <option value="Futsal">Futsal</option>
                                    <option value="Basket">Basket</option>
                                    <option value="Voli">Voli</option>
                                </select>
                            </div> 
                            <button type="submit" className="btn btn-dark pull-right m-8">
                                Filter
                            </button>
                        </form>
                        
                </div>
                <hr></hr><hr></hr>
                
            </div>
            
        </div>
    );
}

}
