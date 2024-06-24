import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navigationbar from "../../component/Navigationbar";
import BannerApp from "../../component/BannerApp";
import KategoriApp from "../../component/KategoriApp";
import TentangApp from "../../component/TentangApp";
import Footer from "../../component/Footer";
import { Form } from "react-bootstrap";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Kategori() {
  const [kategoriData, setKategoriData] = useState([]);
  const [sortOption, setSortOption] = useState("Terbaru");
  const [searchQuery, setSearchQuery] = useState("");
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

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getSortedData = (data) => {
    switch (sortOption) {
      case "Tawaran Terendah":
        return [...data].sort((a, b) => a.budget_lower - b.budget_lower);
      case "Tawaran Tertinggi":
        return [...data].sort((a, b) => b.budget_lower - a.budget_lower);
      case "Rating":
        return [...data].sort((a, b) => b.rating - a.rating);
      case "Terbaru":
      default:
        return data;
    }
  };

  const getFilteredData = (data) => {
    return data.filter(item =>
      item.category === categoryName &&
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const sortedData = getSortedData(kategoriData);
  const filteredKategoriData = getFilteredData(sortedData);

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
                    value={sortOption}
                    onChange={handleSortChange}
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
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Form.Group>
            <KeyboardArrowDownIcon
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
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
      </div>

      <TentangApp />
      <Footer />
    </>
  );
}
