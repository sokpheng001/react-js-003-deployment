import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <section>
        <NavbarComponent/>
        <section>
            <Outlet/>
        </section>
    </section>
  )
}
