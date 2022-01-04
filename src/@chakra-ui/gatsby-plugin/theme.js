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
      //https://smart-swatch.netlify.app/#707a6c
      pink: '#fdf0e7',
      peach: '#f7c59f',
      50: '#ecf5e8',
      100: '#d5dcd2',
      200: '#bcc3b9',
      300: '#a2ab9f',
      400: '#899385',
      500: '#707a6c',
      600: '#565f53',
      700: '#3c443a',
      800: '#212a21',
      900: '#041107',
    },
    peach: {
      50: '#fff0df',
      100: '#fbd4b6',
      200: '#f5b889',
      300: '#f09b5b',
      400: '#ec802e',
      500: '#d36716',
      600: '#a44f10',
      700: '#76380a',
      800: '#482103',
      900: '#1d0900',
    },
    pink: {
      50: '#ffe9e7',
      100: '#f2c4c1',
      200: '#e49e9a',
      300: '#d87874',
      400: '#cc534d',
      500: '#b23933',
      600: '#8b2c27',
      700: '#651e1b',
      800: '#3e110f',
      900: '#1c0202',
    },
    gray: {
      50: '#f8f0f2',
      100: '#d8d8d9',
      200: '#bfbfbf',
      300: '#a5a5a5',
      400: '#8b8b8b',
      500: '#717171',
      600: '#585858',
      700: '#3f3f3f',
      800: '#262627',
      900: '#130b0d',
    },
  },
}

export default extendTheme(theme)
