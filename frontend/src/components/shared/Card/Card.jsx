import React from 'react';
import styles from './Card.module.css';

const Card = ({title,icon,children}) => {
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.headingWrapper}>
                    <img className={styles.img} src={'/images/Logo.png'} alt="logo" />
                    <h1 className={styles.heading}>{title}</h1>
                </div>
                {children}
            </div>
        </div>

    );
};

export default Card;