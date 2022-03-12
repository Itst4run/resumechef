import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from '../Styles/Work.module.css'
import updateWork from '../actions/workAction'

function Work() {
  const {workReducer}=useSelector((state)=>state)
  const dispatch=useDispatch();
  const [form, setForm] = useState({
        job_title: workReducer.job_title,
        company: workReducer.company,
        city: workReducer.city,
        country: workReducer.country,
        startmonth: workReducer.startmonth,
         startyear: workReducer.startyear,
         endmonth: workReducer.endmonth,
         endyear: workReducer.endyear,
    })
      const obj={}
       console.log(form)
  function handleChange(e){
    let{id,value}=e.target;
    setForm({
            ...form,
            [id]: value
        })
      }
       function handleClick(e){
    dispatch(updateWork(form));
  }
  
  return (<>
    <div className={styles.outerbox}>
    <div className={styles.title}>
      <div className={styles.title1}>Work Experience</div>
      <div className={styles.title2}>start with your most recent position.</div>
    </div>
     <label htmlFor="name" className={styles.label}>Job Title</label>
     <input type="text" className={styles.inputbox} onChange={handleChange} id="job_title" value={form.job_title} />
     <label htmlFor="email" className={styles.label}>Company</label>
    <input type="text" className={styles.inputbox} onChange={handleChange}   id="company" value={form.company}  />
     
    <div className={styles.div}>
      <label className={styles.label}>City/Town</label> 
    <label className={styles.label1}>Country</label>
    </div>
    <div>
    <input type="text" className={styles.inputbox1} onChange={handleChange}   id="city" value={form.city}  />
    <input type="text" className={styles.inputbox1} onChange={handleChange}   id="country" value={form.country} />
    </div>
    
    <label className={styles.label}>Start Date</label>
    <div>
    {/* <input type="text" className={styles.inputbox1} placeholder="Month" /> */}
              <select className={styles.inputbox3} onChange={handleChange} id="startmonth" value={form.startmonth}>
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
    {/* <input type="text" className={styles.inputbox1} placeholder="year"/> */}
    <select className={styles.inputbox3} onChange={handleChange} id="startyear" value={form.startyear}>
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
    </div>
     <label className={styles.label}>End Date</label>
    <div>
    {/* <input type="text" className={styles.inputbox1} placeholder="Month" /> */}
    {/* <input type="text" className={styles.inputbox1} placeholder="year"/> */}
     <select className={styles.inputbox3} onChange={handleChange} id="endmonth" value={form.endmonth}>
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
    {/* <input type="text" className={styles.inputbox1} placeholder="year"/> */}
    <select className={styles.inputbox3} onChange={handleChange} id="endyear" value={form.endyear}>
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
    </div>
    <div className={styles.lastdiv}>
      <input type="checkbox"  className={styles.inputbox2}/> &nbsp; currently work here
    </div>
    
    <Link to="/Education" className={styles.site} onClick={handleClick}> Save & continue </Link>
    <Link to="/Contact" className={styles.back}> &lsaquo;
Back</Link>
    </div>
    </>
  )
}

export default Work
