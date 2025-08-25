import React, { useState } from 'react'
import ContactForm from './ContactForm'

export default function PopupButton({
  text = 'Transform Your Business Today >',
  title = "Let's Build Your Shopify Store!",
  buttonText = 'Submit & Book Strategy Call',
  onSubmit = data => console.log(data),
  // belowtext = 'Starting At ₹99,999',
  belowtextcss = 'block',
  className = 'bg-[#D5FF3F] text-black  cursor-pointer font-medium text-3xl fixed z-50 w-full bottom-0 px-8 py-2 hover:bg-lime-300 transition-colors '
}) {
  const [isOpen, setIsOpen] = useState(false)
  const isIndia =
    typeof window !== 'undefined' &&
    window.location.pathname.toLowerCase().includes('/in')

  const belowtext = isIndia ? 'Starting At ₹99,999' : 'Starting At $999' 

  return (
    <>
      {/* Trigger Button */}
      <div className='flex flex-col'>
        <button
          className={
            `${className} cursor-pointer`
          }
          onClick={() => setIsOpen(true)}
        >
          {text}
        </button>
        <div className={`text-white  mt-2 text-center ${belowtextcss}`}>{belowtext}</div>

      </div>

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
