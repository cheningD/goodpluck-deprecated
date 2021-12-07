// src/@chakra-ui/gatsby-plugin/theme.js
import { extendTheme } from '@chakra-ui/react'
const theme = {
  fonts: {
    body: 'hk_groteskregular, sans-serif',
    heading: 'hk_grotesksemibold, sans-serif',
    title: 'Bebas Neue, sans-serif',
  },
  colors: {
    brand: {
      pink: '#fdf0e7',
      peach: '#f7c59f',
      50: '#D1DDCD',
      100: '#BFCBBB',
      200: '#AEBAAA',
      300: '#9CA898',
      400: '#8A9686',
      500: '#788474',
      600: '#667262',
      700: '#546050',
      800: '#424E3E',
      900: '#313D2D',
    },
    peach: {
      50: '#FFFFF8',
      100: '#FFFFE6',
      200: '#FFFBD5',
      300: '#FFE9C3',
      400: '#FFD7B1',
      500: '#f7c59f',
      600: '#E5B38D',
      700: '#D3A17B',
      800: '#C18F69',
      900: '#B07E58',
    },
  },
}

export default extendTheme(theme)
