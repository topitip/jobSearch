const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'PT Mono',
          ...defaultTheme.fontFamily.mono
        ]
      }
    }
  }
}
