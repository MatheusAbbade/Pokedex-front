import React, { useEffect, useState } from 'react';
import HeaderLogin from './component/header-login'

import loginServices from '../../services/login-services';
import { useHistory } from 'react-router-dom';

export default function LoginPage() {
   
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    let history = useHistory();
    useEffect(() => {
        require('../../assets/styles/pokedex.css')
        require('../../assets/styles/styles.css')
    }, []);

    const login = async (e) => {
        e.preventDefault();
        const result = await loginServices.login(usuario, senha);
        if(result)
        {
            localStorage.setItem("userInfo", JSON.stringify(result));
            history.push('/pokemons')
            
        }else{
            window.alert('Usuário ou Senha inválidos')
        }
    }

    return (<>
        <HeaderLogin></HeaderLogin>
        <main>
            <form class="form" onSubmit={(e)=>login(e)}>
                <section class="inputs-container">
                    <h2>Usuário</h2>
                    <input type="text" value={usuario} onChange={(e)=>{setUsuario(e.target.value)}} />

                    <div class="password-container">
                        <h2>Senha</h2>
                        <input type="password" value={senha} class="field-password" id="field-password" placeholder="**********" onChange={(e)=>{setSenha(e.target.value)}} />
                    </div>
                </section>

                <section class="password-infos">
                    <a href="#">Esqueceu sua senha?</a>
                </section>
                <button id="btn-login">Login</button>
            </form>
        </main>
    </>);
}