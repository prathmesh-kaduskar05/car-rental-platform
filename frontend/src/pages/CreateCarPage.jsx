import React, { useState } from 'react';
import api from '../lib/axios'
import { ArrowLeftIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router'

const CreateCarPage = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [carModel, setCarModel] = useState('')
  const [carType, setCarType] = useState('')
  const [year, setYear] = useState('')
  const [location, setLocation] = useState('')
  const [imageURL, setImageURL] = useState('') 
  const [pickupDate, setPickupDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [pricePerDay, setPricePerDay] = useState('') 
  const [status] = useState('Pending') 
  
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await api.post('/cars', {
        userName: userName.trim(),
        userEmail: userEmail.trim(),
        carModel: carModel.trim(),
        carType: carType.trim(),
        year: Number(year),
        location: location.trim(),
        imageURL: imageURL.trim(), 
        pickupDate: pickupDate,     
        returnDate: returnDate,    
        pricePerDay: Number(pricePerDay),
        status: status.trim() || 'Pending',
      })
      
      toast.success('Car Created Successfully!')
      navigate('/')
    } catch(error) {
      console.error('Error creating car', error)
      const errorMsg = error.response?.data?.message || 'Failed to create the car.'
      toast.error(errorMsg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-2xl mx-auto'>
           <Link to={'/'} className='flex btn btn-ghost mb-6 p-4 rounded-full'>
             <ArrowLeftIcon className='size-5 mr-2'/> Back to Cars
           </Link>

           <div className='card bg-base-100 shadow-xl'>
             <div className='card-body'>
                <h2 className='card-title text-2xl mb-6'>Rent New Car</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {/* USER INFO */}
                    <div className='form-control'>
                        <label className='label'><span className='label-text'>User Name</span></label>
                        <input type="text" placeholder='Full Name' className='input input-bordered' value={userName} onChange={(e) => setUserName(e.target.value)} required />
                    </div>
                    <div className='form-control'>
                        <label className='label'><span className='label-text'>User Email</span></label>
                        <input type="email" placeholder='email@example.com' className='input input-bordered' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
                    </div>

                    {/* CAR INFO */}
                    <div className='form-control'>
                        <label className='label'><span className='label-text'>Car Model</span></label>
                        <input type="text" placeholder='eg. Tesla Model 3' className='input input-bordered' value={carModel} onChange={(e) => setCarModel(e.target.value)} required />
                    </div>
                    <div className='form-control'>
                        <label className='label'><span className='label-text'>Car Type</span></label>
                        <input type="text" placeholder='eg. Sedan' className='input input-bordered' value={carType} onChange={(e) => setCarType(e.target.value)} required />
                    </div>

                    <div className='form-control'>
                        <label className='label'><span className='label-text'>Year</span></label>
                        <input type="number" placeholder='2026' className='input input-bordered' value={year} onChange={(e) => setYear(e.target.value)} required />
                    </div>
                    <div className='form-control'>
                        <label className='label'><span className='label-text'>Price Per Day ($)</span></label>
                        <input type="number" placeholder='100' className='input input-bordered' value={pricePerDay} onChange={(e) => setPricePerDay(e.target.value)} required />
                    </div>
                  </div>

                  <div className='form-control mt-4'>
                      <label className='label'><span className='label-text'>Location</span></label>
                      <input type="text" placeholder='City, State' className='input input-bordered' value={location} onChange={(e) => setLocation(e.target.value)} required />
                  </div>

                  <div className='form-control mt-4'>
                      <label className='label'><span className='label-text'>Image URL</span></label>
                      <input type="text" placeholder='https://www.tesla.com/model3' className='input input-bordered' value={imageURL} onChange={(e) => setImageURL(e.target.value)} required />
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                    <div className='form-control'>
                        <label className='label'><span className='label-text'>Pickup Date</span></label>
                        <input type="date" className='input input-bordered' value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} required />
                    </div>
                    <div className='form-control'>
                        <label className='label'><span className='label-text'>Return Date</span></label>
                        <input type="date" className='input input-bordered' value={returnDate} onChange={(e) => setReturnDate(e.target.value)} required />
                    </div>
                  </div>

                  <div className='card-actions justify-end mt-8'>
                    <button type="submit" className='btn btn-primary px-10' disabled={loading}>
                      {loading ? "Creating ..." : "Create Car"}
                    </button>
                  </div>
                </form>
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCarPage;