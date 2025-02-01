import React from "react"

export const Button = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <button
      className={`relative rounded-[20px] glowing_button text-white font-semibold px-3 py-0.5 ${className}`}
    >
      <span className="glowing-button_effect"></span>
      <span className="glowing-button_top_layer "></span>
      <span className="glowing-button_text opacity-90  z-50 relative font-clgk font-medium">
        {children}
      </span>
    </button>
  )
}
