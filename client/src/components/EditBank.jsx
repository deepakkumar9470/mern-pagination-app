import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {editBank, getBank } from '../service/api'
import {useParams } from 'react-router-dom'
import toast from 'react-hot-toast'


const EditBank = () => { 

    const navigate = useNavigate()
    const {id} = useParams()

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

    useEffect(() => {  
      const fechSingleBank = async () =>{
        try {
          const res = await getBank(id)
          console.log(res.data)
          setInputs(res.data)
        } catch (error) {
          console.log(error)
        }
      }
      fechSingleBank()
    }, [id])
    

    const handleChange = (e) =>{
        setInputs((prev) => ({...prev, [e.target.name] : e.target.value}))
    }
    const handleUpdate = async (e) =>{
        e.preventDefault()
        try {
            const res = await editBank(id,inputs)
            toast.success('Bank has been updated')
            navigate('/')
        } catch (error) {
            console.log(error)
        }

    }

  return (
    <div className='edit'>
         <form>
            <h1>Update Bank</h1>
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
                      name="addressfirst"/>
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

                <button className='add_btn' onClick={handleUpdate}>Update</button>
            </form>

  
    </div>
  )
}

export default EditBank