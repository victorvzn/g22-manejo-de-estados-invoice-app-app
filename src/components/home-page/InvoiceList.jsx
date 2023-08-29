import InvoiceRow from "./InvoiceRow"

const InvoiceList = ({ invoices }) => {
  return (
    <main className="w-[940px] m-auto flex flex-col gap-5">
      {invoices && invoices.map(invoice => {
        return <InvoiceRow key={invoice.id} invoice={invoice} />
      })}
    </main>
  )
}

export default InvoiceList