import { TbChevronRight, TbCircleFilled } from "react-icons/tb"

import BaseTag from "../shared/BaseTag"

const InvoiceRow = ({ invoice }) => {
  return (
    <article className="text-white flex justify-between items-center gap-3 bg-slate-700 rounded-lg px-4 py-6">
      <div className="w-20">
        <span className="text-slate-400">#</span>
        <span className="font-bold">{invoice.code}</span>
      </div>
      <div className="w-40 font-bold">{invoice.invoice.date}</div>
      <div className="w-40 font-bold">{invoice.bill.to.client.name}</div>
      <div className="w-44 text-3xl text-right">
        {invoice.invoice.currency.symbol}
        {invoice.invoice.grandTotal}
      </div>
      <div className="w-40 flex justify-center">
        {invoice.status === 'paid' &&
          <BaseTag
            background='bg-emerald-400/20'
            textColor='text-emerald-400'
          >
            <TbCircleFilled size=".7rem" />
            {invoice.status}
          </BaseTag>
        }
        {invoice.status === 'pending' &&
          <BaseTag
            background='bg-orange-400/20'
            textColor='text-orange-400'
          >
            <TbCircleFilled size=".7rem" />
            {invoice.status}
          </BaseTag>
        }
        {invoice.status === 'draft' &&
          <BaseTag
            background='bg-slate-400/20'
            textColor='text-slate-400'
          >
            <TbCircleFilled size=".7rem" />
            {invoice.status}
          </BaseTag>
        }
      </div>
      <div className="w-5 cursor-pointer">
        <TbChevronRight />
      </div>
    </article>
  )
}

export default InvoiceRow