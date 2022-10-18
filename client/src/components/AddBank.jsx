import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { addBank } from '../service/api'
import {toast} from 'react-hot-toast'

const AddBank = () => {
    
    const navigate = useNavigate()
    const [inputs,setInputs] = useState({
        vendorname : '',
        accno : '',
        bankname: '',
        addressfirst: '',
        addresssecond: '',
        city: '',
        country: '',
        zipcode: '' , 
    })

    const handleChange = (e) =>{
        setInputs((prev) => ({...prev, [e.target.name] : e.target.value}))
    }
    const handleAdd = async (e) =>{
        e.preventDefault()
        try {
            const res = await addBank(inputs)
            toast.success('Bank added successfully')
            navigate('/')
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div className='add'>
            <form>
            <h1>Add Bank</h1>
                <div className="formInput">
                    <input type="text"
                      value={inputs.vendorname}
                      onChange={handleChange} 
                      placeholder="Enter Vendor name"
                      name="vendorname"/>
                </div>
                <div className="formInput">
                    <input type="number"
                      value={inputs.accno}
                      onChange={handleChange} 
                      placeholder="Enter account"
                      name="accno"/>
                </div>
                <div className="formInput">
                    <input type="text"
                      value={inputs.bankname}
                      onChange={handleChange} 
                      placeholder="Enter bankname"
                      name="bankname"/>
                </div>
                <div className="formInput">
                    <input type="text"
                      value={inputs.addressfirst}
                      onChange={handleChange} 
                      placeholder="Enter address 1"
                      name="addressfirst"/>
                </div>
                <div className="formInput">
                    <input type="text"
                      value={inputs.addresssecond}
                      onChange={handleChange} 
                      placeholder="Enter address 2"
                      name="addresssecond"/>
                </div>
                <div className="formInput">
                    <input type="text"
                      value={inputs.city}
                      onChange={handleChange} 
                      placeholder="Enter city name"
                      name="city"/>
                </div>
                <div className="formInput">
               
                    <input type="text"
                      value={inputs.country}
                      onChange={handleChange} 
                      placeholder="Enter country"
                      name="country"/>
                </div>
                <div className="formInput">
                 
                    <input type="number"
                      value={inputs.zipcode} 
                      onChange={handleChange}
                      placeholder="Enter zipcode"
                      name="zipcode"/>
                </div>

                <button className='add_btn' onClick={handleAdd}>Add</button>
            </form>

  
    </div>
  )
}

export default AddBank