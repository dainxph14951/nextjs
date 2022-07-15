import React from 'react'
import { LayoutProps } from '../../Models/Layout'

type Props = {}

const emptyLayout = ({children}: LayoutProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default emptyLayout