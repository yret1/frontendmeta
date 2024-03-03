import Scooter from "../assets/Scooter.svg"

type CardProps = {
    title: string,
    description: string,
    image: string
  };

export const Card = (props : CardProps) => {
  return (
    <article className="flex flex-col justify-between items-center gap-4 bg-emerald-200 p-4 rounded-lg w-80 h-[550px]">
        <img src={props.image} alt="Food IMG" />
        <h2 className="font-bold text-center text-xl">{props.title}</h2>
        <p className="font-semibold text-center">{props.description}</p>
        <button className="flex justify-start gap-4 items-center hover:text-yellow-300 fill-yellow-300">
            <img src={Scooter} alt="Scooter" />
            <span className="text-xl font-bold">Order Now</span>
        </button>

    </article>
  )
}
