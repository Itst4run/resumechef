import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import updateContact from '../actions/contactAction';
import styles from '../Styles/Contact.module.css';
export default function Contact() {
  const {contactReducer}=useSelector((state)=>state)
  const dispatch=useDispatch();
  const [form, setForm] = useState({
        name: contactReducer.name,
        email: contactReducer.email,
        address: contactReducer.address,
        city: contactReducer.city,
        country: contactReducer.country,
        phone: contactReducer.country
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
    dispatch(updateContact(form));
  }

  return (<>
    <div className={styles.outerbox}>
    <div className={styles.title}>
      <div className={styles.title1}>Tell us about yourself</div>
      <div className={styles.title2}>With this info,recruiters will be able to find you.</div>
    </div>
     <label htmlFor="name" className={styles.label}>Name</label>
     <input type="text" className={styles.inputbox} placeholder="*required" onChange={handleChange}   id="name" value={form.name} />
     <label htmlFor="email" className={styles.label}>Email</label>
    
     <div className={styles.em}> <input type="text" placeholder="*required" onChange={handleChange} value={form.email} className={styles.inputbox1} id="email" />
     <input type="checkbox" className={styles.check} /> <>Don't show on my resume</>
     </div>
    
    <label htmlFor="streetadress" className={styles.label}>Street Address</label>
    <input type="text" className={styles.inputbox} onChange={handleChange} id="address" value={form.address} name='address'/>
    <label htmlFor="" className={styles.label}>City</label>
    <input type="text" className={styles.inputbox} onChange={handleChange} value={form.city} className={styles.inputbox1} id="city" />
    <label htmlFor="" className={styles.label}>Country</label>
    <input type="text" className={styles.inputbox} onChange={handleChange} value={form.country} className={styles.inputbox1} id="country" />
    <label htmlFor=""  className={styles.label}>Phone number</label>
    <div><input type="text" className={styles.inputbox} onChange={handleChange} value={form.phone} className={styles.inputbox1} id="phone" /></div>
    <Link to="/Work" className={styles.site } onClick={handleClick}> Save & continue </Link>
    <Link to="/" className={styles.back}> &lsaquo;
Back</Link>
    </div>
    </>
  )
}
