import { MouseEventHandler } from "react"

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>
  label: string
  disabled?: boolean
}

function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="button"
      className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {label}
    </button>
  )
}

export default Button