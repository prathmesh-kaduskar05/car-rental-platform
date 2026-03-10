import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import api from '../lib/axios';
import toast from 'react-hot-toast';
import { LoaderIcon, Trash2Icon, ArrowLeftIcon } from 'lucide-react';

const CarDetailPage = () => {
  const [car, setCar] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const fetchCar = async () => {
      try {

        const res = await api.get(`/cars/${id}`)
        // controller sends { success: true, data: booking }, 
        // access res.data.data
        setCar(res.data.data)
      } catch (error) {
        console.error("Error fetching car: ", error)
        toast.error("Failed to fetch the car")
      } finally {
        setLoading(false);
      }
    };

    fetchCar();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this car?")) { return; }

    try {
      await api.delete(`/cars/${id}`)
      toast.success("Car deleted successfully")
      navigate('/')
    } catch (error) {
      console.error('Error deleting car: ', error)
      toast.error('Failed to delete car')
    }
  }

  const handleSave = async () => {

    if (!car.userName || !car.userEmail || !car.carModel || !car.location ||
      !car.imageURL || !car.pickupDate || !car.returnDate || !car.pricePerDay) {
      toast.error('Please fill all required rental fields');
      return;
    }

    setSaving(true);
    try {
      await api.put(`/cars/${id}`, {
        userName: car.userName,
        userEmail: car.userEmail,
        carModel: car.carModel,
        carType: car.carType,
        year: Number(car.year),
        location: car.location,
        imageURL: car.imageURL, 
        pickupDate: car.pickupDate,
        returnDate: car.returnDate,
        pricePerDay: Number(car.pricePerDay), 
        status: car.status || "Pending" 
      });

      toast.success('Booking updated successfully');
      navigate('/');
    } catch (error) {
      console.error('Update Error:', error.response?.data);
      toast.error(error.response?.data?.message || 'Update failed');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className='animate-spin size-10' />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to='/' className='flex btn btn-ghost mb-0 rounded-full p-4'>
              <ArrowLeftIcon className='size-5 mr-2' />Back to Cars
            </Link>

            <button onClick={handleDelete} className="btn btn-error btn-outline">
              <Trash2Icon className='h-5 w-5 mr-2' /> Delete Car
            </button>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className='card-body'>
              <h2 className="card-title mb-4">Edit Booking Details</h2>

              {/* USERNAME */}
              <div className="form-control mb-4">
                <label className="label"><span className='label-text'>User Name</span></label>
                <input type="text" className="input input-bordered" value={car?.userName || ""}
                  onChange={(e) => setCar({ ...car, userName: e.target.value })} />
              </div>

              {/* USEREMAIL */}
              <div className="form-control mb-4">
                <label className="label"><span className='label-text'>User Email</span></label>
                <input type="email" className="input input-bordered" value={car?.userEmail || ""}
                  onChange={(e) => setCar({ ...car, userEmail: e.target.value })} />
              </div>

              {/* CARMODEL */}
              <div className="form-control mb-4">
                <label className="label"><span className='label-text'>Car Model</span></label>
                <input type="text" className="input input-bordered" value={car?.carModel || ""}
                  onChange={(e) => setCar({ ...car, carModel: e.target.value })} />
              </div>

              {/* LOCATION */}
              <div className="form-control mb-4">
                <label className="label"><span className='label-text'>Location</span></label>
                <input type="text" className="input input-bordered" value={car?.location || ""}
                  onChange={(e) => setCar({ ...car, location: e.target.value })} />
              </div>

              {/* IMAGE URL */}
              <div className="form-control mb-4">
                <label className="label"><span className='label-text'>Image URL</span></label>
                <input
                  type="text"
                  placeholder="https://example.com/car.jpg"
                  className="input input-bordered"
                  value={car?.imageURL || ""}
                  onChange={(e) => setCar({ ...car, imageURL: e.target.value })}
                />
              </div>

              {/* PICKUPDATE - Changed to type="date" */}
              <div className="form-control mb-4">
                <label className='label'><span className="label-text">Pickup Date</span></label>
                <input type="date" className="input input-bordered" value={car?.pickupDate?.split('T')[0] || ""}
                  onChange={(e) => setCar({ ...car, pickupDate: e.target.value })} />
              </div>

              {/* RETURNDATE - Changed to type="date" */}
              <div className="form-control mb-4">
                <label className='label'><span className="label-text">Return Date</span></label>
                <input type="date" className="input input-bordered" value={car?.returnDate?.split('T')[0] || ""}
                  onChange={(e) => setCar({ ...car, returnDate: e.target.value })} />
              </div>

              {/* STATUS */}
              <div className="form-control mb-4">
                <label className="label"><span className='label-text'>Status (e.g., Pending)</span></label>
                <input type="text" className="input input-bordered" value={car?.status || ""}
                  onChange={(e) => setCar({ ...car, status: e.target.value })} />
              </div>

              {/* PRICE PER DAY */}
              <div className="form-control mb-4">
                <label className="label"><span className='label-text'>Price Per Day</span></label>
                <input
                  type="number"
                  className="input input-bordered"
                  value={car?.pricePerDay || ""}
                  onChange={(e) => setCar({ ...car, pricePerDay: e.target.value })}
                />
              </div>

              <div className="card-actions justify-end mt-6">
                <button className="btn btn-primary px-8" disabled={saving} onClick={handleSave}>
                  {saving ? "Saving ..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetailPage;