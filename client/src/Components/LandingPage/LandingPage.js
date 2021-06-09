import React from 'react';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <div className = "landing-page">
            <h1 className = "landing-page__title">Workout App Title!!</h1>
            <section className ="actions">
                <div className = "actions__button">Login Button</div>
                <div className ="actions__button"> Register Button</div>
            </section>
            <div className = "landing-page__info">About the app</div>
        </div>
    );
};

export default LandingPage;