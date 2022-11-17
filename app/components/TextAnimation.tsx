import text from 'app/styles/text.module.css'

export const TextAnimation = () => {
  return (
    <>
      <h1 className='text-center'>
        Hi Im{' '}
        <a
          href='https://github.com/ikyro'
          target='_blank'
          rel='noopener noreferrer'
          className={text.test}
        >
          .....
        </a>
      </h1>
      <p className='text-center'>I like random and stupid ideas</p>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        className='absolute hidden'
      >
        <defs>
          <filter id='squiggly-0'>
            <feTurbulence
              baseFrequency='0.025'
              numOctaves='3'
              result='noise'
              seed='0'
            />
            <feDisplacementMap in='SourceGraphic' in2='noise' scale='6' />
          </filter>
          <filter id='squiggly-1'>
            <feTurbulence
              baseFrequency='0.025'
              numOctaves='3'
              result='noise'
              seed='1'
            />
            <feDisplacementMap in='SourceGraphic' in2='noise' scale='8' />
          </filter>

          <filter id='squiggly-2'>
            <feTurbulence
              baseFrequency='0.025'
              numOctaves='3'
              result='noise'
              seed='2'
            />
            <feDisplacementMap in='SourceGraphic' in2='noise' scale='6' />
          </filter>
          <filter id='squiggly-3'>
            <feTurbulence
              baseFrequency='0.025'
              numOctaves='3'
              result='noise'
              seed='3'
            />
            <feDisplacementMap in='SourceGraphic' in2='noise' scale='8' />
          </filter>

          <filter id='squiggly-4'>
            <feTurbulence
              baseFrequency='0.025'
              numOctaves='3'
              result='noise'
              seed='4'
            />
            <feDisplacementMap in='SourceGraphic' in2='noise' scale='6' />
          </filter>
        </defs>
      </svg>
    </>
  )
}
