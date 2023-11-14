'use strict'

const cloneDeep = require('fclone')

/**
 * @description Creates a backup of keys values
 *
 * @method makeLocalsBackup
 *
 * @param {Object} keys Keys
 * @param {Object} locals Locals
 *
 * @return {Object} backup Backup Locals
 */
function makeLocalsBackup (keys, locals) {
  const backup = {}

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (Object.prototype.hasOwnProperty.call(locals, key)) backup[key] = cloneDeep(locals[key])
  }

  return backup
}

/**
 * @description Returns the original keys values
 *
 * @method revertBackupedLocals
 *
 * @param  {Object} keys   Keys
 * @param  {Object} locals Locals
 * @param  {Object} backup Backup
 *
 * @return {Object} locals Reverted Locals
 */
function revertBackupedLocals (keys, locals, backup) {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    // remove key from locals
    delete locals[key]

    // revert copied key value
    if (Object.prototype.hasOwnProperty.call(backup, key)) locals[key] = backup[key]
  }

  return locals
}

/**
 * @module backup
 *
 * @requires fclone
 *
 * @type {Object}
 *
 * @prop {Function} make   Make Locals backup
 * @prop {Function} revert Revert backuped Locals
 */
module.exports = { make: makeLocalsBackup, revert: revertBackupedLocals }
