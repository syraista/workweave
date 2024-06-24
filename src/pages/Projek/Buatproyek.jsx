import React, { useState, useRef } from "react";
import axios from "axios"; // Import Axios
import Cookies from 'js-cookie';
import Navigationbar from "../../component/Navigationbar";
import Footer from "../../component/Footer";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/buatprojek.css";
import Buttonelement from "../../component/element/Buttonelement";

export default function Buatproyek() {
  const [activeDisplay, setActiveDisplay] = useState("form");
  const [activePayment, setActivePayment] = useState("cf1");
  const [formData, setFormData] = useState({
    projectTitle: "",
    projectDescription: "",
    category: "",
    minBudget: "",
    maxBudget: "",
    deadline: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function formatToISO(dateString) {
    const date = new Date(dateString);
    date.setUTCHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to zero
    const isoString = date.toISOString();
    return isoString.slice(0, 10) + "T00:00:00Z";
  }

  const handleNextClick = async () => {
    if (formData.projectTitle.trim() === "") {
      alert("Judul proyek tidak boleh kosong");
      return;
    }
    console.log(formData);
    axios
      .post("http://localhost:3000/api/client/projects", {
        client_id: Cookies.get('id'),
        title: formData.projectTitle,
        description: formData.projectDescription,
        status: "open",
        document_url: "http://example.com/document.pdf",
        category: formData.category,
        budget_lower: formData.minBudget,
        budget_upper: formData.maxBudget,
        deadline: formatToISO(formData.deadline),
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setActiveDisplay("confirm");
    document
      .getElementById("scrolx2131")
      .scrollIntoView({ behavior: "smooth" });
  };

  const handleBayarClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => {
      setActivePayment("cf1");
    }, 500);
  };

  const handleCloseModal2 = () => {
    setShowModal2(false);
  };

  const handleCloseModalconfirm = () => {
    setShowModal(false);
    setShowModal2(true);
    setTimeout(() => {
      setActivePayment("cf1");
    }, 500);
  };

  return (
    <>
      <Navigationbar log={1} navn={2} />
      <section className="container my-5 btpryksec">
        <div className="btprjbanner">
          <div className="d-flex justify-content-between flex-column bannerbtprjktitle">
            <div>
              <h1>
                Buat &nbsp;<span>Proyek</span>
              </h1>
              <p>
                Membuat sebuah project berarti Anda sedang mencari dan bersedia
                membayar pekerja atau freelancer untuk menyelesaikan project
                yang Anda miliki.
              </p>
            </div>
            <Buttonelement
              content={"Selengkapnya"}
              arrow={true}
              fs={"20px"}
              br={"10px"}
              fw={"bold"}
              width={"237px"}
              height={"55px"}
            />
          </div>
          <img src="/assets/Buatproyek.png" />
        </div>
        <hr id="scrolx2131" />

        <div className={`${activeDisplay === "form" ? "d-block" : "d-none"}`}>
          <div className="btprjkfrmheader">
            <h4>Ayo Kita Buat</h4>
            <div className="questionboxbtprjk">
              <p>Apakah kamu seorang freelancer?</p>
              <a href="/home?lookup=kategoriofwork">Menjadi Pekerja</a>
            </div>
          </div>
          <Form className="btprjkfrm">
            <Form.Group controlId="formProjectTitle">
              <Form.Label className="btprjfrmlabel">Judul Proyek</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan judul projek"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formProjectDescription" className="mt-3">
              <Form.Label className="btprjfrmlabel">
                Deskripsi Proyek
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Masukkan deskripsi projek"
                name="projectDescription"
                value={formData.projectDescription}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="formFileUpload" className="mt-3">
              <Form.Label className="btprjfrmlabel">Unggah File</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Form.Group controlId="formProjectCategory" className="mt-3">
              <Form.Label className="btprjfrmlabel">Kategori</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="">Pilih kategori</option>
                <option value="aplikasi">Aplikasi</option>
                <option value="arsitektur">Arsitektur</option>
                <option value="desain-grafis">Desain Grafis</option>
                <option value="desain-produk">Desain Produk</option>
                <option value="desain-interior">Desain Interior</option>
                <option value="fotografi">Fotografi</option>
                <option value="video-musik">Video Music</option>
                <option value="keterampilan">Keterampilan</option>
                <option value="kuliner">Kuliner</option>
                <option value="mode-busana">Mode Busana</option>
                <option value="penerbitan">Penerbitan</option>
                <option value="film-animasi">Film & Animasi</option>
                <option value="periklanan">Periklanan</option>
                <option value="permainan">Permainan</option>
                <option value="tv-radio">TV & Radio</option>
                <option value="seni-rupa">Seni Rupa</option>
                <option value="seni-pertunjukan">Seni Pertunjukan</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formBudgetRange" className="mt-3">
              <Form.Label className="btprjfrmlabel">
                Kisaran Anggaran
              </Form.Label>
              <div className="d-flex justify-content-start align-items-center gap-4">
                <Form.Control
                  type="number"
                  placeholder="Min"
                  name="minBudget"
                  value={formData.minBudget}
                  onChange={handleInputChange}
                />
                -
                <Form.Control
                  type="number"
                  placeholder="Max"
                  name="maxBudget"
                  value={formData.maxBudget}
                  onChange={handleInputChange}
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formDeadline" className="mt-3">
              <Form.Label className="btprjfrmlabel">Tenggat Waktu</Form.Label>
              <Form.Control
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
          <hr />
          <div className="d-flex justify-content-between mt-4 align-items-center">
            <Link
              className="d-flex justify-content-center align-items-center"
              to="/proyek"
              style={{ textDecoration: "none" }}
            >
              <button className="backprjbtn">
                <span className="material-symbols-outlined">arrow_back</span>
                Kembali
              </button>
            </Link>
            <Buttonelement
              onClick={handleNextClick}
              content={"Selanjutnya"}
              arrow={true}
              height={"55px"}
              width={"210px"}
              fs={"20px"}
              fw={"Bold"}
            />
          </div>
        </div>

        <div
          className={`${activeDisplay === "confirm" ? "d-block" : "d-none"}`}
        >
          <h1 className="cnfmtitle">
            Satu Langkah Lagi untuk <span>Unggah Proyekmu</span>
          </h1>
          <div className="btprjkconfirmcont">
            <div className="btprjkconfirm">
              <h4 className="text-center">
                Work <span>Weave</span>
              </h4>
              <hr />
              <div className="d-flex w-100 justify-content-between">
                <p className="cnfmfieldname">Judul Proyek</p>
                <p className="cnfmfieldvalue">{formData.projectTitle}</p>
              </div>
              <div className="d-flex w-100 justify-content-between my-4">
                <p className="cnfmfieldname">Biaya Administrasi</p>
                <p className="cnfmfieldvalue">Rp. 15.000</p>
              </div>
              <hr />
              <div className="d-flex w-100 justify-content-between">
                <p className="cnfmfieldname">Total Bayar</p>
                <p className="cnfmfieldvalue">Rp. 15.000</p>
              </div>
            </div>
            <div className="d-flex w-100 justify-content-between cnfrmbtncont">
              <button
                onClick={() => setActiveDisplay("form")}
                className="backprjbtn"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Kembali
              </button>
              <Buttonelement
                onClick={handleCloseModalconfirm}
                content={"Selesaikan Pembayaran"}
                width={"145px"}
                fs={"18px"}
                fw={"bold"}
                // content={"Bayar"}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        dialogClassName="custom-modal"
      >
        <Modal.Header className="custom-modal-header">
          <Modal.Title>Work Weave</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column h-100 justify-content-between paymentcnfrmbdy">
          <div className="paymentcnfrm">
            <div className="paymentcnfrmtitle">
              <p>Total</p>
              <h2>Rp. 15.000</h2>
              <p>ID #842526363</p>
            </div>
            <p>
              Selesaikan Dalam{" "}
              <span style={{ color: "#003bad" }}>23:59:59</span>
            </p>
          </div>

          <div className={`${activePayment === "cf1" ? "d-block" : "d-none"}`}>
            <Form.Group
              className="paymentmethodscont"
              controlId="formPaymentMethod"
            >
              <Form.Label className="pymthdtitle">Metode Pembayaran</Form.Label>
              <div className="mb-3">
                <h6>Kartu Kredit</h6>
                <Form.Check
                  type="radio"
                  name="paymentMethod"
                  id="KartuKredit"
                  value="Kartu Kredit"
                  label={
                    <div className="d-flex align-items-center">
                      <img
                        src="assets/payment-icon/kredit.png"
                        style={{ width: "30px", marginRight: "10px" }}
                      />
                      Kartu Kredit
                    </div>
                  }
                />
              </div>
              <div>
                <h6>Virtual Account</h6>
                {[
                  {
                    value: "BCA Virtual Account",
                    label: "BCA Virtual Account",
                    imgSrc: "assets/payment-icon/bca.png",
                  },
                  {
                    value: "Mandiri Virtual Account",
                    label: "Mandiri Virtual Account",
                    imgSrc: "assets/payment-icon/mandiri.png",
                  },
                  {
                    value: "BRIVA",
                    label: "BRIVA",
                    imgSrc: "assets/payment-icon/briva.png",
                  },
                  {
                    value: "BNI Virtual Account",
                    label: "BNI Virtual Account",
                    imgSrc: "assets/payment-icon/bni.png",
                  },
                  {
                    value: "BTN Virtual Account",
                    label: "BTN Virtual Account",
                    imgSrc: "assets/payment-icon/btn.png",
                  },
                  {
                    value: "DANAMON Virtual Account",
                    label: "DANAMON Virtual Account",
                    imgSrc: "assets/payment-icon/danamon.png",
                  },
                  {
                    value: "CIMB Virtual Account",
                    label: "CIMB Virtual Account",
                    imgSrc: "assets/payment-icon/cimb.png",
                  },
                ].map((method) => (
                  <Form.Check
                    key={method.value}
                    type="radio"
                    name="paymentMethod"
                    id={method.value}
                    value={method.value}
                    label={
                      <div className="d-flex align-items-center">
                        <img
                          src={method.imgSrc}
                          style={{ width: "30px", marginRight: "10px" }}
                        />
                        {method.label}
                      </div>
                    }
                  />
                ))}
              </div>
            </Form.Group>
            <div className="d-flex w-100 justify-content-between align-items-center paymentcnfrmbtncont">
              <button className="paymentcancelbtn" onClick={handleCloseModal}>
                Batal
              </button>
              <Buttonelement
                onClick={() => setActivePayment("cf2")}
                classname="paycnfrmbtn"
                width={"100px"}
                height={"45px"}
                content={"Bayar"}
              />
            </div>
          </div>

          <div
            className={`${
              activePayment === "cf2" ? "d-flex" : "d-none"
            } confirm2payment h-100 flex-column justify-content-between`}
          >
            <div className="d-flex flex-column gap-4">
              <div className="w-100 d-flex justify-content-between">
                <p style={{ fontSize: "24px", fontWeight: "bold" }}>Bank BCA</p>
                <img src="assets/payment-icon/bca.png" />
              </div>
              <p>
                Selesaikan pembayaran dari BCA ke nomor virtual account di bawah
                ini.
              </p>
              <div className="w-100 d-flex justify-content-between align-items-end">
                <div>
                  <p style={{ color: "#7e7e7e" }}>Nomor virtual account : </p>
                  <p style={{ fontWeight: "bold", marginTop: "5px" }}>
                    86009853858
                  </p>
                </div>
                <p style={{ color: "#003bad", fontWeight: "bold" }}>Copy</p>
              </div>
            </div>
            <div className="w-100 d-flex justify-content-center">
              <Buttonelement
                classname="paycnfrmbtn"
                width={"300px"}
                height={"45px"}
                onClick={handleCloseModalconfirm}
                content={"Selesaikan Pembayaran"}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showModal2}
        onHide={handleCloseModal2}
        centered
        dialogClassName="custom-modal2"
      >
        <Modal.Body className="d-flex flex-column justify-content-between p-5">
          <div className="d-flex flex-column justify-content-between align-items-center gap-4 p-4">
            <img style={{ width: "50px" }} src="../assets/done.png" />
            <p style={{ fontSize: "20px" }}>Pembayaran Berhasil</p>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Rp 15.000</p>
            <p style={{ fontSize: "20px", color: "#7e7e7e" }}>ID #842526363</p>
          </div>
          <Link
            style={{ textDecoration: "none" }}
            to={"/projects"}
            className="w-100 d-flex justify-content-center"
          >
            <Buttonelement
              classname="paycnfrmbtn"
              width={"300px"}
              height={"45px"}
              onClick={handleCloseModal2}
              content={"Selesai"}
            />
          </Link>
        </Modal.Body>
      </Modal>
    </>
  );
}
