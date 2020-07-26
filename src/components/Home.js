import React, {Component} from 'react';

export default class Home extends Component{
    render(){
        return (
            <React.Fragment>
                <p className="text-justify text-center">
                    <h1>
                        Hi, I am <span className="text-primary">Jeivardan V</span>
                    </h1>
                    <h2>
                    Tech Enthusiast<span className="text-primary"> | </span>Software Developer
                    </h2>
                    <h3>
                        <span className="text-primary">Currently interning at KLA</span>
                    </h3>
                </p>
        </React.Fragment>
        );
    }
}