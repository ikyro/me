const Error404 = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center gap-3 bg-black font-pixel text-white'>
      <h1 className='flex items-center justify-center text-center text-6xl'>
        404 | <span className='ml-5 text-xs'>girlfriend reveal</span>
      </h1>

      <iframe
        src='https://www.youtube-nocookie.com/embed/NSMRQIRlGAw?&autoplay=1'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        className='h-60 w-[350px] md:h-72 md:w-96 lg:h-[600px] lg:w-[900px]'
        allowFullScreen
      />
    </div>
  )
}

export default Error404
