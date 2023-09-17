import './style.css'

const Daftar = () => {
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
                  <select name="Perusahaan" id="">
                    <option value="">Pilih Perusahaan</option>
                    <option value="">Alit Group</option>
                  </select>
                  <br />
                  {/* form bagian */}
                  <h5>Bagian</h5>
                  <select name="Bagian" id="">
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
                  <h5>Kata Sandi</h5>
                  <input type="password" name='KataSandi' placeholder='Masukan Kata Sandi' />
                  {/* form konfirmasi Kata Sandi */}
                  <h5>Konfirmasi Kata Sandi</h5>
                  <input type="password" name='konfirmasiKataSandi' placeholder='Masukan Kata Sandi' />
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