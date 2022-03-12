import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import styles from '../Styles/summary.module.css'
import { Link } from 'react-router-dom'
import updateSummary from '../actions/summaryAction'
function Summary() {
  const {summaryReducer}=useSelector((state)=>state)
   const dispatch=useDispatch();
  const [form, setForm] = useState({
        summary: summaryReducer.summary
    })
     const obj={}
  function handleChange(e){
    let{id,value}=e.target;
    setForm({
            ...form,
            [id]: value
        })
      }
      function handleClick(e){
    dispatch(updateSummary(form));
  }
  return (
         <div className={styles.outerbox}>
    <div className={styles.title}>
      <div className={styles.title1}>Summary</div>
      <div className={styles.title2}>
    Breifly describe the value that you bring through your skills,
     background and experience.</div>
    </div>

 <textarea type="text" className={styles.inputbox2} placeholder="Sell yourself for the job. include 3-5 sentences. Customize your summary to the job you're applying to" onChange={handleChange}   id="summary" value={form.summary}/>
    <Link to="/finalize" className={styles.site} onClick={handleClick}> Save & continue </Link>
    <Link to="/Skills" className={styles.back}> &lsaquo; Back

</Link>

   </div>
  )
}

export default Summary