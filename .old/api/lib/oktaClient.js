const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://dev-146444.oktapreview.com',
  token: '009NZNujr3WeIXxGlbSl96nj7eeh1r2J942xKfa4SH'
});

module.exports = client;