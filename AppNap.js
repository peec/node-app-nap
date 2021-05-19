const addon = require('./build/Release/AppNap.node')

module.exports = {
  disable: function (reason = '') {
    if (process.platform !== 'darwin') {
      throw new Error('System is not macOS')
    }

    if (!reason || reason.length === 0 || typeof reason !== 'string') {
      throw new Error('Argument of type string expected')
    }

    return addon.disable(reason)
  }

}
