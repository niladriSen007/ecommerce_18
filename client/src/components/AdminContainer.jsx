import React, { Children } from 'react';
import { useAuth } from '../contextApi/store';

const AdminContainer = ({children}) => {

    const {auth,setAuth} = useAuth()

  return (
    <div className="flex flex-col w-[100vw] min-h-screen relative">
      <header className="bg-indigo-900 py-4">
        {/* Your header content */}
      </header>
      <main className="flex-grow bg-gray-100">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 bg-white shadow sm:rounded-lg">
                <p className='text-indigo-600 text-2xl font-extrabold'>Admin Name- <span className="text-indigo-700 text-3xl">{auth?.user?.name}</span></p>
                <p className='text-indigo-600 text-2xl font-extrabold'>Admin Email- <span className="text-indigo-700 text-3xl">{auth?.user?.email}</span></p>
                <p className='text-indigo-600 text-2xl font-extrabold'>Admin Contact- <span className="text-indigo-700 text-3xl">{auth?.user?.phone}</span></p>
          </div>
            {children}
        </div>
      </main>
      <footer className="bg-indigo-900 py-4">
        {/* Your footer content */}
      </footer>
    </div>
  );
};

export default AdminContainer;
