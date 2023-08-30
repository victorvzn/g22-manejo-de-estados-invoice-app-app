import { TbSquareRoundedPlusFilled } from "react-icons/tb";

const Header = () => {
  return (
    <header className="w-[940px] mx-auto my-20 flex justify-between items-center">
      <div className="text-white">
        <h1 className="text-4xl font-medium">Invoices</h1>
        <span>There are 7 total invoices</span>
      </div>

      <button
        className="bg-[#7c5df9] hover:bg-[#6946f8] duration-300 rounded-full px-5 py-3 font-semibold text-white flex justify-between items-center gap-4"
      >
        <TbSquareRoundedPlusFilled size="2rem" />
        New Invoice
      </button>
    </header>
  )
}

export default Header