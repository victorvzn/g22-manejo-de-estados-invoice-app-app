import { Link } from "react-router-dom"

import BaseTag from "../components/shared/BaseTag"

import { TbChevronLeft, TbCircleFilled } from "react-icons/tb"

const InvoiceViewPage = () => {
  return (
    <>
      <nav className="w-[940px] mx-auto">
        <Link to='/' className="text-white hover:text-[#6946f8] duration-300 font-bold flex gap-5 items-center mt-12 ">
          <TbChevronLeft />
          Go back
        </Link>
      </nav>

      <header className="bg-[#1f213a]">
        <div>
          <h3 className="text-white">Status</h3>
          <BaseTag
            background='bg-emerald-400/20'
            textColor='text-emerald-400'
          >
            <TbCircleFilled size=".7rem" />
            <span className="capitalize">Paid</span>
          </BaseTag>
        </div>

        <div>
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

      <main>

      </main>
    </>
  )
}

export default InvoiceViewPage