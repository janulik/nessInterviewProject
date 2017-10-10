/*
 * Javascript file where all components (the circle and the counter) are being rendered.
 * react-responsive is a library available at https://github.com/contra/react-responsive for
 * creating simple React.js responsive apps
 */
import MediaQuery from 'react-responsive';
var React = require('react');
var ReactDOM = require('react-dom');

/*
 * Counter is a component responsible for design and functionality of the counter
 * with plus-minus buttons in the app. The constructor sets the counter to 0 and then
 * incrementCount() and decrementCount() functions are responsible for increasing/decreasing
 * of the counter. Variables are used to define the style of certain elements of the counter.
 * MediaQuery element imported from react-responsive library is used to create responsive
 * app (based on the width of the screen) 
 */

var destination = document.querySelector("#app");
class Counter extends React.Component {

    constructor(props) {
        super();
        this.state = {
            count: 0
        }
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 5
        });
    }
    ;
            decrementCount() {
        this.setState({
            count: this.state.count - 4
        });
    }
    ;
            render() {

        var counterBtnPlus = {
            width: "50%",
            height: 40,
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none"

        };

        var counterBtnMinus = {
            width: "50%",
            height: 40,
            backgroundColor: "#E74C3C",
            color: "white",
            border: "none"

        };

        var counter = {
            display: "inline-block",
            width: "100%"
        };

        var counterResponsive = {
            display: "block",
            width: "100%"
        };

        var counterBtnResponsivePlus = {
            width: "100%",
            height: 40,
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none"

        };

        var counterBtnResponsiveMinus = {
            width: "100%",
            height: 40,
            backgroundColor: "#E74C3C",
            color: "white",
            border: "none"

        };

        var number = {
            width: "100%",
            marginLeft: "50%",
            fontSize: 32
        }

        return (
                <div>
                    <div style={number}>{this.state.count}</div>
                    <MediaQuery minDeviceWidth={1080}>
                        <div>
                            <div style={counter}>
                                <button style={counterBtnPlus} onClick={this.incrementCount.bind(this)}>Plus</button>
                                <button style={counterBtnMinus} onClick={this.decrementCount.bind(this)}>Minus</button>
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={1080}>
                        <div>
                            <div style={counterResponsive}>
                                <button style={counterBtnResponsivePlus} onClick={this.incrementCount.bind(this)}>Plus</button>
                                <button style={counterBtnResponsiveMinus} onClick={this.decrementCount.bind(this)}>Minus</button>
                            </div>
                        </div>
                    </MediaQuery>
                </div>
                )
    }

}
;
/*
 * Component Circle simply display the gray (to be specific #808080-colored) circle
 */
class Circle extends React.Component {

    render() {
        var circle = {
            borderRadius: "50%",
            width: "50%",
            height: "auto",
            paddingTop: "50%",
            backgroundColor: "white",
            border: "solid",
            borderColor: "gray",
            borderWidth: 4,
            marginLeft: "25%"

        };

        return(
                <div style={circle}>            
                </div>
                );
    }
}
;
/*
 * Both the counter and the circle are rendered here. @var destination is used to store
 * the main container of the app - the #app container, where both elements belong
 */
var content = {
    width: "50%",
    margin: "auto"
}
ReactDOM.render(
        <div>
            <div style={content}>
                <Circle></Circle>
            </div>
            <div style={content}>
                <Counter></Counter>
            </div>
        </div>,
        destination
        );

/*
 * Here are some must-have information for webpack transformation tool. Simply
 * we say take the @entry folder and use @loader specified in the @module and
 * transform it to the @output @filename located in the @path
 */

module.exports = {
    entry: __dirname + '/app/components/App.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConf]
};
