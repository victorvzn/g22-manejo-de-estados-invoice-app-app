import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import BaseTag from "../components/shared/BaseTag"

import { getInvoice } from "../services/invoices"

import { TbChevronLeft, TbCircleFilled } from "react-icons/tb"

const InvoiceViewPage = () => {
  const params = useParams()
  const [invoice, setInvoice] = useState(null)

  useEffect(() => {
    getInvoice(params.id)
      // .then(setInvoice)
      .then(invoice => setInvoice(invoice))
  }, [])

  return (
    <>
      <nav className="w-[940px] mx-auto my-12">
        <Link to='/' className="text-white hover:text-[#6946f8] duration-300 font-bold flex gap-4 items-center  ">
          <TbChevronLeft />
          Go back - {params.id}
        </Link>
      </nav>

      <header className="bg-[#1f213a] w-[940px] mx-auto flex justify-between rounded-lg px-8 py-6">
        <div className="flex items-center gap-5">
          <h3 className="text-white font-semibold">Status</h3>
          <BaseTag
            background='bg-emerald-400/20'
            textColor='text-emerald-400'
          >
            <TbCircleFilled size=".7rem" />
            <span className="capitalize">{invoice?.status}</span>
          </BaseTag>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="bg-[#262943] hover:bg-[#1b1f44] duration-300 rounded-full px-5 py-3 font-semibold text-white flex justify-between items-center gap-4"
          >
            Edit
          </button>

          <button
            className="bg-[#ef5656] hover:bg-[#ee3939] duration-300 rounded-full px-5 py-3 font-semibold text-white flex justify-between items-center gap-4"
          >
            Delete
          </button>

          <button
            className="bg-[#7c5df9] hover:bg-[#6946f8] duration-300 rounded-full px-5 py-3 font-semibold text-white flex justify-between items-center gap-4"
          >
            Mark as Paid
          </button>
        </div>
      </header>

      <main className="w-[940px] mx-auto bg-[#1f213a] p-10 mt-6 rounded-lg text-white">
        <div className="flex justify-between">
          <div className="text-3xl">
            <span className="text-slate-400">#</span>
            <span className="font-extrabold">{invoice?.code}</span>
            <div className="text-xl mt-1">{invoice?.invoice?.project?.description}</div>
          </div>
          <div className="text-sm text-right">
            <div>Line 1</div>
            <div>Line 2</div>
            <div>Line 3</div>
            <div>Line 4</div>
          </div>
        </div>

        <div className="grid grid-cols-3 justify-between w-full">
          <div className="flex flex-col gap-10">
            <div>
              <div className="text-lg">Invoice Date</div>
              <div className="text-xl font-extrabold">21 Aug 2023</div>
            </div>
            <div>
              <div className="text-lg">Payment Due</div>
              <div className="text-xl font-extrabold">21 Set 2023</div>
            </div>
          </div>

          <div>
            <div className="text-lg">Bill to</div>
            <div className="text-xl font-extrabold mb-2">Alex Grim</div>
            <div className="text-sm">Line 1</div>
            <div className="text-sm">Line 2</div>
            <div className="text-sm">Line 3</div>
            <div className="text-sm">Line 4</div>
          </div>

          <div>
            <div className="text-lg">Sent to</div>
            <div className="text-xl font-extrabold mb-2">alexgrim@mail.com</div>
          </div>
        </div>

        <table className="bg-[#252945] w-full rounded-lg mt-10">
          <thead>
            <th className="p-6">Item Name</th>
            <th className="p-6 w-44">QTY</th>
            <th className="p-6 w-44">Price</th>
            <th className="p-6 w-44">Total</th>
          </thead>
          <tbody>
            <tr>
              <td className="p-6 text-xl font-bold">Xyz</td>
              <td className="p-6 text-xl font-bold">1</td>
              <td className="p-6 text-xl font-bold">$ 156.00</td>
              <td className="p-6 text-xl font-bold">$ 156.00</td>
            </tr>
            <tr>
              <td className="p-6 text-xl font-bold">Xyz</td>
              <td className="p-6 text-xl font-bold">1</td>
              <td className="p-6 text-xl font-bold">$ 156.00</td>
              <td className="p-6 text-xl font-bold">$ 156.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-[#0b0e16]">
              <td className="p-6" colSpan={2}>Amount Due</td>
              <td className="p-6 text-4xl font-bold text-right" colSpan={2}>$ 556.00</td>
            </tr>
          </tfoot>
        </table>
      </main>

      <pre className="text-white">{JSON.stringify(invoice, null, 2)}</pre>

    </>
  )
}

export default InvoiceViewPage