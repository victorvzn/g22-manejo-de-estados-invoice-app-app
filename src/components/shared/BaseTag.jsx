const BaseTag = ({ children, background, textColor }) => {
  return (
    <div
      className={`w-[120px] py-3 px-4 rounded-md flex justify-center items-center  gap-2 ${background} ${textColor}`}
    >
      {children}
    </div>
  )
}

export default BaseTag

