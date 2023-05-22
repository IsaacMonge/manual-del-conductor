import React from 'react';

export default class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    render() {
        return ( 
            <div className="sign-in-wrapper">
                <div className="form">
                    <div className="input-wrapper">
                        <div>Correo Electrónico</div> 
                        <input className="input" type="text" placeholder="Correo Electrónico" value={this.state.email} onChange={ e => this.setState({ email: e.target.value }) } />
                    </div>
                    <div className="input-wrapper">
                      <div>Contraseña</div> 
                      <input className="input" type="password" placeholder="Contraseña" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                    </div>
            
                    <div className="btn" onClick={() => this.props.signIn(this.state.email, this.state.password)}>Inicia Sesión</div> 
                </div> 
            </div>
        )
    }
}