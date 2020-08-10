import React from 'react';

import Home from '../pages/home';

class HomePreview extends React.Component {
  render() {
    const image = entry.getIn(['data', 'photo']);
    const photo = this.props.getAsset(image);
    const title = entry.getIn(['data', 'title']);
    const intro = entry.getIn(['data', 'intro']);
    const context = { home: { photo, title, intro } };

    return <Home context={context} />;
  }
}

CMS.registerPreviewTemplate('home', HomePreview);
