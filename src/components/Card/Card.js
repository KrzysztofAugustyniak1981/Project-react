import React from 'react';
import {settings} from '../../data/dataStore';
import styles from './card.scss';


class Card extends React.Component {
    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>    
                {this.props.title}
                </h3>
            </section>
        )
    }
}

export default Card;