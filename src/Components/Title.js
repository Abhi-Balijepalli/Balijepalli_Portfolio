import React, { Component } from "react";

class Title extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var networks = this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer id="about" style={{ background: "linear-gradient(to bottom, #234a8c, #183d7c )", marginBottom:'-15px', marginTop:'-10px' }}>
        <div className="mx-auto mb-5">
          <h1>
          <span>Abhi Balijepalli</span>
          </h1>
          <div className="social-links">{networks}</div>
        </div>
      </footer>
    );
  }
}

export default Title;
