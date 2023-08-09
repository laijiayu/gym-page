

type Props = {
    name: string,
    description?: string,
    image: string
}

const Classes = ({ name, description, image }: Props) => {
    return (
        <li className="relative h-[380px] w-[450px] mx-5 inline-block">
            <div className="absolute p-5 z-1 h-[380px] w-[450px] flex flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-300 hover:opacity-80">
                <p className="text-2xl">{name}</p>
                <p className="mt-5">{description}</p>
            </div>
            <img src={image} alt={`${image}`} />
        </li>
    )
}

export default Classes