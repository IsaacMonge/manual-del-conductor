import React from 'react';

export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: ''
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

                    <div className="input-wrapper">
                        <div>Nombre</div> 
                        <input className="input" type="text" placeholder="Nombre" value={this.state.firstName} onChange={ e => this.setState({ firstName: e.target.value }) } />
                    </div>
                    <div className="input-wrapper">
                      <div>Apellido</div> 
                      <input className="input" type="text" placeholder="Apellido" value={this.state.lastName} onChange={e => this.setState({ lastName: e.target.value })} />
                    </div>
            
                    <div className="btn" onClick={() => this.props.signUp({...this.state})}>Registrarse</div> 
                </div> 
            </div>
        )
    }
}