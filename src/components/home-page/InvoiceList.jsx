import { TbChevronRight } from "react-icons/tb"

const InvoiceList = () => {
  return (
    <main className="w-[740px] m-auto">
      <article className="text-white">
        <div>
          <span>#</span>
          <span>RT3080</span>
        </div>
        <div>Due 19 Aug 2023</div>
        <div>Jensen Huang</div>
        <div>$ 1,800.90</div>
        <div>
          Paid
        </div>
        <div>
          <TbChevronRight />
        </div>
      </article>
    </main>
  )
}

export default InvoiceList