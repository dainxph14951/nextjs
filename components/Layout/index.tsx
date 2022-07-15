import React from 'react'
import { LayoutProps } from '../../Models/Layout'
import Header from '../Header'
import Banner from '../Header/banner'
import Footer from '../Header/footer'

type Props = {}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <header>
      <Header />
      <Banner />
      </header>
      <main>
      {children}
      </main>
      <footer>
        <Footer />
      </footer>


    </div>
  )
}

export default Layout