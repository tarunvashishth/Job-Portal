import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import cross from "../images/Icon metro-cross.svg";

function Applicants(props) {
  const [applicants, setApplicants] = useState([]);

  function Api(){
    axios
      .get(
        `https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${props.id}/candidates`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setApplicants(res.data.data);
      })
      .catch((error) => {
        console.error(error);

      });
  }

  useEffect(() => {
    Api();
  },[props.id]);

  return (
    <>
      <div className="applicants-page">
        <p className="applicants-title">
          Applicants for this job
          <img className="cross" src={cross} alt="cross" onClick={()=> props.closePopup(false)} />
        </p>
        <p className="applicants-total">
          Total {applicants && applicants.length} applications
        </p>
        <div className="applicants-container">
          {applicants && applicants.map((applicant) => {
            return (
              <div key = {applicant.id} className="applicant-card">
                <div className="applicant-card-header">
                  <img
                    src={`https://ui-avatars.com/api/?name=${applicant.name}&length=1&rounded=true&background=d9efff&color=303f60`}
                    alt=""
                  />
                  <div className="applicant-card-header-text">
                    <h4 className="applicant-name">{applicant.name}</h4>
                    <p className="applicant-email">{applicant.email}</p>
                  </div>
                </div>
                <div>
                  <h4 className="applicant-skills">Skills</h4>
                  <p className="applicant-skills-disc">{applicant.skills}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Applicants;
