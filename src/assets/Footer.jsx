import React from 'react'

function Footer() {
  return (
    <>
      <div className="w-full text-xl  leading-9 bg-orange-600  text-white px-4 flex flex-col ">
       <div className="">If you need help using this app or would like to work with me, please get in touch with me by click at:-</div>
       <div className=" flex flex-col sm:flex-row justify-center sm:justify-between ">
        <a className='hover:text-black font-serif italic' href="mailto:malikrizwan1076@gmail.com">E-mail</a>
        <a className='hover:text-black font-serif italic' href="tel:+923249422392">Call</a>
        <a className='hover:text-black font-serif italic' href="https://wa.me/+923249422392/?text=I have seen your iTask App ">Whatsapp</a>
        <a className='hover:text-black font-serif italic' href="https://www.linkedin.com/in/malik-muhammad-rizwan-0a5394289">LinkedIn</a>
       </div>
      </div>
    </>
  )}
export default Footer
