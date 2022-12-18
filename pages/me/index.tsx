import { fetchGithubRepos } from 'utils/fetcher'
import { GetStaticProps, NextPage } from 'next'
import { GITHUB_REPOSITORIES } from 'constants/github'
import { useState } from 'react'
import { Image3D } from 'components/Image3D'
import { Navbar } from 'components/Navbar'
import { RSS } from 'components/RSS'
import { Button } from 'components/Button'
import { ShowRepo } from 'components/ShowRepo'
import Head from 'next/head'

export type Props = {
  repos: Awaited<ReturnType<typeof fetchGithubRepos>>['res']
}

const dateFormat = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'medium',
})

const Portfolio: NextPage<Props> = ({ repos }) => {
  const [selectedRepo, setSelectedRepo] = useState(repos[0])

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Navbar title={"Hi, I'm Ikyro"}>
        <RSS />
      </Navbar>
      <main className='grid min-h-screen place-items-center bg-black font-courier'>
        <div className='w-80 rounded bg-white p-3 md:w-[650px]'>
          <ul className='mb-2 flex w-full items-center justify-center gap-1 md:gap-2'>
            {repos.map((repo, i) => (
              <li
                key={i}
                onClick={() => {
                  setSelectedRepo(repo)
                }}
              >
                <Button repo={repo} />
              </li>
            ))}
          </ul>
          <ShowRepo dateFormat={dateFormat} selected={selectedRepo}>
            <Image3D
              src={`/assets/${selectedRepo?.name}.png`}
              alt={`screenshot of ${selectedRepo?.homepageUrl}`}
              width={300}
              height={300}
              className='h-auto w-auto max-w-full select-none'
            />
          </ShowRepo>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { res } = await fetchGithubRepos(GITHUB_REPOSITORIES)

  return {
    props: {
      repos: res,
    },
  }
}

export default Portfolio
