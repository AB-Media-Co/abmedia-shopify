import React, { useState } from 'react'
import ContactForm from './ContactForm'

export default function PopupButton({
  text = 'Transform Your Business Today >',
  title = "Let's Build Your Shopify Store!",
  buttonText = 'Submit & Book Strategy Call',
  onSubmit = data => console.log(data),
  className = 'bg-[#D5FF3F] text-black font-medium text-3xl fixed z-50 w-full bottom-0 px-8 py-2 hover:bg-lime-300 transition-colors '
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Trigger Button */}
      <button
        className={
          `${className}`
        }
        onClick={() => setIsOpen(true)}
      >
        {text}
      </button>

      {/* Popup Form */}
      <ContactForm
        isPopup={true}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        buttonText={buttonText}
        onSubmit={onSubmit}
      />
    </>
  )
}
