interface ProductProps {
  imgURL: string;
  name: string;
  price: string;
}

function popularProductCard({ 
  imgURL, 
  name, 
  price 
}: ProductProps) {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
      <div className='mt-8 flex justify-start gap-2.5'>
        <img src='/icons/star.png' alt='rating icon' width={30} height={14} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-cyan-500 text-2xl leading-normal'>
        {price}
      </p>
    </div>
  )
}

export default popularProductCard
