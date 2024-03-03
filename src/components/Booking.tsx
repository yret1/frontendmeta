import { useState } from "react"

interface BookingProps {
    setBooking: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Booking : React.FC<BookingProps> = ({setBooking}) => {
    const [step, setStep] = useState(1)


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submitted')
        setBooking(false)
    }

  return (
    <section className='absolute h-[540px] w-[400px] rounded-xl shadow-2xl bg-black absolute-center z-20'>

        <form onSubmit={onSubmit}>

            {step === 1 && (
                <section className="flex flex-col gap-7 p-4 relative">
                    <button onClick={()=>setBooking(false)} className="absolute text-white hover:text-yellow-300">
                        Close
                    </button>
                <legend className="text-3xl font-bold text-white text-center">Book a Table</legend>
                <fieldset className="flex flex-col justify-center items-center gap-4">

                    <div className="">
                    <label className="text-white" htmlFor="2">2 People</label>
                    <input type="radio"  id="button" name="radio" placeholder="2" className="p-4 rounded-lg w-20" />
                    </div>
                    <div className="">
                    <label className="text-white" htmlFor="4">4 People</label>
                    <input type="radio" id="button" name="radio" placeholder="4" className="p-4 rounded-lg w-20" />
                    </div>
                    <div className="">
                    <label className="text-white" htmlFor="6">6 People</label>
                    <input type="radio" id="button" name="radio" placeholder="6" className="p-4 rounded-lg w-20" />
                    </div>
                </fieldset>
                <fieldset className="flex flex-col justify-center items-center gap-4">
                    <label className="text-white" htmlFor="date">When?</label>
                    <input type="date" name="date" required className="p-4 rounded-lg w-80" />
                    <label className="text-white" htmlFor="date">What Time?</label>

                    <input type="time" name="time" required className="p-4 rounded-lg w-80" />
                </fieldset>
                <fieldset className="flex justify-center gap-10">

                <button onClick={() => setStep(1)} className="bg-[#F4CE14] p-4 rounded-lg font-bold border-2 border-[#F4CE14] hover:border-white duration-75">Prev</button>
                <button onClick={() => setStep(2)} className="bg-[#F4CE14] p-4 rounded-lg font-bold border-2 border-[#F4CE14] hover:border-white duration-75">Next</button>
                </fieldset>
                </section>
            )}

            {step === 2 && (
                <section className="flex flex-col gap-7">
                <legend className="text-3xl font-bold text-center text-white">Confirm Booking</legend>
                <fieldset className="flex flex-col justify-center items-center gap-4">
                    <label className="text-white" htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Your Name..." required className="p-4 rounded-lg w-80" />
                    <label className="text-white" htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder="Your Email..." required className="p-4 rounded-lg w-80" />
                    <label className="text-white" htmlFor="phone">Phone</label>
                    <input type="tel" name="phone" placeholder="Your Phone..." required className="p-4 rounded-lg w-80" />
                </fieldset>

                <fieldset className="flex justify-center gap-10">
                <button onClick={() => setStep(1)} className="bg-[#F4CE14] p-4 rounded-lg font-bold border-2 border-[#F4CE14] hover:border-white duration-75">Prev</button>
                <button onClick={() => setStep(3)} className="bg-[#F4CE14] p-4 rounded-lg font-bold border-2 border-[#F4CE14] hover:border-white duration-75">Confirm</button>
                </fieldset>
                </section>
            )}

            {step === 3 && (
                <section className="flex flex-col items-center justify-center h-full gap-7 p-4 relative">
                <legend className="text-3xl font-bold text-center text-white">Booking Confirmed</legend>

                <div className="text-center w-12/12">
                <h1 className="text-white">Thank you!</h1>
                <p className="text-white">You may close this page</p>
                </div>

                <button type="submit" className="bg-[#F4CE14] p-4 rounded-lg font-bold border-2 border-[#F4CE14] hover:border-white duration-75">Close</button>
                </section>
            )}

        </form>

    </section>
  )
}
