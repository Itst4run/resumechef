import React, { useState } from "react";
import styles from "../Styles/finalize.module.css";
import { useDispatch, useSelector } from "react-redux";
export default function Template1() {
  const {
    contactReducer,
    educationReducer,
    workReducer,
    skillsReducer,
    summaryReducer,
    finalizeReducer,
  } = useSelector((state) => state);

  let colorClass = "color" + finalizeReducer.doc.color;
  let fontfamilyClass = "fontfamily" + finalizeReducer.doc.fontfamily;
  let fontsizeClass = "fontsize" + finalizeReducer.doc.fontsize;
  console.log(colorClass);
  return (
    <div className={`${styles.left} ${fontfamilyClass} ${fontsizeClass}`}>
      <div className={`${styles.innerleft} `}>
        <div className={styles.nameblock}>
          <div className={`${styles.temp} ${colorClass}`}></div>
          <div className={styles.temp1}>{contactReducer.name}</div>
        </div>
        <div className={styles.contactdetails}>
          contact details: {contactReducer.email} {contactReducer.address}
          {contactReducer.city} {contactReducer.country} {contactReducer.phone}
        </div>
        <div className={styles.details}>
          <label
            className={`${styles.labeldetails} `}
          >
            PROFESSIONAL SUMMARY{" "}
          </label>
          {summaryReducer.summary}
        </div>
        <div className={styles.details}>
          <label className={styles.labeldetails}>SKILLS</label>
          {skillsReducer.skill_1} {skillsReducer.skill_2}{" "}
          {skillsReducer.skill_3}
        </div>
        <div className={styles.details}>
          <label className={styles.labeldetails}>EXPERIENCE</label>
          {workReducer.job_title} {workReducer.company} {workReducer.city}{" "}
          {workReducer.country} <h5>start date:</h5> {workReducer.startmonth}{" "}
          {workReducer.startyear} <h5>end date:</h5> {workReducer.endmonth}{" "}
          {workReducer.endyear}
        </div>
        <div className={styles.details}>
          <label className={styles.labeldetails}>EDUCATION</label>
          {educationReducer.School_name} {educationReducer.city}{" "}
          {educationReducer.country} {educationReducer.degree}{" "}
          {educationReducer.discription} {educationReducer.graduationmonth}{" "}
          {educationReducer.graduationyear}
        </div>
      </div>
    </div>
  );
}
