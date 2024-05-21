import { Button } from "../components";

function SuperQuality() {
  return (
    <section id="about-us" className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-cyan-500'> Super </span>
          <span className='text-cyan-500'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' iconURL='/icons/arrow-right.png'/>
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src='images/shoe8.png'
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default SuperQuality
