import React, { useCallback, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import home from "../images/Icon ionic-md-home.svg";
import location from "../images/Icon material-location-on.svg";
import Next from "../images/Nex.svg";
import Prev from "../images/Prev.svg";
import axios from "axios";
import Applicants from "./Applicants";
import LoginMessage from "./LoginMessage";

function Jobs() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [popup, setPopup] = useState(false);
  const [id, setId] = useState("");
  const [loginMsg, setLoginMSg] = useState(true);

  function Api() {
    axios
      .get(
        `https://jobs-api.squareboat.info/api/v1/recruiters/jobs?page=${page}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setJobs(res.data.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }

    Api();
  }, [page]);

  function openPopup(currentId) {
    setPopup(true);
    setId(currentId);
    console.log(id);
  }

  return (
    <>
      <div className="jobs-page">
      {loginMsg && <LoginMessage closeLoginMsg={setLoginMSg} />}
        <div className="jobs-banner">
          <Navbar></Navbar>
          <div>
            <img className="home-img" src={home} alt="home" />
            <p className="home-text">Home</p>
          </div>
          <h2 className="job-head-text">Jobs posted by you</h2>
        </div>
        <div className="jobs-container">
          {jobs &&
            jobs.map((job) => {
              return (
                <div key={job.id} className="job-card">
                  <h2 className="job-card-header">{job.title}</h2>
                  <p className="job-card-body">{job.description}</p>
                  <div className="job-card-footer">
                    <img className="location-img" src={location} alt="loc" />
                    <p className="job-location">{job.location}</p>
                    <button
                      className="applicants-view-btn"
                      onClick={() => openPopup(job.id)}
                    >
                      View Applications
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="pagination">
          <img className="prev-img"
            src={Prev}
            alt="prev"
            onClick={() => {
              if (page > 1) setPage(page - 1);
            }}
          />
          <div className="curr-page">{page}</div>
          <img className="next-page" src={Next} alt="next" onClick={() => setPage(page + 1)} />
        </div>
        {popup && <Applicants closePopup={setPopup} id={id} />}
      </div>
    </>
  );
}

export default Jobs;
