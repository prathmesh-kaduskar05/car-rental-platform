import React from 'react';
import { Link, useLocation } from 'react-router';
import { UserCircle, Edit2, Trash2 } from 'lucide-react';
import { formatData } from '../lib/utils';
import api from '../lib/axios';
import toast from 'react-hot-toast';
import { useState } from 'react';

const CarModel = ({ car, setCars }) => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation()
  const isActive = location.pathname === `/car/${car._id}`

  const handleDelete = async () => {
    try {
      await api.delete(`/cars/${car._id}`)
      setCars((prev) => prev.filter((c) => c._id != car._id))
      toast.success("Car Deleted Successfully !")
    } catch {
      toast.error("Failed to delete car")
    } finally {
      setShowModal(false);
    }
  }

  return (
    <>
      {/* Model */}
      <Link to={`/car/${car._id}`} className={`relative block rounded-xl bg-base-100 p-4 border transition-all duration-200 ${isActive ? "border-primary shadow-lg" : "border-base-300"} hover:border-primary hover:shadow-xl`}>

        {/* TOP ROW */}
        <div className='flex justify-between items-start'>
          <p className='text-xs text-base-content/60 truncate'>{car._id}</p>
          <span className='badge badge-secondary'>{car.publishYear}</span>
        </div>

        {/* CAR INFO */}

        <div className='mt-4 space-y-2'>

          {/* USER NAME */}
          <div className="flex items-center gap-2 text-base-content/70">
            <UserCircle className='size-4 text-primary' />
            <p className="text-sm line-clamp-1">{car.userName}</p>
          </div>

          {/* USEREMAIL */}
          <div className="flex items-center gap-2 text-base-content/70">
            <UserCircle className='size-4 text-primary' />
            <p className="text-sm line-clamp-1">{car.userEmail}</p>
          </div>

          {/* CARMODEL */}
          <div className="flex items-center gap-2 text-base-content/70">
            <UserCircle className='size-4 text-primary' />
            <p className="text-sm line-clamp-1">{car.carModel}</p>
          </div>

          {/* CARTYPE */}
          <div className="flex items-center gap-2 text-base-content/70">
            <UserCircle className='size-4 text-primary' />
            <p className="text-sm line-clamp-1">{car.carType}</p>
          </div>

          {/* YEAR */}
          <div className="flex items-center gap-2 text-base-content/70">
            <UserCircle className='size-4 text-primary' />
            <p className="text-sm line-clamp-1">{car.year}</p>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-2 text-base-content/70">
            <UserCircle className='size-4 text-primary' />
            <p className="text-sm line-clamp-1">{car.location}</p>
          </div>

          {/* IMAGEURL */}
          <div className="flex items-center gap-2 text-base-content/70">
            <UserCircle className='size-4 text-primary' />
            <p className="text-sm line-clamp-1">{car.imageURL}</p>
          </div>

          {/* PICKUPDATE */}
          <div className="flex items-center gap-2 text-base-content/70">
            <UserCircle className='size-4 text-primary' />
            <p className="text-sm line-clamp-1">{car.pickupDate}</p>
          </div>

          {/* RETURNDATE */}
          <div className="flex items-center gap-2 text-base-content/70">
            <UserCircle className='size-4 text-primary' />
            <p className="text-sm line-clamp-1">{car.returnDate}</p>
          </div>

          {/* STATUS */}
          <div className="flex items-center gap-2 text-base-content/70">
            <UserCircle className='size-4 text-primary' />
            <p className="text-sm line-clamp-1">{car.status}</p>
          </div>

        </div>

        {/* FOOTER */}
        <div className="mt-6 flex justify-between items-center">
          <span className="text-xs text-base-content/60">{formatData(new Date(car.createdAt))}</span>
        </div>

        {/* ACTION ICONS */}
        <div className="flex items-cente gap-5 justify-end">

          {/* EDIT */}
          <div className="tooltip tooltip-warning" data-tip='Edit Car'>
            <Edit2 className="size-4 text-warning hover:scale-110 transition" />
          </div>

          {/* DELETE */}
          <div className="tooltip tooltip-error" data-tip='Delete '>
            <button
              onClick={(e) => {
                e.preventDefault()
                setShowModal(true)
              }}

              className="text-error hover:scale-110 transition">
              <Trash2 className='size-4' />
            </button>
          </div>
        </div>
      </Link>

      {/* DELETE CONFIRMATION MODAL */}
      {showModal && (
        <dialog className='modal modal-open'>
          <div className="modal-box">
            <h3 className="font-bold text-lg text-error flex items-center gap-2">
              <Trash2 className='size-5' /> Delete Car
            </h3>

            <p className="py-4 text-base-content/10">Are you sure you want to delete
              <span className="font-semibold text-base-content">{" "} "{car.title}"</span>? <br /> This action cannot be undone.
            </p>

            <div className="modal-action">
              <button className="btn btn-ghost"
                onClick={() => setShowModal(false)}
              >Cancel</button>

              <button className="btn btn-error flex items-center gap-2" onClick={handleDelete} >
                <Trash2 className='size-4' /> Delete
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  )
}

export default CarModel;
