import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Error404() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <p className="text-base font-semibold text-black">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sorry, we couldn&apos:t find the page you're looking for.
        </p>
        <div className="mt-4 flex items-center justify-center">
          <NavLink to="/"
            className="inline-flex items-center rounded-md border border-black bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ArrowLeft size={16} className="mr-2" />
            Go back
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Error404