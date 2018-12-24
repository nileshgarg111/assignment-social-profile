import React from 'react';


export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer class="page-footer font-small blue">
                <div class="footer-copyright text-center py-3">© 2018 Copyright:
                    <a href="/"> Assignment - Nilesh Garg</a>
                </div>
            </footer>
        );
    }
}
