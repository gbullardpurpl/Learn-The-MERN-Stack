import React, { Component } from 'react';

const curDate = new Date();

class AppFooter extends Component {
    render() {
        return (
            <footer className="bg-dark text-center text-lg-start mt-5">
                <div className="text-center text-light p-3">
                    &copy; Copyright {curDate.getFullYear()} 
                    <a
                        href="https://purplerockscissors.com/"
                        className="text-light p-2"
                        target="_blank"
                        rel="noreferrer"
                    >PRPL</a>
                </div>
            </footer>
        );
    }
}

export default AppFooter;