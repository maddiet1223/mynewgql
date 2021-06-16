import React, { Component } from "react";

class LyricList extends Component {
  rederLyrics() {
    return this.props.lyrics.map(({ id, content }) => {
      return (
        <li key={id} className="collection-item">
          {content}
        </li>
      );
    });
  }
  render() {
    return <ul className="collection">{this.rederLyrics()}</ul>;
  }
}

export default LyricList;