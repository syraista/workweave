import React, { useState, useCallback, useRef, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Navigationbar from "../../component/Navigationbar";
import Footer from "../../component/Footer";
import "../../css/project.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Proyekcard from "../../component/element/Proyekcard";
import Modal from "react-bootstrap/Modal";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressBar from "react-bootstrap/ProgressBar";
import "react-circular-progressbar/dist/styles.css";
import Proyekusercard from "../../component/element/Proyekusercard";
import Approvalcard from "../../component/element/Approvalcard";

function getColor(progress) {
  if (progress <= 25) {
    return "#fa0202";
  }
  if (progress <= 50) {
    return "#f6de06";
  }
  if (progress <= 75) {
    return "#c4c801";
  }
  if (progress <= 90) {
    return "#01c814";
  }
  if (progress <= 100) {
    return "#02b1bc";
  }
}

export default function Proyek() {
  const id = Cookies.get("id");
  const { pr1, pr2, pr3, pr4 } = { pr1: 50, pr2: 50, pr3: 50, pr4: 50 };
  const allProgress  = (pr1+pr2+pr3+pr4)/4;
  const [clientOpenProjects, setClientOpenProjects] = useState([]);
  const [clientInProgressProjects, setClientInProgressProjects] = useState([]);
  const [clientCompletedProjects, setClientCompletedProjects] = useState([]);

  const [workerOpenProjects, setWorkerOpenProjects] = useState([]);
  const [workerInProgressProjects, setWorkerInProgressProjects] = useState([]);
  const [workerCompletedProjects, setWorkerCompletedProjects] = useState([]);

  useEffect(() => {
    const fetchDataClient = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/client/projects/client/${id}`
        );
        const projects = response.data.data.projects; // Accessing projects array
        // setProjectsData(projects);
        // console.log(projects);

        // Filter projects based on their status
        const open = projects.filter((project) => project.status === "open");
        const inProgress = projects.filter(
          (project) => project.status === "in_progress"
        );
        const completed = projects.filter(
          (project) => project.status === "completed"
        );

        setClientOpenProjects(open);
        setClientInProgressProjects(inProgress);
        setClientCompletedProjects(completed);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchDataWorker = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/user/applications/${id}`
        );
        const applications = response.data.data.application; // Accessing applications array

        // console.log(response);
        // Filter applications based on their status

        // console.log(applications);
        const pendingApplications = applications.filter(
          (application) => application.status === "pending"
        );
        const inProgressApplications = applications.filter(
          (application) => application.status === "accepted"
        );
        const completedApplications = applications.filter(
          (application) => application.status === "accepted"
        );
        // console.log(pendingApplications)

        const fetchProjects = async (application) => {
          try {
            const response = await application.map((application) =>
              axios.get(
                `http://localhost:3000/api/worker/projects/${application.project_id}`
              )
            );
            const projectResponses = await Promise.all(response);
            const projectData = projectResponses.map(
              (response) => response.data.data.project
            );
            return projectData;
          } catch (error) {
            console.error("Error fetching project data:", error);
          }
        };

        const pendingApp = await fetchProjects(pendingApplications);
        const inProgressApp = await fetchProjects(inProgressApplications);
        const completedApp = await fetchProjects(completedApplications);
        // console.log(pendingApp);

        const open = pendingApp.filter((project) => project.status === "open");
        const inProgress = inProgressApp.filter(
          (project) => project.status === "in_progress"
        );
        const completed = completedApp.filter(
          (project) => project.status === "completed"
        );

        setWorkerOpenProjects(open);
        setWorkerInProgressProjects(inProgress);
        setWorkerCompletedProjects(completed);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataWorker();
    fetchDataClient();
  }, []);

  const [activeButton, setActiveButton] = useState(Cookies.get("role"));
  const [activeHeadButton, setActiveHeadButton] = useState("berjalan");

  const [ projectSelected, setProjectSelected ] = useState([]);
  const [ applicationSelected, setApplicationSelected ] = useState([]);
  const [ workerSelected, setWorkerSelected ] = useState([]);
  const [showModalmain, setShowModalmain] = useState(false);
  const handleCloseModalmain = () => {
    setShowModalmain(false);
    // setProjectIdSelected([]);
  };
  const fetchWorkerData = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/client/projects/${id}`
      );
      const projectData = response.data.data.project;
      setProjectSelected(projectData);
      // console.log(projectSelected); // This will log the correct project data

      const applicationsResponse = await axios.get(
        `http://localhost:3000/api/client/projects/${projectData.id}/applications`
      );
      const applicationsData = applicationsResponse.data.data.applications;
      // console.log(applicationsData);
      // Filter applications to only include those with status "accepted"
      const acceptedApplications = applicationsData.filter(app => app.status === 'accepted');
      // console.log(acceptedApplications[0])
      setApplicationSelected(acceptedApplications[0]);
      // console.log(applicationSelected);

      const workerResponse = await axios.get(
        `http://localhost:3000/api/user/worker/${acceptedApplications[0].worker_id}`
      );
      const workerData = workerResponse.data.data;
      setWorkerSelected(workerData)
      console.log(workerData);
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  }
  const handleOpenModalmain = async (id) => {
    setShowModalmain(true);
    fetchWorkerData(id)
  };
  
  // const handleOpenModalmain = (id) => {
  //   // console.log(id)
  //   setShowModalmain(true);
  //   const fetchProjects = async () => {
  //     try {
  //       const response = await axios.get(
  //           `http://localhost:3000/api/client/projects/${id}`
  //         );
  //       const projectData = response.data.data.project;
  //       // console.log(projectData);
  //       return projectData;
  //     } catch (error) {
  //       console.error("Error fetching project data:", error);
  //     }
  //   };
  //   const project = await fetchProjects()
  //   console.log(project);
  //   setProjectIdSelected(project);
  //   console.log(projectIdSelected);
  // };

  const [showModalprogress, setShowModalprogress] = useState(false);
  const handleCloseModalprogress = () => {
    setShowModalprogress(false);
  };
  const handleOpenModalprogress = (id) => {
    console.log(id);
    setShowModalprogress(true);
    fetchWorkerData(id)
    // setTimeout(() => {
    //   scrollToBottom();
    // }, 500);
  };

  // application
  const [applicationData, setApplicationData] = useState([]);
  const [projectId, setProjectId] = useState("");
  const [showModalapproval, setShowModalapproval] = useState(false);
  const handleCloseModalapproval = () => {
    setShowModalapproval(false);
    setApplicationData([]);
  };
  const handleOpenModalapproval = (id) => {
    setProjectId(id);
    // console.log(id);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/user/worker-data/${id}`
        );
        const applications = response.data.data.applications; // Accessing applications array
        const pendingApplications = applications.filter(
          (application) => application.application_status === "pending"
        );
        // console.log(pendingApplications);
        setApplicationData(pendingApplications);
        // console.log("sini");
        // console.log(applications);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    setShowModalapproval(true);
  };
  // console.log(applicationData);

  const [showModaladdpart, setShowModaladdpart] = useState(false);
  const [editPart, setEditPart] = useState(false);

  const handleEditPart = () => {
    setEditPart(true);
  };
  const handleCloseEditPart = () => {
    setEditPart(false);
  };

  const handleCloseModaladdpart = () => {
    setShowModaladdpart(false);
  };
  const handleOpenModaladdpart = () => {
    setShowModaladdpart(true);
  };

  const [apName, setApName] = useState("");
  const [apType, setApType] = useState("");
  const [applicationId, setApplicationId] = useState("");
  const [showModalapprovalconfirm, setShowModalapprovalconfirm] =
    useState(false);

  const handleCloseModalapprovalconfirm = () => {
    setShowModalapprovalconfirm(false);
    setTimeout(() => {
      setApType("");
    }, 500);
  };

  const handleOpenModalapprovalconfirmAccept = (id) => {
    console.log(id);
    setApplicationId(id);
    setApType("accept");
    setShowModalapprovalconfirm(true);
  };

  const handleOpenModalapprovalconfirmDecline = (id) => {
    console.log(id);
    setApplicationId(id);
    setApType("decline");
    setShowModalapprovalconfirm(true);
  };

  const handleOpenModalapprovalconfirmworkerAccept = () => {
    setApType("acceptwork");
    setShowModalapprovalconfirm(true);
  };

  const [rsType, setRsType] = useState("");
  const [showModalapprovalresult, setShowModalapprovalresult] = useState(false);

  const handleCloseModalapprovalresult = () => {
    setShowModalapprovalresult(false);
    setTimeout(() => {
      setRsType("");
    }, 500);
  };

  const handleOpenModalapprovalresultaccept = () => {
    // console.log('terima');
    // console.log(projectId)
    // console.log(applicationId);
    const fetchData = async () => {
      try {
        const request = {
          status: "accepted",
        };
        const response = await axios.put(
          `http://localhost:3000/api/client/projects/${projectId}/applications/${applicationId}`,
          request
        );
        // console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    setShowModalapprovalconfirm(false);
    setRsType("accept");
    setShowModalapprovalresult(true);
    setShowModalapproval(false);
    setTimeout(() => {
      setApType("");
    }, 500);
  };
  const handleOpenModalapprovalresultdecline = () => {
    console.log("tidak terima");
    const fetchData = async () => {
      try {
        const request = {
          status: "rejected",
        };
        const response = await axios.put(
          `http://localhost:3000/api/client/projects/${projectId}/applications/${applicationId}`,
          request
        );
        // console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    setShowModalapprovalconfirm(false);
    setRsType("decline");
    setShowModalapprovalresult(true);
    setShowModalapproval(false);
    setTimeout(() => {
      setApType("");
    }, 500);
  };
  const handleOpenModalapprovalresultworkaccept = () => {
    setShowModalapprovalconfirm(false);
    setRsType("acceptwork");
    setShowModalapprovalresult(true);
    setTimeout(() => {
      setApType("");
    }, 500);
  };
  const handleOpenModalapprovalresultworkdecline = () => {
    setShowModalapprovalconfirm(false);
    setRsType("declinework");
    setShowModalapprovalresult(true);
    setTimeout(() => {
      setApType("");
    }, 500);
  };

  return (
    <>
      <Navigationbar log={1} navn={2} />
      <section className="myprjsec">
        <h1 className="projtitles">
          Kelola&nbsp;<span>Proyekmu</span>
        </h1>

        <div className="w-100 d-flex justify-content-end position-relative projbtnmainct">
          <div className="position-absolute top-50 start-50 translate-middle prjbtncont">
            <button
              className={`btnproject ${
                activeButton === "client" ? "prjbtnactivestate" : ""
              }`}
              onClick={() => setActiveButton("client")}
            >
              <span className="material-symbols-outlined">
                supervisor_account
              </span>
              Pemilik
            </button>
            <button
              className={`btnproject ${
                activeButton === "worker" ? "prjbtnactivestate" : ""
              }`}
              onClick={() => setActiveButton("worker")}
            >
              <span className="material-symbols-outlined">engineering</span>
              Pekerja
            </button>
          </div>
          {activeButton === "client" ? (
            <Link style={{ textDecoration: "none" }} to="/projects/create">
              <button className="createprjbtn">
                Buat proyek
                <span className="material-symbols-outlined">add</span>
              </button>
            </Link>
          ) : (
            ""
          )}
        </div>

        <div className="prjheadcontainer">
          <div className="prjsubtncont">
            <button
              className={`prjheadcontainerbtn ${
                activeHeadButton === "lamaran" ? "headbtnactive" : ""
              }`}
              onClick={() => setActiveHeadButton("lamaran")}
            >
              Lamaran
            </button>
            <button
              className={`prjheadcontainerbtn ${
                activeHeadButton === "berjalan" ? "headbtnactive" : ""
              }`}
              onClick={() => setActiveHeadButton("berjalan")}
            >
              Berjalan
            </button>
            <button
              className={`prjheadcontainerbtn ${
                activeHeadButton === "selesai" ? "headbtnactive" : ""
              }`}
              onClick={() => setActiveHeadButton("selesai")}
            >
              Selesai
            </button>
          </div>
          <div className="input-containerproj">
            <span className="material-symbols-outlined search-iconprj">
              search
            </span>
            <Form.Control
              id="faqsearch"
              type="text"
              placeholder="Cari Proyekmu"
            />
          </div>
        </div>
        <div className="w-100 d-flex justify-content-end initpadding my-4">
          <div
            className="d-flex justify-content-center align-items-center gap-2"
            style={{
              margin: "0",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#7e7e7e",
            }}
          >
            Urutkan :
            <div className="d-flex flex-column">
              <span className="material-symbols-outlined">
                keyboard_arrow_up
              </span>
              <span className="material-symbols-outlined">
                keyboard_arrow_down
              </span>
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{
            padding: "20px 140px 0px 110px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#7e7e7e",
          }}
        >
          <div className="d-flex gap-5">
            <p>Kategori</p>
            <p>Nama Proyek</p>
          </div>
          <div className="d-flex gap-5">
            <p>Orang</p>
            <p>Kemajuan</p>
            <p>Aksi</p>
          </div>
        </div>

        {(activeButton === "client") & (activeHeadButton === "lamaran") ? (
          <div style={{ padding: "0 100px" }}>
            {clientOpenProjects.map((item) => (
              <Proyekcard
                key={item.id}
                imgSrc={item.category}
                title={item.title}
                memberCount={item.membercount}
                type={item.type}
                notifCount={item.notifcount}
                // progress={allProgress}
                onClick={() => {
                  handleOpenModalapproval(item.id);
                }}
              />
            ))}
          </div>
        ) : (
          ""
        )}
        {(activeButton === "client") & (activeHeadButton === "berjalan") ? (
          <div style={{ padding: "0 100px" }}>
            {clientInProgressProjects.map((item) => (
              <Proyekcard
                key={item.id}
                imgSrc={item.category}
                title={item.title}
                memberCount={item.membercount}
                progress={allProgress}
                type={item.type}
                onClick={() => {
                  handleOpenModalmain(item.id);
                }}
              />
            ))}
          </div>
        ) : (
          ""
        )}
        {(activeButton === "client") & (activeHeadButton === "selesai") ? (
          <div style={{ padding: "0 100px" }}>
            {clientCompletedProjects.map((item) => (
              <Proyekcard
                key={item.id}
                imgSrc={item.category}
                title={item.title}
                memberCount={item.membercount}
                progress={allProgress}
                type={item.type}
              />
            ))}
          </div>
        ) : (
          ""
        )}

        {(activeButton === "worker") & (activeHeadButton === "lamaran") ? (
          <div style={{ padding: "0 100px" }}>
            {workerOpenProjects.map((item) => (
              <Proyekcard
                key={item.id}
                imgSrc={item.category}
                title={item.title}
                memberCount={item.membercount}
                type={item.type}
                notifCount={item.notifcount}
                accepted={item.accepted}
                aconClick={handleOpenModalapprovalconfirmworkerAccept}
              />
            ))}
          </div>
        ) : (
          ""
        )}
        {(activeButton === "worker") & (activeHeadButton === "berjalan") ? (
          <div style={{ padding: "0 100px" }}>
            {workerInProgressProjects.map((item) => (
              <Proyekcard
                key={item.id}
                imgSrc={item.category}
                title={item.title}
                memberCount={item.membercount}
                progress={item.progress}
                type={item.type}
                onClick={() => {
                  handleOpenModalprogress(item.id);
                }}
              />
            ))}
          </div>
        ) : (
          ""
        )}
        {(activeButton === "worker") & (activeHeadButton === "selesai") ? (
          <div style={{ padding: "0 100px" }}>
            {workerCompletedProjects.map((item) => (
              <Proyekcard
                key={item.id}
                imgSrc={item.category}
                title={item.title}
                memberCount={item.membercount}
                progress={item.progress}
                type={item.type}
              />
            ))}
          </div>
        ) : (
          ""
        )}

        <Modal
          show={showModalmain}
          onHide={handleCloseModalmain}
          centered
          dialogClassName="custom-modalmainproject"
        >
          <Modal.Body className="d-flex flex-column justify-content-between p-5">
            <div className="d-flex flex-column gap-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-center align-items-center gap-4">
                  <img
                    style={{ width: "83px", height: "83px" }}
                    src={`/assets/kategori-icon/${projectSelected.category}.png`}
                  />
                  <h3
                    style={{
                      fontSize: "36px",
                      fontWeight: "bold",
                      color: "#343434",
                    }}
                  >
                    {projectSelected.title}
                  </h3>
                </div>
                <div
                  className={`justify-content-center d-flex`}
                  style={{ width: "100px" }}
                >
                  <CircularProgressbar
                    value={allProgress}
                    text={`${allProgress}%`}
                    styles={buildStyles({
                      rotation: 0,
                      textSize: "26px",
                      pathColor: getColor(86),
                      textColor: getColor(86),
                      trailColor: "#ececec",
                      backgroundColor: "#3e98c7",
                    })}
                  />
                </div>
              </div>

              <div className="d-flex flex-column">
                <p style={{ fontSize: "24px", color: "#848484" }}>
                  Kemajuan anda
                </p>
                <div
                  style={{ height: "100px" }}
                  className="d-flex justify-content-between w-100 gap-4"
                >
                  <div
                    className="d-flex flex-column justify-content-between align-items-center"
                    style={{ width: "10%" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        borderRadius: "40px",
                        overflow: "hidden",
                      }}
                    >
                      <ProgressBar now={pr1} />
                    </div>
                    <div
                      style={{
                        width: "14px",
                        borderRadius: "50%",
                        height: "14px",
                        backgroundColor: "#3a1cf5",
                      }}
                    />
                    <p style={{ margin: "0", color: "#848484" }}>ERD</p>
                  </div>
                  <div
                    className="d-flex flex-column justify-content-between align-items-center"
                    style={{ width: "60%" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        borderRadius: "40px",
                        overflow: "hidden",
                      }}
                    >
                      <ProgressBar now={pr2} />
                    </div>
                    <div
                      style={{
                        width: "14px",
                        borderRadius: "50%",
                        height: "14px",
                        backgroundColor: "#3a1cf5",
                      }}
                    />
                    <p style={{ margin: "0", color: "#848484" }}>Coding</p>
                  </div>
                  <div
                    className="d-flex flex-column justify-content-between align-items-center"
                    style={{ width: "10%" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        borderRadius: "40px",
                        overflow: "hidden",
                      }}
                    >
                      <ProgressBar now={pr3} />
                    </div>
                    <div
                      style={{
                        width: "14px",
                        borderRadius: "50%",
                        height: "14px",
                        backgroundColor: "#EAEAEA",
                      }}
                    />
                    <p style={{ margin: "0", color: "#848484" }}>Testing</p>
                  </div>
                  <div
                    className="d-flex flex-column justify-content-between align-items-center"
                    style={{ width: "10%" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        borderRadius: "40px",
                        overflow: "hidden",
                      }}
                    >
                      <ProgressBar now={pr4} />
                    </div>
                    <div
                      style={{
                        width: "14px",
                        borderRadius: "50%",
                        height: "14px",
                        backgroundColor: "#EAEAEA",
                      }}
                    />
                    <p style={{ margin: "0", color: "#848484" }}>Publish</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-2">
              <div className="col customcolprjk">
                <Proyekusercard
                  imgSrc={"/assets/avatardummy.png"}
                  name={workerSelected.name}
                  pr1={pr1}
                  pr2={pr2}
                  pr3={pr3}
                  pr4={pr4}
                  notifCount={3}
                  onClickprog={handleOpenModalprogress}
                />
              </div>
              {/* <div className="col customcolprjk">
                <Proyekusercard
                  imgSrc={"/assets/profile-dummy.png"}
                  name={"Budi Lesmana"}
                  pr1={100}
                  pr2={100}
                  pr3={100}
                  pr4={30}
                  notifCount={1}
                  onClickprog={handleOpenModalprogress}
                />
              </div>
              <div className="col customcolprjk">
                <Proyekusercard
                  imgSrc={"/assets/profile-dummy.png"}
                  name={"Budi Lesmana"}
                  pr1={100}
                  pr2={60}
                  pr3={0}
                  pr4={0}
                  notifCount={0}
                  onClickprog={handleOpenModalprogress}
                />
              </div>
              <div className="col customcolprjk">
                <Proyekusercard
                  imgSrc={"/assets/profile-dummy.png"}
                  name={"Budi Lesmana"}
                  pr1={100}
                  pr2={100}
                  pr3={0}
                  pr4={0}
                  notifCount={4}
                  onClickprog={handleOpenModalprogress}
                />
              </div>
              <div className="col customcolprjk">
                <Proyekusercard
                  imgSrc={"/assets/profile-dummy.png"}
                  name={"Budi Lesmana"}
                  pr1={100}
                  pr2={100}
                  pr3={100}
                  pr4={100}
                  notifCount={5}
                  onClickprog={handleOpenModalprogress}
                />
              </div>
              <div className="col customcolprjk">
                <Proyekusercard
                  imgSrc={"/assets/profile-dummy.png"}
                  name={"Budi Lesmana"}
                  pr1={100}
                  pr2={100}
                  pr3={40}
                  pr4={0}
                  notifCount={0}
                  onClickprog={handleOpenModalprogress}
                />
              </div> */}
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={showModalprogress}
          onHide={handleCloseModalprogress}
          centered
          dialogClassName="custom-modalprogress"
        >
          <Modal.Body className="d-flex flex-column justify-content-start p-5 gap-5">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-center align-items-center gap-5">
                <img
                  style={{ width: "83px", height: "83px" }}
                  src="/assets/avatardummy.png"
                />
                <h3
                  style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    color: "#343434",
                  }}
                >
                  {workerSelected.name}
                </h3>
              </div>
              <button
                onClick={handleOpenModaladdpart}
                className="createprjbtn"
                style={{
                  fontSize: "18px",
                  width: "176px",
                  height: "45px",
                  display: activeButton === "client" ? "flex" : "none",
                }}
              >
                Buat Tahapan
                <span
                  style={{ fontSize: "30px" }}
                  className="material-symbols-outlined"
                >
                  add
                </span>
              </button>
              <div
                style={{
                  display: activeButton === "client" ? "none" : "block",
                }}
              />
            </div>
            <div
              style={{ height: "100px" }}
              className="d-flex justify-content-between w-100 gap-4"
            >
              <div
                className="d-flex flex-column justify-content-between align-items-center"
                style={{ width: "10%" }}
              >
                <div
                  style={{
                    width: "100%",
                    borderRadius: "40px",
                    overflow: "hidden",
                  }}
                >
                  <ProgressBar now={pr1} />
                </div>
                <div
                  style={{
                    width: "14px",
                    borderRadius: "50%",
                    height: "14px",
                    backgroundColor: "#3a1cf5",
                  }}
                />
                <p style={{ margin: "0", color: "#848484" }}>ERD</p>
              </div>
              <div
                className="d-flex flex-column justify-content-between align-items-center"
                style={{ width: "60%" }}
              >
                <div
                  style={{
                    width: "100%",
                    borderRadius: "40px",
                    overflow: "hidden",
                  }}
                >
                  <ProgressBar now={pr2} />
                </div>
                <div
                  style={{
                    width: "14px",
                    borderRadius: "50%",
                    height: "14px",
                    backgroundColor: "#3a1cf5",
                  }}
                />
                <p style={{ margin: "0", color: "#848484" }}>Coding</p>
              </div>
              <div
                className="d-flex flex-column justify-content-between align-items-center"
                style={{ width: "10%" }}
              >
                <div
                  style={{
                    width: "100%",
                    borderRadius: "40px",
                    overflow: "hidden",
                  }}
                >
                  <ProgressBar now={pr3} />
                </div>
                <div
                  style={{
                    width: "14px",
                    borderRadius: "50%",
                    height: "14px",
                    backgroundColor: "#EAEAEA",
                  }}
                />
                <p style={{ margin: "0", color: "#848484" }}>Testing</p>
              </div>
              <div
                className="d-flex flex-column justify-content-between align-items-center"
                style={{ width: "10%" }}
              >
                <div
                  style={{
                    width: "100%",
                    borderRadius: "40px",
                    overflow: "hidden",
                  }}
                >
                  <ProgressBar now={pr4} />
                </div>
                <div
                  style={{
                    width: "14px",
                    borderRadius: "50%",
                    height: "14px",
                    backgroundColor: "#EAEAEA",
                  }}
                />
                <p style={{ margin: "0", color: "#848484" }}>Publish</p>
              </div>
            </div>
            <div className="d-flex gap-5" style={{ height: "424px" }}>
              <div
                className="d-flex flex-column justify-content-between"
                style={{ height: "100%" }}
              >
                <div
                  className="d-flex flex-column gap-3 align-items-center"
                  style={{ width: "403px" }}
                >
                  <div
                    className="d-flex gap-4"
                    style={{
                      width: "403px",
                      height: "193px",
                      border: "2px dashed gray",
                      borderRadius: "11.25px",
                      padding: "10px",
                    }}
                  >
                    <div className="d-flex flex-column gap-2">
                      <img
                        style={{ width: "58.5px", height: "45px" }}
                        src="/assets/folder.png"
                      />
                      <p className="text-center" style={{ color: "gray" }}>
                        database
                      </p>
                    </div>
                    <div className="d-flex flex-column gap-2">
                      <img
                        style={{ width: "58.5px", height: "45px" }}
                        src="/assets/folder.png"
                      />
                      <p className="text-center" style={{ color: "gray" }}>
                        mysql
                      </p>
                    </div>
                    <div className="d-flex flex-column gap-2">
                      <img
                        style={{ width: "58.5px", height: "45px" }}
                        src="/assets/folder.png"
                      />
                      <p className="text-center" style={{ color: "gray" }}>
                        php
                      </p>
                    </div>
                  </div>
                  <input
                    type="text"
                    style={{
                      borderRadius: "4.5px",
                      width: "100%",
                      height: "43px",
                      border: "2px solid #b7b7b7",
                      padding: "2px 10px",
                    }}
                    placeholder="https://github.com/zenarith/Web.git"
                  ></input>
                  <button
                    className="createprjbtn"
                    style={{ fontSize: "18px", width: "176px", height: "45px" }}
                  >
                    Tandai Selesai
                  </button>
                </div>
                <button
                  onClick={handleCloseModalprogress}
                  style={{
                    width: "141px",
                    height: "39px",
                    color: "white",
                    borderRadius: "10px",
                    fontSize: "bold",
                    border: "none",
                    backgroundColor: "#a8a8a8",
                  }}
                >
                  Kembali
                </button>
              </div>

              {/* <div
                style={{
                  width: "100%",
                  height: "424px",
                  backgroundColor: "#efefef",
                  border: "2px solid #d8d8d8",
                  borderRadius: "6px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    flex: 1,
                    overflowY: "auto",
                    marginBottom: "10px",
                    height: "300px",
                  }}
                >
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      style={{
                        marginBottom: "10px",
                        textAlign: message.sender === "user" ? "right" : "left",
                      }}
                    >
                      <span
                        style={{
                          backgroundColor:
                            message.sender === "user" ? "#3a1cf5" : "#ffffff",
                          color: message.sender === "user" ? "#fff" : "#000",
                          padding: "10px",
                          borderRadius: "15px",
                          display: "inline-block",
                          maxWidth: "70%",
                          borderTopRightRadius:
                            message.sender === "user" ? "0px" : "15px",
                        }}
                      >
                        {message.text}
                      </span>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    className="modalinputcustom"
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: "20px",
                      border: "1px solid #d8d8d8",
                      marginRight: "10px",
                    }}
                    placeholder="Tulis pesan..."
                  />
                  <button
                    onClick={handleSend}
                    style={{
                      backgroundColor: "#3a1cf5",
                      color: "#fff",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none",
                    }}
                  >
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
              </div> */}
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={showModalapproval}
          onHide={handleCloseModalapproval}
          centered
          dialogClassName="custom-modalapproval"
        >
          <Modal.Body className="d-flex flex-column justify-content-between p-5">
            <div className="d-flex flex-column gap-4">
              <div className="d-flex gap-4">
                <div className="d-flex justify-content-center align-items-center gap-4">
                  <img
                    style={{ width: "83px", height: "83px" }}
                    src="/assets/kategori-icon/aplikasi.png"
                  />
                  <h3
                    style={{
                      fontSize: "36px",
                      fontWeight: "bold",
                      color: "#343434",
                    }}
                  >
                    Database Pengguna dan Penjual
                  </h3>
                </div>
              </div>
              <div
                className="w-100"
                style={{
                  height: "432px",
                  overflowY: "auto",
                  padding: "0 20px",
                }}
              >
                {applicationData.length === 0 ? (
                  <center>Tidak ada lamaran</center>
                ) : (
                  applicationData.map((item) => (
                    <Approvalcard
                      key={item.id}
                      imgSrc={item.category}
                      nama={item.name}
                      aconClick={() =>
                        handleOpenModalapprovalconfirmAccept(item.id)
                      }
                      dconClick={() =>
                        handleOpenModalapprovalconfirmDecline(item.id)
                      }
                      onClick={() => handleOpenModalmain()}
                    />
                  ))
                )}
                {/* <Approvalcard
                  imgSrc={"/assets/avatardummy.png"}
                  nama={"Zenarith Vandora"}
                  cvlink={"#"}
                  aconClick={handleOpenModalapprovalconfirmAccept(
                    "Zenarith Vandora"
                  )}
                  dconClick={handleOpenModalapprovalconfirmDecline(
                    "Zenarith Vandora"
                  )}
                /> */}
                {/* <Approvalcard
                  imgSrc={"/assets/avatardummy.png"}
                  nama={"Zenarith Vandora"}
                  cvlink={"#"}
                  aconClick={handleOpenModalapprovalconfirmAccept(
                    "Zenarith Vandora"
                  )}
                  dconClick={handleOpenModalapprovalconfirmDecline(
                    "Zenarith Vandora"
                  )}
                />
                <Approvalcard
                  imgSrc={"/assets/avatardummy.png"}
                  nama={"Zenarith Vandora"}
                  cvlink={"#"}
                  aconClick={handleOpenModalapprovalconfirmAccept(
                    "Zenarith Vandora"
                  )}
                  dconClick={handleOpenModalapprovalconfirmDecline(
                    "Zenarith Vandora"
                  )}
                />
                <Approvalcard
                  imgSrc={"/assets/profile-dummy.png"}
                  nama={"Budi Lesmana"}
                  cvlink={"#"}
                  aconClick={handleOpenModalapprovalconfirmAccept(
                    "Budi Lesmana"
                  )}
                  dconClick={handleOpenModalapprovalconfirmDecline(
                    "Budi Lesmana"
                  )}
                />
                <Approvalcard
                  imgSrc={"/assets/profile-dummy.png"}
                  nama={"Budi Lesmana"}
                  cvlink={"#"}
                  aconClick={handleOpenModalapprovalconfirmAccept(
                    "Budi Lesmana"
                  )}
                  dconClick={handleOpenModalapprovalconfirmDecline(
                    "Budi Lesmana"
                  )}
                />
                <Approvalcard
                  imgSrc={"/assets/profile-dummy.png"}
                  nama={"Budi Lesmana"}
                  cvlink={"#"}
                  aconClick={handleOpenModalapprovalconfirmAccept(
                    "Budi Lesmana"
                  )}
                  dconClick={handleOpenModalapprovalconfirmDecline(
                    "Budi Lesmana"
                  )}
                /> */}
              </div>
            </div>
            <div>
              <button
                onClick={handleCloseModalapproval}
                style={{
                  width: "141px",
                  height: "39px",
                  border: "none",
                  borderRadius: "10px",
                  backgroundColor: "#ababab",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Kembali
              </button>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={showModaladdpart}
          onHide={handleCloseModaladdpart}
          centered
          dialogClassName="custom-modaladdpart"
        >
          <Modal.Body className="d-flex flex-row position-relative justify-content-between p-5">
            <button
              onClick={editPart ? handleCloseEditPart : handleCloseModaladdpart}
              className="position-absolute d-flex justify-content-center align-items-center"
              style={{
                right: "40px",
                top: "30px",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <span
                style={{ fontSize: "40px" }}
                className="material-symbols-outlined"
              >
                close
              </span>
            </button>
            <div
              className="d-flex flex-column gap-5"
              style={{ width: "363px", paddingTop: "25px" }}
            >
              <div className="w-100 d-flex justify-content-end">
                <button
                  className="createprjbtn"
                  style={{ fontSize: "16px", width: "129px", height: "30px" }}
                >
                  Tambah{" "}
                  <span
                    style={{ fontSize: "25px" }}
                    className="material-symbols-outlined"
                  >
                    add
                  </span>
                </button>
              </div>
              <div className="d-flex flex-column gap-4">
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{
                    height: "41px",
                    width: "100%",
                    borderRadius: "7.2px",
                    border: "2px solid #1f79e5",
                    padding: "5px 15px",
                  }}
                >
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor: "#1f79e5",
                      }}
                    />
                    <p
                      style={{
                        margin: "0",
                        fontSize: "18px",
                        color: "#1f79e5",
                      }}
                    >
                      ERD
                    </p>
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      onClick={handleEditPart}
                      className="addpartbtn-edit"
                    >
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className="addpartbtn-delete">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{
                    height: "41px",
                    width: "100%",
                    borderRadius: "7.2px",
                    border: "2px solid #1f79e5",
                    padding: "5px 15px",
                  }}
                >
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor: "#1f79e5",
                      }}
                    />
                    <p
                      style={{
                        margin: "0",
                        fontSize: "18px",
                        color: "#1f79e5",
                      }}
                    >
                      Coding
                    </p>
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      onClick={handleEditPart}
                      className="addpartbtn-edit"
                    >
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className="addpartbtn-delete">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{
                    height: "41px",
                    width: "100%",
                    borderRadius: "7.2px",
                    border: "2px solid #1f79e5",
                    padding: "5px 15px",
                  }}
                >
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor: "#1f79e5",
                      }}
                    />
                    <p
                      style={{
                        margin: "0",
                        fontSize: "18px",
                        color: "#1f79e5",
                      }}
                    >
                      Testing
                    </p>
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      onClick={handleEditPart}
                      className="addpartbtn-edit"
                    >
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className="addpartbtn-delete">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{
                    height: "41px",
                    width: "100%",
                    borderRadius: "7.2px",
                    border: "2px solid #1f79e5",
                    padding: "5px 15px",
                  }}
                >
                  <div className="d-flex justify-content-center align-items-center gap-3">
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor: "#1f79e5",
                      }}
                    />
                    <p
                      style={{
                        margin: "0",
                        fontSize: "18px",
                        color: "#1f79e5",
                      }}
                    >
                      Publish
                    </p>
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      onClick={handleEditPart}
                      className="addpartbtn-edit"
                    >
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className="addpartbtn-delete">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr
              style={{
                width: "2px",
                height: "100%",
                backgroundColor: "grey",
                margin: "0 20px",
              }}
            />
            <div
              style={{ paddingTop: "20px" }}
              className="d-flex flex-column justify-content-between"
            >
              <div
                style={{ width: "436px" }}
                className="d-flex flex-column gap-2 addpartform"
              >
                <label>Nama Tahapan</label>
                <input
                  style={{
                    width: "100%",
                    height: "51.6px",
                    marginBottom: "20px",
                  }}
                  type="text"
                  placeholder="cth: Coding"
                />
                <label>Deskripsi</label>
                <textarea
                  className="customaddesc"
                  style={{ width: "100%", height: "224.4px" }}
                  type="text"
                  placeholder="Detail yang perlu dikerjakan dan batas waktunya..."
                />
              </div>
              <div className="w-100 d-flex justify-content-between">
                <div style={{ display: editPart ? "none" : "block" }} />
                <button
                  className="createprjbtn"
                  style={{
                    fontSize: "16px",
                    width: "129px",
                    height: "37px",
                    backgroundColor: "red",
                    display: editPart ? "flex" : "none",
                  }}
                >
                  Hapus{" "}
                  <span
                    style={{ fontSize: "25px" }}
                    className="material-symbols-outlined"
                  >
                    delete
                  </span>
                </button>
                <button
                  className="createprjbtn"
                  style={{ fontSize: "16px", width: "129px", height: "37px" }}
                >
                  Simpan{" "}
                  <span
                    style={{ fontSize: "25px" }}
                    className="material-symbols-outlined"
                  >
                    save
                  </span>
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={showModalapprovalconfirm}
          onHide={handleCloseModalapprovalconfirm}
          centered
          dialogClassName="custom-modal3"
        >
          <Modal.Body className="d-flex flex-column justify-content-between p-5">
            <div
              className={`d-flex ${
                apType === "accept" || apType === "decline"
                  ? "d-flex"
                  : "d-none"
              } flex-column justify-content-between align-items-center h-100 gap-4 p-4`}
            >
              <img style={{ width: "138px" }} src="assets/warning.png" />
              <p
                className="text-center"
                style={{
                  fontSize: "20px",
                  color: "#7e7e7e",
                  fontWeight: "bold",
                }}
              >
                Anda yakin ingin{" "}
                {apType === "accept" ? (
                  <span style={{ color: "green" }}>Menerima</span>
                ) : (
                  <span style={{ color: "red" }}>Menolak</span>
                )}{" "}
                <span style={{ color: "black" }}>{apName}</span> kedalam proyek
                anda?
              </p>
              <div className="w-100 d-flex justify-content-between">
                <button
                  onClick={handleCloseModalapprovalconfirm}
                  style={{
                    width: "100px",
                    height: "30px",
                    border: "none",
                    borderRadius: "10px",
                    backgroundColor: "#ababab",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Kembali
                </button>
                <button
                  onClick={
                    apType === "accept"
                      ? handleOpenModalapprovalresultaccept
                      : handleOpenModalapprovalresultdecline
                  }
                  style={{
                    width: "100px",
                    height: "30px",
                    border: "none",
                    borderRadius: "10px",
                    backgroundColor: apType === "accept" ? "#00cd08" : "red",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  ya
                </button>
              </div>
            </div>
            <div
              className={`d-flex ${
                apType === "acceptwork" ? "d-flex" : "d-none"
              } flex-column justify-content-between align-items-center h-100 gap-4 p-4 position-relative`}
            >
              <img style={{ width: "138px" }} src="assets/warning.png" />
              <button
                onClick={handleCloseModalapprovalconfirm}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  border: "none",
                  backgroundColor: "transparent",
                }}
              >
                <span
                  style={{ fontSize: "50px", color: "gray" }}
                  className="material-symbols-outlined"
                >
                  arrow_back
                </span>
              </button>
              <p
                className="text-center"
                style={{
                  fontSize: "20px",
                  color: "#7e7e7e",
                  fontWeight: "bold",
                }}
              >
                Apakah anda <span style={{ color: "green" }}>bersedia</span>{" "}
                ikut serta dalam proyek ini?
              </p>
              <div className="w-100 d-flex justify-content-between">
                <button
                  onClick={handleOpenModalapprovalresultworkdecline}
                  style={{
                    width: "100px",
                    height: "30px",
                    border: "none",
                    borderRadius: "10px",
                    backgroundColor: "#f50000",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  tidak
                </button>
                <button
                  onClick={handleOpenModalapprovalresultworkaccept}
                  style={{
                    width: "100px",
                    height: "30px",
                    border: "none",
                    borderRadius: "10px",
                    backgroundColor: "#00cd08",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  ya
                </button>
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          show={showModalapprovalresult}
          onHide={handleCloseModalapprovalresult}
          centered
          dialogClassName="custom-modal4"
        >
          <Modal.Body className="d-flex flex-column justify-content-between p-5">
            <div
              className={`${
                rsType === "accept" || rsType === "decline"
                  ? "d-flex"
                  : "d-none"
              } flex-column justify-content-between align-items-center h-100 gap-4 p-4`}
            >
              {rsType === "accept" ? (
                <img style={{ width: "80px" }} src="assets/Berhasil.png" />
              ) : (
                <img style={{ width: "80px" }} src="assets/Buang.png" />
              )}
              <p
                className="text-center"
                style={{
                  fontSize: "17px",
                  fontWeight: "bold",
                  color: "#7e7e7e",
                }}
              >
                Berhasil{" "}
                {rsType === "accept" ? (
                  <span style={{ color: "green" }}>Menerima</span>
                ) : (
                  <span style={{ color: "red" }}>Menolak</span>
                )}{" "}
                <span style={{ color: "black" }}>{apName}</span> di proyek anda
              </p>
            </div>
            <div
              className={`${
                rsType === "acceptwork" || rsType === "declinework"
                  ? "d-flex"
                  : "d-none"
              } flex-column justify-content-between align-items-center h-100 gap-4 p-4`}
            >
              {rsType === "acceptwork" ? (
                <img style={{ width: "80px" }} src="assets/Berhasil.png" />
              ) : (
                <img style={{ width: "80px" }} src="assets/cats.png" />
              )}
              {rsType === "acceptwork" ? (
                <p
                  className="text-center"
                  style={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    color: "#7e7e7e",
                  }}
                >
                  Anda{" "}
                  <span style={{ color: "green" }}>berhasil bergabung</span>{" "}
                  dalam proyek
                </p>
              ) : (
                <p
                  className="text-center"
                  style={{
                    fontSize: "17px",
                    fontWeight: "bold",
                    color: "#7e7e7e",
                  }}
                >
                  Terimakasih telah mendaftar di proyek ini :(
                </p>
              )}
            </div>
          </Modal.Body>
        </Modal>
      </section>
      <Footer />
    </>
  );
}
