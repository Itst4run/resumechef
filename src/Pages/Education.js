import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../Styles/education.module.css';
import {Link} from 'react-router-dom' 
import updateEducation from '../actions/educationAction';
function Education() {
  const {educationReducer}=useSelector((state)=>state)
  const dispatch=useDispatch();
  const [form, setForm] = useState({
        School_name: educationReducer.School_name,
        city: educationReducer.city,
        country: educationReducer.country,
        degree: educationReducer.degree,
        discription: educationReducer.discription,
        graduationmonth: educationReducer.graduationmonth,
        graduationyear: educationReducer.graduationyear,
    })

    console.log(form)
  function handleChange(e){
    let{id,value}=e.target;
    setForm({
            ...form,
            [id]: value
        })
  }
   function handleClick(e){  
    dispatch(updateEducation(form));
  }
  return (<>
   <div className={styles.outerbox}>
    <div className={styles.title}>
      <div className={styles.title1}>Education</div>
      <div className={styles.title2}>Start with your most recent educational institution.</div>
    </div>
     <label htmlFor="name" className={styles.label}>School Name</label>
     <input type="text" className={styles.inputbox}  onChange={handleChange}   id="School_name" value={form.School_name}  />
     <label htmlFor="email" className={styles.label}>City/Town</label>
    <input type="text" className={styles.inputbox}  onChange={handleChange}   id="city" value={form.city} />
    <label htmlFor="email" className={styles.label}>Country</label>
    <input type="text" className={styles.inputbox}  onChange={handleChange}   id="country" value={form.country} />
    <label htmlFor="email" className={styles.label} >Degree</label>
    <input type="text" className={styles.inputbox}  onChange={handleChange}   id="degree" value={form.degree} />
    <label className={styles.label}>Graduation Date</label>
    <div>

       <select className={styles.inputbox3} onChange={handleChange} id="graduationmonth"  value={form.graduationmonth} >
               <option value="month">Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>

              </select>

    <select className={styles.inputbox3} onChange={handleChange} id="graduationyear" value={form.graduationyear}>
       <option value="year">year</option>
       <option value="2021">2021</option>
       <option value="2020">2020</option>
       <option value="2019">2019</option>
       <option value="2018">2018</option>
       <option value="2016">2017</option>
       <option value="2015">2016</option>
       <option value="2014">2015</option>
       <option value="2013">2014</option>
       <option value="2012">2013</option>
       <option value="2011">2012</option>
       <option value="2010">2011</option>
       <option value="2009">2010</option>
       <option value="earlier">Or Earlier</option>

    </select>
    {/* <input type="text" className={styles.inputbox1} placeholder="Month" /> */}
    {/* <input type="text" className={styles.inputbox1} placeholder="year"/> */}
    </div>
    <button className={styles.a}>-Don't show the description </button>
   <label className={styles.label}>Description</label>
    <textarea type="text" className={styles.inputbox2} placeholder="Enter the education description"  onChange={handleChange}   id="discription" value={form.discription} />
    <Link to="/Skills" className={styles.site} onClick={handleClick}> Save & continue </Link>
    <Link to="/Work" className={styles.back}> &lsaquo; Back

</Link>
    </div>
  
  </>
    
  )
}

export default Education