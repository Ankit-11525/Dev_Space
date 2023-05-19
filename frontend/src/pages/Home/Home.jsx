import React from 'react'
import styles from './Home.module.css';
import {Link,useNavigate} from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
    const signInLinkStyle = {
        color: '#0077FF',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft:'10px',
    };

    const navigate = useNavigate();

    function startRegister(){
        navigate('/Register');
    }

    return(
        <div className={styles.cardWrapper}>
            <Card title="Welcome to DevSpace!" icon="logo">
                <p className={styles.text}>
                    We’re working hard to get Dev Space ready for everyone!
                    Which we wrap up the finishing youches, we’re adding people
                    gradually to make sure nothing breaks :)
                </p>
                <div>
                    <Button onClick={startRegister} text ="Get your user name"/>
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>Have an invite text?</span>
                    <Link style={signInLinkStyle} to="/login">
                        Sign in
                    </Link>
                </div>
            </Card>
        </div>
    );
}; 

export default Home;