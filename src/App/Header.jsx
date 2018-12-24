import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header navbar navbar-expand-lg navbar-light bg-light">
                <a href="/" className="navbar-brand">Logo Here</a>
            </div>
        );
    }
}
