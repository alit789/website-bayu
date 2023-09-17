import './style.css'
import Gambar from "../IMG/Electrician-amico 1.png";

const Login = () => {
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
                <h5>Kata Sandi*</h5>
                <input type="password" name='password' placeholder='Masukan Kata Sandi' />
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