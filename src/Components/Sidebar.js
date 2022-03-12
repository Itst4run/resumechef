import React, { useEffect, useState } from "react";
import styles from "../Styles/finalize.module.css";
import { useDispatch, useSelector } from "react-redux";
import { finalizeAction } from "../actions/finalizeAction";
export default function () {
  const finalizeReducer = useSelector((state) => state.finalizeReducer);
  const dispatch = useDispatch();
  const [doc, setDocument] = useState(finalizeReducer.doc);

  function handlechange(e, type) {
    const { value } = e.target;
    doc[type] = value;
    console.log(doc)
    setDocument({ ...doc });
  }
  useEffect(() => {
    dispatch(finalizeAction(doc));
  }, [doc]);

  return (
    <div className={styles.right}>
      <div className={styles.div1}>
        <div className={styles.title}>
          <div className={styles.title1}>Here's Your Resume!</div>
          <div className={styles.title2}>What do you want to do next?</div>
          <label className={styles.label1}>Export Options</label>
          <button className={styles.btn} className={styles.btn1}>
            Download
          </button>
          <button className={styles.btn}>Print</button>
          <button className={styles.btn}>Email</button>
        </div>
      </div>
      <div className={styles.title3}>
        <label className={styles.label1}>Formatting Options</label>
        <div className={styles.label}>Layout</div>
        <div>
          <button className={styles.btn3}>CONDENSED</button>
          <button className={styles.btn3}>STANDARD</button>
          <button className={styles.btn3}>EXPANDED</button>
        </div>
        <div className={styles.fontouter}>
          <div className={styles.fontinner}>
            <label htmlFor="fonts">Font Style</label>
            <select
              className={styles.fonts}
              onClick={(e) => {
                handlechange(e, "fontfamily");
              }}
              name="fontfamily"
            >
              <option value={1}>Raleway</option>
              <option value={2}>Ubuntu</option>
              <option value={3}>Montserrat</option>
              <option value={4}>Source Sans Pro</option>
              <option value={5}>Hind</option>
              <option value={6}>Times New Roman</option>
            </select>
          </div>
          <div className={styles.fontinner}>
            <label className={styles.label}>Font Size</label>
            <select
              className={styles.fonts}
              onClick={(e) => {
                handlechange(e, "fontsize");
              }}
              name="fontsize"
            >
              <option value={1}>Small</option>
              <option value={2}>Medium</option>
              <option value={3}>Large</option>
            </select>
          </div>
        </div>
        <label className={styles.label}>Colors</label>
        <div>
          <input
            type="checkbox"
            className={styles.black}
            onClick={(e) => {
              handlechange(e, "color");
            }}
            name="color"
            value={1}
          ></input>
          <input
            type="checkbox"
            className={styles.voilet}
            onClick={(e) => {
              handlechange(e, "color");
            }}
            name="color"
            value={2}
          ></input>
          <input
            type="checkbox"
            className={styles.blue}
            onClick={(e) => {
              handlechange(e, "color");
            }}
            name="color"
            value={3}
          ></input>
          <input
            type="checkbox"
            className={styles.aqua}
            onClick={(e) => {
              handlechange(e, "color");
            }}
            name="color"
            value={4}
          ></input>
          <input
            type="checkbox"
            className={styles.skin}
            onClick={(e) => {
              handlechange(e, "color");
            }}
            name="color"
            value={5}
          ></input>
          <input
            type="checkbox"
            className={styles.grey}
            onClick={(e) => {
              handlechange(e, "color");
            }}
            name="color"
            value={6}
          ></input>
          <input
            type="checkbox"
            className={styles.orange}
            onClick={(e) => {
              handlechange(e, "color");
            }}
            name="color"
            value={7}
          ></input>
          <input
            type="checkbox"
            className={styles.green}
            onClick={(e) => {
              handlechange(e, "color");
            }}
            name="color"
            value={8}
          ></input>
          <input
            type="checkbox"
            className={styles.navyblue}
            onClick={(e) => {
              handlechange(e, "color");
            }}
            name="color"
            value={9}
          ></input>
        </div>
        <div className={styles.title4}>
          <button className={styles.btn}>+Add New Section</button>
          <button className={styles.btn}>Change Template</button>
        </div>
      </div>
    </div>
  );
}
