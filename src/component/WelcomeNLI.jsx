import '../css/minorelNLI.css'
export default function WelcomeNLI() {
    return (
        <section className='wlsect'>
            <div className='wltoptext'>
                <h5>SELAMAT DATANG DI WORK WEAVE</h5>
                <h4>Apa Yang Kita Lakukan ?</h4>
                <p>Ketika Anda mengakses situs web Work Weave, Anda dapat mencari proyek yang menarik<br /> bagi Anda, melihat detailnya untuk memahami lebih lanjut, mengajukan diri Anda untuk<br /> bergabung jika tertarik, berinteraksi dengan anggota tim yang ada, bekerja pada proyek<br /> sesuai peran yang ditetapkan, dan memberikan umpan balik setelah proyek selesai.</p>
            </div>
            <div className='wlcontainer'>
            <div className='wlcont'>
                <div className='wlleft'>
                    <div>
                        <h1>Menjadi<br /><span>Freelancer</span></h1>
                        <h4>Apakah Anda bosan dengan rutinitas kerja yang monoton<br /> dan ingin menjelajahi potensi kreatif Anda dengan lebih<br /> bebas?</h4>
                        <p>Bergabunglah dalam dunia freelancing, di mana Anda dapat mengatur<br /> waktu Anda sendiri, mengejar proyek-proyek yang menarik, dan<br /> memperluas jangkauan profesional Anda tanpa batasan. Mari temukan<br /> kebebasan dan fleksibilitas yang Anda cari dalam karier freelancing.</p>
                    </div>
                    <a href='#'>Selengkapnya</a>
                </div>
                <img src='assets/wel-1.png' />
            </div>
            <div className='wlcont'>
                <img src='assets/wel-2.png' />
                <div className='wlright'>
                    <div>
                        <h1>Menjadi<br /><span>Pemilik Project</span></h1>
                        <h4>Apakah Anda memiliki visi yang besar<br /> dan hasrat untuk mewujudkannya?</h4>
                        <p>Menjadi pemilik proyek adalah tentang mengambil<br/> kendali atas ide-ide Anda, memimpin tim, dan<br /> mewujudkan mimpi Anda menjadi kenyataan. Mari<br /> bergabung dalam perjalanan menginspirasi ini dan<br /> menjadi penggerak utama di dunia proyekan.</p>
                    </div>
                    <a href='#'>Selengkapnya</a>
                </div>
            </div>
            </div>
        </section>)
}