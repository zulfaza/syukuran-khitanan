import CountDown from "@/lib/components/CountDown";
import FormWishes from "@/lib/components/FormWishes";
import ModalTamu from "@/lib/components/ModalTamu";
import Wishes from "@/lib/components/Wishes";
import Image from "next/image";

export default function Home({ params }: { params: { group: string, groupName: string } }) {
  const group = params.group ?? '-';

  return (
    <section className="bg-[#161d28]">
      <ModalTamu group={group} groupName={params.groupName} />
      <header className="flex justify-center items-center w-full h-[469px] lg:h-[calc(100vh-50px)] relative">
        <div className="bg-accent opacity-60 bg-[url(/images/03.jpg)] md:bg-[0_70%] bg-cover bg-center w-full h-full absolute z-0" ></div>
        <div className="bg-[#15264872] opacity-50 w-full h-full absolute left-0 top-0 z-10"></div>
        <section className="container relative h-full z-20 flex justify-center items-center">
          <div className="text-white text-center relative z-10" >
            <h2 className='text-sm mb-10'>Syukuran khitanan</h2>
            <h1 className='font-strawberrycupcakes text-5xl md:text-8xl mb-5'>Muhammad Fahmi Adila</h1>
          </div>
        </section>
      </header>
      <section className="bg-[url(/images/background-surat.png)] bg-blend-multiply bg-accent py-10 px-10 bg-cover">
        <div className="w-full container flex justify-center items-center flex-col">
          <div className="relative py-16">
            <Image className="absolute z-0 top-0" src="/images/bunga-1.webp" width={129} height={181} alt="bunga" />
            <h3 className="font-edensor text-white z-10 relative text-6xl">M F A</h3>
          </div>
          <p className="text-center mb-5 text-white font-light">
            Ya Allah, berikanlah kami pertolongan untuk memperoleh keutamaan-Mu, serta jauhkan kami dari perbuatan hina.
            Ya Allah, terimalah khitan kami, selamatkanlah urusan-urusan kami, sembuhkanlah sakit kami karena khitan ini,
            bayarkanlah utang-utang kami, wujudkanlah cita-cita kami, serta lapangkanlah rezeki kami,
            wahai Zat Yang Maha Memberi. Ya Allah, semoga Engkau memberikan keselamatan kepada kami,
            orang-orang yang menunaikan ibadah haji, orang-orang yang berperang di jalan-Mu, serta kepada para musafir,
            yaitu umat Rasulullah Muhammad Sallallahu Alaihi Wasalam, baik yang ada di darat maupun di laut.
            Sesungguhnya Engkau berkuasa atas apa yang Engkau kehendaki,
            wahai sebaik-baik majikan dan sebaik-baik penolong.
            Maha suci Allah, Tuhan yang memiliki kesucian dan segala sifat rendah yang mereka (orang kafir) sematkan.
            Dan kesejahteraan bagi para utusan Allah. Segala puji hanya milik Allah, Tuhan Semesta Alam.
          </p>
        </div>
      </section>
      <section className="bg-gray-100 bg-[url(/images/background-surat.png)] bg-blend-multiply bg-cover py-20 px-10 relative">
        <div className=" absolute w-full h-full opacity-70 bg-gradient-to-b from-[#FFFFFF94] to-white left-0 top-0 z-0" >
        </div>
        <div className="flex container justify-center items-center flex-col z-10 relative">
          <div>
            <h4 className="text-center mb-5 text-3xl font-medium font-analogue text-[#D7AC64]">
              Our Special Day
            </h4>
            <p className="text-center text-sm text-accent">
              Dengan segala kerendahan hati, dan tidak mengurangi rasa hormat, kami mengundang Bapak/ibu/saudara/i untk menghadiri acara.
              Syukuran khitanan putra kami bernama Muhammad Fahmi Adila
            </p>
          </div>
          <div className="flex gap-10 mt-10 flex-col md:flex-row">
            <div className="flex flex-col justify-center group items-center">
              <div className="mb-5 rounded-md overflow-hidden border-2 group-hover:border-accent">
                <Image src={'/images/01.jpg'} width={180} height={251} alt="cowo" />
              </div>
              <div className="text-center text-sm text-accent">
                <h3 className="text-3xl mb-3 font-analogue">
                  Muhammad Fahmi Adila
                </h3>
                <p>
                  Putra dari Bapak Serma Sudirman (Anggota Unit Intel Kodim 0620/Kab. Cirebon) <br />
                  & Ibu Nurlela, S.Kep., Ners. (Perawat Puskesmas Plumbon).
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="bg-white relative flex flex-col justify-center items-center bg-[url(/images/04.jpg)] bg-cover bg-no-repeat bg-[0_35%]" >
        <div className="container flex justify-center items-center lg:min-h-[44rem] py-20 px-10">
          <div className="bg-[#152648] opacity-50 w-full h-full absolute left-0 top-0 z-0"></div>
          <div className="z-10 relative" >
            <h3 className="text-4xl text-center text-[#D5AF6F] font-strawberrycupcakes mb-5">Save The Date</h3>
            <CountDown />
          </div>
        </div>
      </section>
      <section className="bg-accent bg-[url(/images/texure-1.png)] bg-cover bg-blend-lighten relative py-20 px-10">
        <div className="z-10 relative container">
          <div className="flex flex-col md:flex-row items-stretch gap-6 mb-6">
            <div className="px-5 py-10 rounded-2xl w-full bg-white bg-cover flex flex-col items-center justify-center">
              <h4 className="text-center font-analogue text-[#D7AC64] text-3xl mb-5">Syukuran khitanan</h4>
              <h5 className="text-center mb-3 italic text-xs text-accent">SELASA</h5>
              <h3 className="text-center font-analogue text-[#D7AC64] text-5xl mb-5">25</h3>
              <h5 className="text-center mb-3 italic text-xs text-accent">JUNI 2024</h5>
              <p className="italic text-center text-sm text-accent">09.30 WIB s/d selesai</p>
            </div>
            <div className="px-5 py-10 rounded-2xl w-full bg-white text-center bg-cover">
              <h4 className="font-analogue text-[#D7AC64] text-3xl mb-5">Lokasi</h4>
              <h3 className="font-sans font-medium text-accent text-4xl mb-5">Rumah Hajat</h3>
              <h5 className="mb-5 italic text-accent">Perumahan Villa Plumbon Blok D 20 RT 22 RW 01 Desa Kasugengan Lor Kec Depok Kab Cirebon.</h5>
            </div>
          </div>
          <div className="px-5 py-10 rounded-2xl bg-white bg-cover">
            <h4 className="text-center font-analogue text-[#D7AC64] text-3xl mb-5">Turut Mengundang</h4>
            <ol className="italic text-center text-sm text-accent mb-5">
              <li className="mb-2">Letkol INF Aditya Wira Respati, S.E (Dandim 0620/Kab. Cirebon).</li>
              <li className="mb-2">AKBP (P) H. Mahyudin, S.H.,M.Si (Ketua IKABASS Ciayumajakuning)</li>
              <li className="mb-2">Letu Inf Edi Wahyono (Danunit Intel Kodim 0620/Kab. Cirebon)</li>
              <li className="mb-2">dr. Atih Andriyantie Fauzi (Kepala  Puskesmas Plumbon)</li>
              <li className="mb-2">Bpk. Tedi Kuswahadi (Kuwu Desa Kasugengan Lor)</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="bg-white bg-cover py-20 px-10 relative">
        <FormWishes />
        <Wishes />
      </section>
    </section>
  );
}

