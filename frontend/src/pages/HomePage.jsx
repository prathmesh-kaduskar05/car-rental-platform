import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import api from '../lib/axios.js';
import Header from '../components/Header.jsx';
import CarModel from '../components/CarModel.jsx';
import CarNotFound from '../components/CarNotFound.jsx';
import { LoaderIcon, FilterIcon, CalendarIcon, MapPinIcon } from 'lucide-react';

const HomePage = () => {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)

  // New States For Advanced Filtering Logic
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [maxPrice, setMaxPrice] = useState(1000)
  const [dates, setDates] = useState({ pickup: '', return: '' })

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await api.get('/cars')
        const carData = res.data.data || []
        setCars(carData)

        if (carData.length > 0) {
          const highest = Math.max(...carData.map(c => c.pricePerDay || 0))
          setMaxPrice(highest)
        }
      } catch (error) {
        console.error('Error fetching cars:', error)
        toast.error('Failed to load cars')
      } finally {
        setLoading(false)
      }
    }
    fetchCars();
  }, [])

  // Advanced Filtering Logic
  const filteredCars = cars.filter((car) => {
    // 1. Search by Model OR Location
    const matchesSearch =
      car.carModel?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.location?.toLowerCase().includes(searchTerm.toLowerCase());

    // 2. Filter by Car Type (Sedan, SUV, etc.)
    const matchesType = selectedType === 'All' || car.carType === selectedType;

    // 3. Filter by Price
    const matchesPrice = (car.pricePerDay || 0) <= maxPrice;

    // 4. Filter by Date Availability
    // Checking if the user's requested dates fall within the car's available range
    const matchesDates = (!dates.pickup || !dates.return) || (
      new Date(car.pickupDate) <= new Date(dates.pickup) &&
      new Date(car.returnDate) >= new Date(dates.return)
    );

    return matchesSearch && matchesType && matchesPrice && matchesDates;
  })

  // Helper to reset filters
  const resetFilters = () => {
    setSearchTerm('')
    setSelectedType('All')
    setDates({ pickup: '', return: '' })
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <Header />

      <div className="max-w-7xl mx-auto p-4 mt-6">

        {/* FILTER SECTION */}
        <div className="card bg-base-100 shadow-sm mb-8">
          <div className="card-body p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">

              {/* LOCATION & MODEL SEARCH */}
              <div className="form-control">
                <label className="label-text font-bold flex items-center gap-2 mb-2">
                  <MapPinIcon size={16} /> Where & What?
                </label>
                <input
                  type="text"
                  placeholder="City or Model..."
                  className="input input-bordered w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* CAR TYPE DROPDOWN */}
              <div className="form-control">
                <label className="label-text font-bold mb-2">Car Type</label>
                <select
                  className="select select-bordered w-full"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="All">All Types</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Electric">Electric</option>
                </select>
              </div>

              {/* DATE PICKERS */}
              <div className="form-control">
                <label className="label-text font-bold flex items-center gap-2 mb-2">
                  <CalendarIcon size={16} /> Dates
                </label>
                <div className="flex gap-1">
                  <input
                    type="date"
                    className="input input-bordered input-sm w-1/2"
                    value={dates.pickup}
                    onChange={(e) => setDates({ ...dates, pickup: e.target.value })}
                  />
                  <input
                    type="date"
                    className="input input-bordered input-sm w-1/2"
                    value={dates.return}
                    onChange={(e) => setDates({ ...dates, return: e.target.value })}
                  />
                </div>
              </div>

              {/* PRICE & RESET */}
              <div className="form-control">
                <button onClick={resetFilters} className="btn btn-ghost btn-sm mb-1 self-end text-xs">Reset All</button>
                <label className="label-text font-bold mb-2">Max: ${maxPrice}/day</label>
                <input
                  type="range" min="0" max="1000" step="50"
                  className="range range-primary range-xs"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>

        {/* RESULTS AREA */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <LoaderIcon className="animate-spin size-12 text-primary mb-4" />
            <p className="text-lg font-medium">Scanning our fleet...</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FilterIcon size={20} className="text-primary" />
                {filteredCars.length} Matches Found
              </h2>
            </div>

            {filteredCars.length === 0 ? (
              <CarNotFound />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCars.map((car) => (
                  <CarModel
                    key={car._id}
                    car={car}
                    setCars={setCars}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default HomePage;