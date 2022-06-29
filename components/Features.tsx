import React from 'react'
import { Box, Cards, FeatureCard } from '../styles/features'
import { features } from '../constants/features'

function Features() {
  return (
    <Box>
      <Cards>
        {features &&
          features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} image={feature.image} description={feature.description} />
          ))}
      </Cards>
    </Box>
  )
}

export default Features
