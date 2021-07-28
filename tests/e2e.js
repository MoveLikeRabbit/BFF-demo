const Rize = require('rize')

const rize = new Rize({ headless: false })
rize
  .goto('https://github.com/')
  .type('input.header-search-input', 'node')
  .press('Enter')
  .waitForNavigation()
  .saveScreenshot('searching-node.png')
  .end()