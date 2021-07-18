
const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const requests = require('./requests');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...requests
};