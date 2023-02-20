type Props = {
    name: string;
    description?: string;
    image: string;
  };
  
  const Class = ({ name, description, image }: Props) => {
    const overlayStyles = `p-5 absolute z-30 flex
    h-[338px] w-[450px] flex-col items-center justify-center
    whitespace-normal bg-gray-600 text-center text-white
    opacity-0 transition duration-300 hover:opacity-90`;
  
    return (
      <li className="relative mx-5 inline-block h-[338px] w-[450px] ">
        <div className={overlayStyles}>
          <p className="text-2xl">{name}</p>
          <p className="mt-5">{description}</p>
        </div>
        <img className="h-[338px] w-[450px]" alt={`${image}`} src={image} />
      </li>
    );
  };
  
  export default Class;