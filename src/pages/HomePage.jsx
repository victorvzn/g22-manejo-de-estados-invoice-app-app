// rafce

import { useEffect, useState } from "react"
import Header from "../components/home-page/Header"
import InvoiceList from "../components/home-page/InvoiceList"

import { fetchInvoices } from "../services/invoices"

const HomePage = () => {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    // En este caso se renderiza por primera vez, por el parámetro con el []
    fetchInvoices()
      .then((invoices) => setInvoices(invoices) )
  }, [])

  return (
    <>
      <Header />

      {/* {JSON.stringify(invoices)} */}

      <InvoiceList invoices={invoices}  />
    </>
  )
}

export default HomePage