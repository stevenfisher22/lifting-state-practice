import React from 'react';

class H2 extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <h2>(Sibling) Click Counter: {this.props.clickCount} </h2>

                <button onClick={()=> {this.props.onReset()}}>Reset</button>
            </div>
        );
    }
}

export default H2
