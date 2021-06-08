import React from 'react';

const LandingPage = () => {
    return (
        <div className = "landing-page">
            <h1 className = "landing-page__title">Workout App Title!!</h1>
            <section className ="actions">
                <div className = "actions__button">Login Button</div>
                <div className ="actions__button"> Register Button</div>
            </section>
            <div className = "landing-info">Learn about the app/why i made it or something like that</div>
        </div>
    );
};

export default LandingPage;