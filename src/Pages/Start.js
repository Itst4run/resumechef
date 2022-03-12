import React from "react";
import styles from "../Styles/start.module.css";
import { Link } from 'react-router-dom';
function Start() {
  return (
    <div  className={styles.outer}>
      <div className={styles.left}>
        <div className={styles.title1}>3 SIMPLE STEPS</div>
        <div className={styles.title2}>Getting Started</div>
        <div className={styles.lineout}>
          <div className={styles.box1} >1</div>
          <div className={styles.line}>
            Save time using pre-written bullets crafted by resume experts.
          </div>
        </div>
        <div className={styles.lineout}>
          <div className={styles.box,styles.box2}>2</div>
          <div className={styles.line}>
            Select a recruiter approved template that will get your resume
            noticed.
          </div>
        </div>
        <div className={styles.lineout}>
          <div className={styles.box,styles.box3}>3</div>
          <div className={styles.line}>Download and print your resume.</div>
        </div>
        <div className="btn-outer">
        <Link to="/Contact" className={styles.btn}>CONTINUE</Link>

        </div>
        <div className={styles.last}>
          By clicking "<b>Continue</b>". you agree to our <a className={styles.word}> Terms and conditions </a>  and
           <a className={styles.word}> Privacy policy</a>
        </div>
      </div>

      <div className={styles.right}>
          <img src="/images/images/start.svg" />
      </div>
    </div>
  );
}

export default Start;
