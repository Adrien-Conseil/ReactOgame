import React, {Component} from 'react';
import './navbar.css';
class Navbarhomemade extends Component {

    handleClickLogin = () =>{
        this.props.history.push(`/login`)
    }

    handleClickHome = () =>{
        this.props.history.push(`/home`)
    }


    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a type="button" onClick={this.handleClickLogin}> login </a>
                    </li>
                    <li>
                        <a  onClick={this.handleClickHome}> home </a>
                    </li>
                    <li>
                        <div className="dropdown">
                            <button className="dropbtn">Ladder</button>
                            <div className="dropdown-content">
                                <a  onClick={this.handleClickLogin}> perso </a>
                                <a  onClick={this.handleClickLogin}> Guilde </a>
                            </div>

                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbarhomemade;