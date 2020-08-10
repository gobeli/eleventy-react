import React from 'react';

export default class HomeComponent extends React.Component {
  render() {
    const home = this.props.context.home;
    return (
      <div>
        <header className="home-header">
          <img className="home-header__photo" src={home.photo} alt={home.title} />
          <h1 className="home-header__title">{home.title}</h1>
        </header>
        <div className="home-intro">
          <div className="home-intro__text">{home.intro}</div>
        </div>
      </div>
    );
  }
}
