import React, {useState} from 'react'
import { PaystackButton } from 'react-paystack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const publicKey = "pk_test_2be58d3db429a3cdb4c9514a69cd374d6fed9243"
  const [email, setEmail] = useState("")
  const [amount, setAmount] = useState("")

  const tools = {
    email, amount: amount * 100, publicKey, text: "Pay Now",
    onSuccess: () => toast.success("Thanks for doing business with us! 😀"),
    onClose: () => toast.warn("See You Again"),
  }
  return (
    <div className='bg-black flex flex-col h-[100vh] items-center justify-center gap-5'>
      <form className='flex flex-col gap-5 font-semibold'>
          <input className='w-[20vw] h-[50px] outline-none px-3 max-md:w-[80vw] max-md:py-2' type="email" name="email" id="email" placeholder='Enter Your Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
          <input className='w-[20vw] h-[50px]  outline-none px-3 max-md:w-[80vw] max-md:py-2' type="number" name="number" id="amount" placeholder='Amount' value={amount} onChange={(e)=> setAmount(e.target.value)} />
      </form>
      <PaystackButton className='text-black px-3 font-semibold py-2 rounded-3xl bg-white' {...tools} />
      <ToastContainer />
    </div>
  )
}

export default App


