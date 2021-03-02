import React, { useContext } from 'react'
import styled, { ThemeContext as StyledThemeCopntext } from 'styled-components'
import { Heading, Text, BaseLayout, Image, SvgProps } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import { ThemeContext } from 'contexts/ThemeContext'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/pepe/3.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 76px;
  padding-top: 60px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/pepe/3.png'), url('/images/pepe/3b.png');
    background-position: left center, right center;
    height: 165px;
  }
`

interface LogoProps extends SvgProps {
  isDark: boolean
}

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()
  const { isDark } = useContext(ThemeContext)

  return (
    <Page>
      <Hero>
        <CardImage
          src={isDark ? 'images/pepe/HeadLogoBlack.png' : 'images/pepe/HeadLogoWhite.png'}
          width={500}
          height={370}
        />
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <TwitterCard />
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
