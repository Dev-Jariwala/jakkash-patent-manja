import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as UnauthorizeSVG } from '../../assets/SVGS/status/401-unauthorized.svg'

const Unauthorize = () => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-full tw-w-full tw-p-12">
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-space-y-4">
        <UnauthorizeSVG className="tw-w-60 tw-h-tw-w-60" />
        <h1 className="tw-text-2xl tw-font-bold tw-text-center">401 Unauthorized</h1>
        <p className="tw-text-center">You are not authorized to access this page.</p>
        <Link to="/" className="tw-text-blue-500 hover:tw-text-blue-600 tw-text-sm tw-font-semibold tw-underline">Go back to home</Link>
      </div>
    </div>
  )
}

export default Unauthorize 