// Core
import React, { Component } from "react";
import { connect } from "react-redux";
import { hot } from "react-hot-loader";

// Instruments
import Styles from "./styles.m.css";
import {
  selectCurrentPhoto,
  selectSelectedPhotoIndex,
} from "../../../bus/gallery/selectors";
import {
  showNextPhoto,
  showPhoto,
  showPrevPhoto,
} from "../../../bus/gallery/actions";
import cn from "classnames/bind";

@hot(module)
class Gallery extends Component {
  constructor(props) {
    super(props);
    this.cx = cn.bind(Styles);
  }

  getClassName = (index) => {
    const { selectedPhotoIndex } = this.props;
    const { cx } = this;
    return cx({ buttonActive: selectedPhotoIndex === index });
  };

  showSelectedPhoto = (e) => {
    const { showPhoto } = this.props;
    showPhoto(e.target.value);
  };

  render() {
    const { currentPhoto, showNextPhoto, showPrevPhoto } = this.props;

    return (
      <section className={Styles.gallery}>
        <img src={currentPhoto} />
        <div>
          <button onClick={showPrevPhoto}>←</button>
          <button
            className={this.getClassName(0)}
            onClick={this.showSelectedPhoto}
            value="0"
          >
            1
          </button>
          <button
            className={this.getClassName(1)}
            onClick={this.showSelectedPhoto}
            value="1"
          >
            2
          </button>
          <button
            className={this.getClassName(2)}
            onClick={this.showSelectedPhoto}
            value="2"
          >
            3
          </button>
          <button
            className={this.getClassName(3)}
            onClick={this.showSelectedPhoto}
            value="3"
          >
            4
          </button>
          <button onClick={showNextPhoto}>→</button>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPhoto: selectCurrentPhoto(state),
    selectedPhotoIndex: selectSelectedPhotoIndex(state),
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    showNextPhoto: () => dispatch(showNextPhoto()),
    showPrevPhoto: () => dispatch(showPrevPhoto()),
    showPhoto: (val) => dispatch(showPhoto(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Gallery);
