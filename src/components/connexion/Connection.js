import React from "react";

class Connexion extends React.Component {

    logIn = event => {
        event.preventDefault();
        const pseudo = this.pseudoInput.value;
        const password = this.pwdInput.value;

        if(pseudo === "azerty" && password === "abc"){
            this.props.history.push('/home');
        }
        else {
            alert("wrong password")
        }
    }





    render(){
        return(
            <div className="connexionDiv">
                <form className="connexionForm" onSubmit={e => this.logIn(e)}>
                    <input
                        type="text"
                        required
                        className="connexionPseudo"
                        ref={input =>this.pseudoInput = input}
                    />
                    <input
                        type="password"
                        required
                        className="connexionPwd"
                        ref={input =>this.pwdInput = input}
                    />
                    <button type="submit" className="connexionBtn">Log In</button>
                </form>
            </div>
        )
    }
}

export default Connexion;