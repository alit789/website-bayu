import './style.css'
import { useState } from 'react';
import passwordIconShow from '../IMG/pass.svg';
import hiddenPassIcon from '../IMG/hide.svg';

const Daftar = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [passIcon, setPassIcon] = useState(passwordIconShow);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    passIcon === passwordIconShow ? setPassIcon(hiddenPassIcon) : setPassIcon(passwordIconShow);
    setPasswordShown(!passwordShown);
  };
  return (
    <section id='Daftar'>
      <div className="container">
        <div className="daftarWrap">
          <div className="daftarContent">
            <h1>Daftar</h1>
            <p>Ayo daftarkan diri kamu ke website resmi PLN APD Bali!</p>

            <form action="">
              <div className="contentForm">
                <div className="left">
                  {/* form perusahaan */}
                  <h5>Perusahaan</h5>
                  <select name="Perusahaan" id="perusahaan">
                    <option value="">Pilih Perusahaan</option>
                    <option value="">Alit Group</option>
                  </select>
                  <br />
                  {/* form bagian */}
                  <h5>Bagian</h5>
                  <select name="Bagian" id="bagian">
                    <option value="">Pilih Bagian</option>
                    <option value="">Alit Group</option>
                  </select>
                  <br />
                  {/* form nama */}
                  <h5>Nama</h5>
                  <input type="text" name='Nama' placeholder='Masukan Nama' />
                  <br />
                  {/* form userid */}
                  <h5>User ID</h5>
                  <input type="text" name='User ID' placeholder='Masukan User ID' />
                  <br />
                  {/* form NIP */}
                  <h5>NIP</h5>
                  <input type="text" name='Nip' placeholder='Masukan NIP' />
                </div>

                <div className="right">
                  {/* form no telp */}
                  <h5>No Telepon</h5>
                  <input type="text" name='NoTelp' placeholder='Masukan Nomor Telepon' />
                  <br />
                  {/* form Alamat Email PLN */}
                  <h5>Alamat Email PLN</h5>
                  <input type="text" name='EmailPLN' placeholder='Masukan Alamat Email PLN' />
                  <br />
                  {/* form Kata Sandi */}
                  <div className="showPasswordDaftar">
                    <h5>Kata Sandi*</h5>
                    <input type={passwordShown ? 'text' : 'password'} name='password' placeholder='Masukan Kata Sandi' />
                    <img src={passwordIconShow} width={'5%'} className='btnShow' onClick={togglePassword} />
                  </div>
                  {/* form konfirmasi Kata Sandi */}
                  <div className="showPasswordDaftar">
                    <h5>Kata Sandi*</h5>
                    <input type={passwordShown ? 'text' : 'password'} name='confirPassword' placeholder='Masukan Kata Sandi' />
                    <img src={passwordIconShow} width={'5%'} className='btnShow' onClick={togglePassword} />
                  </div>
                  {/* form Gender */}
                  <h5>Perusahaan</h5>
                  <select name="Kelamin" id="kelamin">
                    <option value="">Pilih Jenis Kelamin</option>
                    <option value="">Alit Group</option>
                  </select>
                </div>
              </div>
              <div className="daftarBtn">
                <button>Daftar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Daftar