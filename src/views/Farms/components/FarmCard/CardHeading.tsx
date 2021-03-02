import React, { useContext } from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from '@pancakeswap-libs/uikit'
import { ThemeContext } from 'contexts/ThemeContext'
import { CommunityTag, CoreTag, RiskTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  risk?: number
  farmImage?: string
  tokenSymbol?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({ lpLabel, multiplier, risk, farmImage, tokenSymbol }) => {
  const { isDark } = useContext(ThemeContext)
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <Image
        src={isDark ? `images/farms/${farmImage}-white.png` : `images/farms/${farmImage}-black.png`}
        alt={tokenSymbol}
        width={64}
        height={64}
      />
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading mb="4px">{lpLabel}</Heading>
        <Flex justifyContent="center">
          {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />} */}
          <RiskTag risk={risk} />
          <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
