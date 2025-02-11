import { colors } from './colors'
import { shadows } from './shadows'

const createColorPalette = (name: string) =>
  Array.from({ length: 12 }, (_, i) => i + 1).reduce(
    (acc, scale) => ({
      ...acc,
      [scale]: `${name}.${scale}`,
      ['a' + scale]: `${name}.a${scale}`,
    }),
    {},
  )

export const semanticTokens = {
  colors: {
    ...colors,
    'accent.default': 'teal.9',
    accent: {
      ...createColorPalette('teal'),
      fg: 'white',
      emphasized: 'teal.10',
    },

    'border.default': 'gray.7',
    border: {
      muted: 'gray.6',
      subtle: 'gray.4',
      disabled: 'gray.5',
      outline: 'gray.a9',
      accent: 'teal.9',
    },
    'fg.default': 'gray.12',
    fg: {
      default: 'gray.12',
      muted: 'gray.11',
      subtle: 'gray.10',
      disabled: 'gray.7',
    },
    'bg.default': { default: 'white', _dark: 'gray.2' },
    bg: {
      canvas: 'gray.1',
      subtle: 'gray.2',
      muted: { default: '{colors.gray.3}', _dark: '{colors.gray.4}' },
      emphasized: { default: '{colors.gray.4}', _dark: '{colors.gray.5}' },
      disabled: { default: '{colors.gray.3}', _dark: '{colors.gray.4}' },
    },

    gray: createColorPalette('sage'),
  },
  shadows,
}
