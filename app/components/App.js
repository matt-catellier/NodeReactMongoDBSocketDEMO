import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar history='this.props.history'></NavBar>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default App;
