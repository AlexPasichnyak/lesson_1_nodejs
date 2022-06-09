const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);
const api = 'api.ipify.org';

const getIP = async () => {
  const { stdout } = await exec(`curl ${api}`);
  return stdout || '0.0.0.0';
};

module.exports = getIP;
