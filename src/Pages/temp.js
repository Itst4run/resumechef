import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "../Styles/contact.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { contfill } from '../Actions/contactAction'

export default function Contact() {
    const dispatch = useDispatch()
    const { ContactUpdate } = useSelector((state) => state)

    console.log(ContactUpdate);
    const [form, setForm] = useState({
        name: ContactUpdate.name,
        email: ContactUpdate.email,
        streetAddress: ContactUpdate.streetAddress
    })

    let obj = {}

    function handlechange(e) {
        let { id, value } = e.target;
        setForm({
            ...form,
            [id]: value
        })

    }
    function submit() {

        //add validation to check empty fields
        obj.name = form.name;
        obj.email = form.email;
        obj.streetAddress = form.streetAddress;
        dispatch(contfill(obj))

    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.Contact_info}>
                    <span>Tell us about yourself</span>
                </div>
                <div className={styles.headertitle}>With this info, recruiters will be able to find you.</div>
                <div className={styles.label}>Name</div>
                <div className={styles.inputbox}><input type='text' placeholder='*Required' onChange={handlechange} id="name" name='name' value={form.name} /></div>
                <div className={styles.label}>Email</div>
                <div className={styles.inputbox} style={{ display: "flex" }}>
                    <input type='email' className={styles.small} placeholder='*Required' onChange={handlechange} id="email" name='email' value={form.email} />
                    <div className={styles.label}>
                        <input type='checkbox' style={{ height: '20px', width: '20px', marginTop: '5px', marginLeft: '20px' }} />
                        <label>Don't show on my resume</label>

                    </div>

                </div>
                <div className={styles.label}  >Street Address</div>
                <div className={styles.inputbox}><input type='text' value={form.streetAddress} id="streetAddress"  onChange={handlechange} /></div>
                <div className={styles.label}>City</div>
                <div className={styles.inputbox}>
                    <input type='text' style={{ width: '50%' }} />
                </div>

                <div className={styles.label}>Country</div>
                <div className={styles.inputbox}><input type='text' /></div>

                <div className={styles.label}>Phone Number</div>
                <div className={styles.inputbox}>
                    <input type='text' style={{ width: '48%' }} />
                    <input type='text' style={{ marginLeft: "20px", width: '48%' }} />
                </div>

                <div className={styles.submit}>
                    <Link to='/workexp'><input type="submit" value="Enter Job Description" onClick={submit} /></Link>
                </div>
                <div className={styles.back}>
                    <Link to='/' style={{ textDecoration: "none" }}><a style={{ color: '#03acbb', fontWeight: 'bold' }}> Back </a></Link>
                </div>

            </div>
        </div>
    )
}



//temp contact
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import updateContact from '../actions/contactAction';
import styles from '../Styles/Contact.module.css';
export default function Home() {
  const {contactReducer}=useSelector((state)=>state)
  const dispatch=useDispatch();
  const [name, setName]=useState('');
  const [email,setEmail]=useState('');
  const [address,setAddress]=useState('');
  const obj={}


   console.log(ContactUpdate);
    const [form, setForm] = useState({
        name: ContactUpdate.name,
        email: ContactUpdate.email,
        streetAddress: ContactUpdate.streetAddress
    })
  function handleChange(e){
    let{name,value}=e.target;
    
    if(name=='name'){
      setName(value);
    }else if(name=='email') {
      setEmail(value);
    }     // dispatch(updateContact(obj));

  } 

  
  console.log(name,"name",email,"email")

  function handleClick(){
    obj.name=name;
    obj.email=email;
    dispatch(updateContact(obj));
  }

  return (<>
    <div className={styles.outerbox}>
    <div className={styles.title}>
      <div className={styles.title1}>Tell us about yourself</div>
      <div className={styles.title2}>With this info,recruiters will be able to find you.</div>
    </div>
     <label htmlFor="name" className={styles.label}>Name</label>
     <input type="text" onChange={handleChange} className={styles.inputbox} placeholder="*required" value={name} name='name'/>
     <label htmlFor="email" className={styles.label}>Email</label>
    
     <div className={styles.em}> <input type="text" onChange={handleChange} value={email} className={styles.inputbox1} placeholder="*required" name='email'/>
     <input type="checkbox" className={styles.check} /> <>Don't show on my resume</>
     </div>
    
    <label htmlFor="streetadress" className={styles.label}>Street Address</label>
    <input type="text" className={styles.inputbox} />
    <label htmlFor="" className={styles.label}>City</label>
    <input type="text" className={styles.inputbox} />
    <label htmlFor="" className={styles.label}>Country</label>
    <input type="text" className={styles.inputbox} />
    <label htmlFor=""  className={styles.label}>Phone number</label>
    <div><input type="text" className={styles.inputbox}/></div>
    <Link to="/Work" className={styles.site } onClick={handleClick}> Save & continue </Link>
    <Link to="/" className={styles.back}> &lsaquo;
Back</Link>
    </div>
    </>
  )
}
