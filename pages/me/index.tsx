import { fetchGithubRepos } from 'utils/fetcher'
import { GetStaticProps, NextPage } from 'next'
import { GITHUB_REPOSITORIES } from 'constants/github'
import { useEffect, useRef, useState } from 'react'
import { Image3D } from 'components/Image3D'
import { Navbar } from 'components/Navbar'
import { RSS } from 'components/RSS'
import { useIntersectionObserver } from 'hooks/useIntersectionObserver'
import { Topic } from 'components/Topic'
import { Button } from 'components/Button'
import { A } from 'components/A'
import { ShowRepo } from 'components/ShowRepo'
import { ImageObserver } from 'components/ImageObserver'

export type Props = {
  repos: Awaited<ReturnType<typeof fetchGithubRepos>>['res']
}

const Portfolio: NextPage<Props> = ({ repos }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [selectedRepo, setSelectedRepo] = useState(repos[0])
  const { intersecting } = useIntersectionObserver({ ref })

  const dateFormat = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'medium',
  })

  console.log({ intersecting })

  return (
    <>
      <Navbar title={"Hi, I'm Ikyro"}>
        <RSS />
      </Navbar>
      <main className='grid min-h-screen place-items-center bg-black font-courier'>
        <div className='h-[600px] w-[650px] rounded bg-white p-3' ref={ref}>
          <ul className='flex w-full'>
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
            <ImageObserver
              url={selectedRepo?.homepageUrl as string}
              observer={intersecting}
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
