import './style.css'
import { useState } from 'react';
import Gambar from "../IMG/Electrician-amico 1.png";
import passwordIconShow from '../IMG/pass.svg';
import hiddenPassIcon from '../IMG/hide.svg';


const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passIcon, setPassIcon] = useState(passwordIconShow);

  const togglePassword = () => {

    passIcon ===  passwordIconShow ? setPassIcon(hiddenPassIcon) : setPassIcon(passwordIconShow)
    setPasswordShown(!passwordShown);
  };
  return (
    <section id='Login'>
      <div className="container">
        <div className="loginWrap">
          <div className="loginContent">
            <div className="leftContent">
              <h1>Masuk</h1>
              <p>Ayo masuk ke akun kamu yang sudah terdaftar!</p>
              <form action="">
                <h5>Username*</h5>
                <input type="text" name='username' placeholder='Masukan Username' />
                <br />
                <div className="showPassword">
                  <h5>Kata Sandi*</h5>
                  <input type={passwordShown ? 'text' : 'password'} name='password' placeholder='Masukan Kata Sandi'  />
                  <img src={passIcon} width={'5%'} className='btnShow' onClick={togglePassword} />
                </div>
              </form>
              <div className="ingatDanLupa">
                <div className="ingat">
                  <input type="radio" name="Remember" id="" />
                  <span>Ingat Saya</span>
                </div>
                <div className="lupa">
                  <span>Lupa Password</span>
                </div>
              </div>
              <div className="btnAction">
                <button id='Masuk'>Masuk</button>
                <a href="/daftar">
                  <button>Daftar</button>
                </a>
              </div>
            </div>
            <div className="rightContent">
              <img src={Gambar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login