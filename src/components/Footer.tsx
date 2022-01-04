import * as React from 'react'

import { Box, Link, Stack } from '@chakra-ui/react'

import { Copyright } from './Copyright'
import GatsbyLink from 'gatsby-link'
import { Logo } from './Logo'
import { SocialMediaLinks } from './SocialMediaLinks'

const Footer = () => (
  <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Logo />
        <Stack>
          <Link as={GatsbyLink} to="/privacy">
            Privacy
          </Link>
          <Link as={GatsbyLink} to="/terms">
            Terms
          </Link>
          <Link as={GatsbyLink} to="/returns">
            Returns, Refunds & Credits
          </Link>
        </Stack>
        <SocialMediaLinks />
      </Stack>
      <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
    </Stack>
  </Box>
)

export default Footer
