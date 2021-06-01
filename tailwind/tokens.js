const _ = require('lodash')

const btnConfig = {
  type: ['default', 'outline', 'hyperlink', 'icon'],
  style: ['primary', 'secondary', 'success', 'danger', 'ghost'],
  property: ['bg', 'border', 'text']
}

function generateTokens(config, prefix) {
  const tokens = {}
  const types = config.type
  const styles = config.style
  const properties = config.property

  types.forEach(type => {
    styles.forEach(style => {
      properties.forEach(property => {
        _.set(
          tokens,
          `${type}.${style}.${property}`,
          `var(${prefix}-${type}-${style}-${property})`
          )
      })
    })
  })

  return tokens
}

const tokens = {
  btn: generateTokens(btnConfig, '--ss-btn')
}

module.exports = tokens

console.log(JSON.stringify(tokens))
