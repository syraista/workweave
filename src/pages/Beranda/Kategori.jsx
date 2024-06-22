import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navigationbar from "../../component/Navigationbar";
import BannerApp from "../../component/BannerApp";
import KategoriApp from "../../component/KategoriApp";
import TentangApp from "../../component/TentangApp";
import Footer from "../../component/Footer";
import Pagination from "react-bootstrap/Pagination";
import { Form } from "react-bootstrap";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Buttonelement from "../../component/element/Buttonelement";

export default function Kategori() {
  const [kategoriData, setKategoriData] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/client/projects');
        const projects = response.data.data.projects; // Accessing projects array
        setKategoriData(projects);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredKategoriData = kategoriData.filter(
    (item) => item.category === categoryName // Filtering based on the categoryName parameter
  );

  return (
    <>
      <Navigationbar log={1} navn={1} />

      <BannerApp category={categoryName} />

      <div
        style={{ backgroundColor: "#F4FAFC", padding: "20px 100px" }}
        className="d-flex flex-column w-100"
      >
        <div
          style={{ padding: "20px 50px 50px 26px" }}
          className="d-flex justify-content-between"
        >
          <div className="d-flex gap-3">
            {/* <div style={{ position: "relative" }}>
              <Form.Group controlId="selectAnggaran">
                <Form.Control
                  style={{
                    height: "51px",
                    width: "180px",
                    border: "1px solid #7e7e7e",
                    paddingLeft: "30px",
                    cursor: "pointer",
                  }}
                  as="select"
                >
                  <option>Pilih Anggaran</option>
                  <option>Anggaran 1</option>
                  <option>Anggaran 2</option>
                  <option>Anggaran 3</option>
                </Form.Control>
              </Form.Group>
              <span
                className="material-symbols-outlined select-icon"
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                keyboard_arrow_down
              </span>
            </div> */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "10px" }}>Urutkan</span>
              <div style={{ position: "relative" }}>
                <Form.Group controlId="selectFilterProject">
                  <Form.Control
                    style={{
                      height: "51px",
                      width: "200px",
                      border: "1px solid #7e7e7e",
                      paddingLeft: "30px",
                      cursor: "pointer",
                    }}
                    as="select"
                  >
                    <option>Terbaru</option>
                    <option>Tawaran Terendah</option>
                    <option>Tawaran Tertinggi</option>
                    <option>Rating</option>
                  </Form.Control>
                </Form.Group>
                <KeyboardArrowDownIcon
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <Form.Group controlId="searchProject">
              <Form.Control
                style={{
                  height: "51px",
                  width: "233px",
                  border: "1px solid #7e7e7e",
                  paddingLeft: "50px",
                }}
                type="text"
                placeholder="Cari project"
              />
            </Form.Group>
            <span
              className="material-symbols-outlined search-icon"
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              search
            </span>
          </div>
        </div>
        <div className="row row-cols-3 w-100">
          {filteredKategoriData.length > 0 ? (
            filteredKategoriData.map((item) => (
              <div key={item.id} className="cols d-flex justify-content-center">
                <KategoriApp
                  title={item.title}
                  img={item.category}
                  desc={item.description}
                  price={item.budget_lower}
                  kat={item.category}
                  link={`${categoryName}/${item.id}`}
                />
              </div>
            ))
          ) : (
            <div className="w-100 text-center">
              <p>No categories available.</p>
            </div>
          )}
        </div>
        {/* <div className="d-flex w-100 justify-content-center">
          <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next />
          </Pagination>
        </div> */}
        {/* <div className="d-flex flex-column justify-content-center align-items-end w-100 mb-5">
          <Buttonelement
            arrow={true}
            content={"Selanjutnya"}
            br={"5px"}
            width={"210px"}
            height={"55px"}
            fs={"20px"}
            fw={"Bold"}
          />
        </div> */}
      </div>

      <TentangApp />

      <Footer />
    </>
  );
}
