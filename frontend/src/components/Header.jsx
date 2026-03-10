import React from 'react';
import {Link} from 'react-router';
import {PlusIcon} from 'lucide-react';

const Header = () => {
  return (
    <header className='bg-amber-300 border-b border-base-content/10'>
       <div className='ms-auto max-w-8xl p-4'>
          <div className='flex items-center justify-between'>
              <h1 className='text-3xl font-bold text-primary font-mono tracking-tight cursor-pointer'>CARRENTAL</h1>
              <div className='flex items-center gap-4'>
                  <Link to={"/create"} className="btn btn-primary cursor-crosshair">
                      <PlusIcon className='size-5'/>
                      <span> New Car </span>
                  </Link>
              </div>
          </div>
       </div>
    </header>
  )
}

export default Header;