const Header = () => {
  return (
    <header className="w-[740px] mx-auto  bg-red-900 my-20 flex justify-between items-center">
      <div className="text-white">
        <h1 className="text-4xl font-extrabold">Invoices</h1>
        <span>There are 7 total invoices</span>
      </div>

      <button className="bg-indigo-400 rounded-full px-5 py-3 font-extrabold text-white">
        New Invoice
      </button>
    </header>
  )
}

export default Header