// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import cx from 'classnames';

// Instruments
import Styles from './styles.m.css';

import { store  } from '../../init/store';
import { showNextPhoto, showPrevPhoto, showSelectedPhoto } from '../../bus/gallary/actions';

@hot(module)
export default class Gallery extends Component {
    _showNextPhoto = () => {
        store.dispatch(showNextPhoto());
        this.forceUpdate();
    };
     _showPrevPhoto = () => {
        store.dispatch(showPrevPhoto());
        this.forceUpdate();
    };

    _showSelectedPhoto = (event) => {
        store.dispatch(showSelectedPhoto(event.target.value));
        this.forceUpdate();
    };

    render () {
        const {
            gallery: { photos, selectedPhotoIndex },
        } = store.getState();

        const photo = photos.find((_, index) => { return index === selectedPhotoIndex});

        const buttonActiveStyle1 = cx({ [Styles.buttonActive]: selectedPhotoIndex === 0 });
        const buttonActiveStyle2 = cx({ [Styles.buttonActive]: selectedPhotoIndex === 1 });
        const buttonActiveStyle3 = cx({ [Styles.buttonActive]: selectedPhotoIndex === 2 });
        const buttonActiveStyle4 = cx({ [Styles.buttonActive]: selectedPhotoIndex === 3 });

        return (
            <section className = { Styles.gallery }>
                <img src = { photo.url } />
                <div>
                    <button onClick={ this._showPrevPhoto }>←</button>
                    <button onClick={ this._showSelectedPhoto } className = { buttonActiveStyle1 } value = '0'>1</button>
                    <button onClick={ this._showSelectedPhoto } className = { buttonActiveStyle2 } value = '1'>2</button>
                    <button onClick={ this._showSelectedPhoto } className = { buttonActiveStyle3 } value = '2'>3</button>
                    <button onClick={ this._showSelectedPhoto } className = { buttonActiveStyle4 } value = '3'>4</button>
                    <button onClick = { this._showNextPhoto }>→</button>
                </div>
            </section>
        );
    }
}
