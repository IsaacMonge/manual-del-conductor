import React from 'react';
import Signup from './Signup';
import Signin from './Signin';
import axios from 'axios';
import store from '../../store/index';
import Toast from '../Toast/Toast';
import './Auth.css';

export default class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: 'signin',
            showToast: false
        }
    }

    signIn = (email, password) => {
        axios.post('/api/users/login', {email, password}).then(res => {
            if (res.data.success) {
                store.dispatch({
                    type: 'login',
                    _id: res.data.user._id,
                    user: res.data.user,
                    token: res.data.token
                });
                this.props.history.push('/dashboard');
            } else {
                this.setState({
                    showToast: true
                });
                setTimeout(() => {
                    this.setState({showToast: false})
                }, 3000);
            }
        }).catch(er => {
            this.setState({
                showToast: true
            });
            setTimeout(() => {
                this.setState({showToast: false})
            }, 3000);
        })
    }

    signUp = ({firstName, lastName, email, password}) => {
        axios.post('/api/users/register', {firstName, lastName, email, password}).then(res => {
            if (res.data.success) {
                this.setState({tab: 'signin'});
            }
        }).catch(er => {
            console.log(er);
        })
    }

    changeTab = () => {
        this.setState({
            tab: this.state.tab === 'signup' ? 'signin' : 'signup'
        });
    }

    render() {
        let page = this.state.tab === 'signin' ? <Signin signIn={this.signIn} /> : <Signup signUp={this.signUp} />
        return (
            <div className="auth-wrapper">
                <Toast model={this.state.showToast} message="Incorrect login" backgroundColor="#FF4539" />
                <div className="left">
                    {/* <img src="https://www.freeiconspng.com/thumbs/driver-icon/driver-icon-15.png"/> */}
                </div>

                <div className="right">
                    <div className="header">Nombre App</div>
                    <div className="sub-header">Bienvenido a "Nombre App"</div>
                    {page}
                    <div className="new" onClick={this.changeTab}>{this.state.tab === 'signin' ? 'Eres nuevo en "Nombre App"? Registrate aquí' : 'Ya tienes una cuenta con nosotros? Inicia Sesión'}</div>
                </div>
            </div>
        )
    }
}