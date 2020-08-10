const React = require('react');
const ReactDOMServer = require('react-dom/server');

const HomeComponent = require('./dist/home');

module.exports = class Home {
  data() {
    return {
      layout: 'layout.njk',
      title: 'Test',
    };
  }

  render(context) {
    return ReactDOMServer.renderToStaticMarkup(React.createElement(HomeComponent, { context }));
  }
};
