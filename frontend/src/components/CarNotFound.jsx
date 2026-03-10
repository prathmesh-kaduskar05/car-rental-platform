import React from 'react';
import { Car } from 'lucide-react';
import {Link} from 'react-router';

const CarNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      <div className="bg-primary/10 rounded-full p-8">
      <Car className='size-10 text-primary'/>
      </div>

      <h3 className="text-2xl font-bold"> No Cars Yet</h3>
      <p className="text-base-content/70">
        Ready to add cars? Add first car to the carRental.
      </p>

      <Link to='/create' className='btn btn-primary'>
        Add First Car to the CarRental
      </Link>
    </div>
  )
}

export default CarNotFound;