import Link from 'next/link'
import React from 'react'
import EmptyLayout from '../components/Layout/empty'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div>
      <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
  <div className="bg-white px-16 py-14 rounded-md text-center">
    <h1 className="text-xl mb-4 font-bold text-slate-500">Website address does not exist</h1>
    <Link  href="/">
    <button className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">Back to main page</button>
    </Link>
  
  </div>
</div>
    </div>
  )
}

NotFound.Layout = EmptyLayout
export default NotFound