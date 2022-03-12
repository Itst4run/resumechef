import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import styles from '../Styles/skills.module.css'
import updateskills from '../actions/skillsAction'
function Skills() {
  const {skillsReducer}=useSelector((state)=>state)
  const dispatch=useDispatch();
  const [form, setForm] = useState({
        skill_1: skillsReducer.skill_1,
        skill_2: skillsReducer.skill_2,
        skill_3: skillsReducer.skill_3,
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
    dispatch(updateskills(form));
  }
  return (
        
         <div className={styles.outerbox}>
    <div className={styles.title}>
      <div className={styles.title1}>Skills</div>
      <div className={styles.title2}>Add a few skills to show employers what you're good at.</div>
    </div>
     
     
  <div className={styles.wrap}>
<img 
src="https://img.icons8.com/external-kmg-design-flat-kmg-design/
24/000000/external-sort-arrows-kmg-design-flat-kmg-design.png"/>
<input type="text" className={styles.inputbox} placeholder="Skill#1" onChange={handleChange} id="skill_1" value={form.skill_1}/>
  </div>
   <div className={styles.wrap}>
<img 
src="https://img.icons8.com/external-kmg-design-flat-kmg-design/
24/000000/external-sort-arrows-kmg-design-flat-kmg-design.png"/>
<input type="text" className={styles.inputbox} placeholder="Skill#2" onChange={handleChange} id="skill_2" value={form.skill_2} />
  </div>
  <div className={styles.wrap}>
<img 
src="https://img.icons8.com/external-kmg-design-flat-kmg-design/
24/000000/external-sort-arrows-kmg-design-flat-kmg-design.png"/>
<input type="text" className={styles.inputbox} placeholder="Skill#3" onChange={handleChange} id="skill_3" value={form.skill_3}/>
  </div>
  <div className={styles.wrap}>
<img 
src="https://img.icons8.com/external-kmg-design-flat-kmg-design/
24/000000/external-sort-arrows-kmg-design-flat-kmg-design.png"/>
<input type="text" className={styles.inputbox} placeholder="Skill#4"/>
  </div>
    <Link to="abc" className={styles.a}>+ Add another skill</Link>

    <Link to="/Summary" className={styles.site} onClick={handleClick}> Save & continue </Link>
    <Link to="/Education" className={styles.back}> &lsaquo; Back

</Link>
    </div>
  )
}

export default Skills