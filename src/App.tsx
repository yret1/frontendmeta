import Logo from "./assets/Logo.png"
import Egg from "./assets/egg.png"
import Banner from "./assets/Banner.png"
import Pasta from "./assets/Pasta.png"
import Salad from "./assets/Salad.png"

import { useState } from "react"

import { Card } from "./components/Card"
import { Booking } from "./components/Booking"

function App() {


  const [booking, setBooking] = useState(false)

  type Card = {
    title: string,
    description: string,
    image: string
  }
  const cards: Card[] = [
    {
      title: "Pasta Royale",
      description: "Treat yourself like royalty at Pasta Royale with our mouthwatering Royal Fusilli Fiorentina: al dente fusilli in a creamy spinach and parmesan sauce, topped with grilled chicken, cherry tomatoes, and basil.",
      image: Pasta
    },
    {
      title: "Mediterrenan Salad",
      description: "Enjoy a taste of the Mediterranean with our refreshing salad: crisp lettuce, tomatoes, cucumbers, olives, feta cheese, and zesty lemon vinaigrette.",
      image: Salad
    },
    {
      title: "Seaside Eggs",
      description: "Start your day with our Seaside Eggs: two poached eggs on a bed of smoked salmon and avocado, topped with hollandaise sauce and served with a side of fresh fruit.",
      image: Egg
    }

  ]

  return (
    <>
     {booking && <Booking setBooking={setBooking}/>}
      <header className="w-screen h-20 flex justify-center items-center py-10">
        <section className="w-4/12 flex justify-center items-center p-4">
          <img className="h-11/12" src={Logo} alt="" />
        </section>
        <nav className="w-8/12 flex justify-center items-center">
        <ul className="w-8/12 flex justify-center items-center gap-8">
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Menu</a></li>
          <li><a href="">Reservations</a></li>
          <li><a href="">Order Online</a></li>
          <li><a href="">Login</a></li>
        </ul>
        </nav>
      </header>
      <main className="py-10 overflow-x-hidden ">
        <section className="bg-[#495E57] h-96 flex justify-center items-center">
          <section className="flex-1 flex justify-center items-center">
            <article className="w-4/12 text-center flex flex-col gap-4 justify-center items-center">
              <h1 className="text-[#F4CE14] font-bold text-3xl">Little Lemon</h1>
              <p className="text-2xl text-white">We are a family owned
                  Mediterranean resturant
                  focused on traditional
                  recepies served with a modern
                  twist.
              </p>
              <button onClick={() => setBooking(true)} className="bg-[#F4CE14] p-4 rounded-lg font-bold border-2 border-[#F4CE14] hover:border-white duration-75">
                <a className="text-black">Reserve A Table</a>
              </button>
            </article>

          </section>
          <section className="flex-1 relative">

            <img className="absolute bottom-[-360px] left-60" src={Banner} alt="" />
          </section>
        </section>


        <section className=" flex flex-col gap-20 justify-center items-center py-52 min-h-96">
          <nav className="flex w-screen justify-center items-center">
            <fieldset className="flex-1 text-center ">
              <h1 className="font-bold text-3xl">This Weeks Specials!</h1>
            </fieldset>

            <fieldset className="flex-1 flex justify-center items-center">
              <button className="bg-[#F4CE14] p-4 rounded-lg font-bold">Online Menu</button>
            </fieldset>
          </nav>
          <section className="grid grid-cols-3 gap-10 place-items-center">

            {cards.map((card, index) => {
              return (
                <Card key={index} title={card.title} description={card.description} image={card.image} />
              )
            })}

          </section>

        </section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
