const path = require('path')

/** @type {import('@kitajs/cli').KitaConfig} */
module.exports = {
  tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  src: path.resolve(__dirname, 'src'),
  cwd: path.resolve(__dirname)
}
