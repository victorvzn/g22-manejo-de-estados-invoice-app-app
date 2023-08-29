import InvoiceRow from "./InvoiceRow"

const InvoiceList = () => {
  return (
    <main className="w-[940px] m-auto flex flex-col gap-5">
      <InvoiceRow />
      <InvoiceRow />
      <InvoiceRow />
      <InvoiceRow />
      <InvoiceRow />
    </main>
  )
}

export default InvoiceList