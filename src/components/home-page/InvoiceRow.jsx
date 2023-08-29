import { TbChevronRight, TbCircleFilled } from "react-icons/tb"

const InvoiceRow = () => {
  return (
    <article className="text-white flex justify-between items-center gap-3 bg-slate-700 rounded-lg px-4 py-6">
      <div className="w-20">
        <span className="text-slate-400">#</span>
        <span className="font-bold">RT3080</span>
      </div>
      <div className="w-40 font-bold">Due 19 Aug 2023</div>
      <div className="w-40 font-bold">Jensen Huang</div>
      <div className="w-44 text-3xl text-right">$ 1,800.90</div>
      <div className="w-40 flex justify-center">
        <div className="w-[120px] py-3 px-8 rounded-md text-center flex justify-between items-center gap-2 bg-emerald-400/20 text-emerald-400">
          <TbCircleFilled size=".7rem" />
          Paid
        </div>
      </div>
      <div className="w-5 cursor-pointer">
        <TbChevronRight />
      </div>
    </article>
  )
}

export default InvoiceRow