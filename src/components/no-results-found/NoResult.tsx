import NoResultImage from "../../assets/image/no_result.svg";
const NoResult = () => {
  return (
    <div className='font-urbanist flex flex-col justify-center items-center mt-10'>
        <img src={NoResultImage} className="min-h-36 h-48 w-full object-contain self-stretch"/>
        <h1 className='text-3xl font-semibold'>No results found</h1>
        <p className='text-base'>Please try again.</p>
    </div>
  )
}

export default NoResult;