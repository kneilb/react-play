import React from 'react';


class SayHi extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this)
        
    }

    state = {
        highlight : false        
    }

    onClick(eventObject) {
        this.setState({highlight: !this.state.highlight});
    }

    render() {
        let className = 'namey ';        
        if (this.state.highlight) {
            className += 'wot';
        }

        let person = this.props.person ? this.props.person : '';

        let structure = <div>
                {this.state.highlight ? <div>Hi</div> : null}
                <div>yo</div>
            </div>;

        return <div className={className} onClick={this.onClick} >{'Hello ' + person }</div>;
    }
}

// or 
//const SayHi = (props) => {
// let {key, person} = props
//

export default SayHi;
