//example1
//var LikeButton = React.createClass({
//    getInitialState: function () {//
//        return { liked: false };
//    },
//    handleClick: function (event) {
//        this.setState({ liked: !this.state.liked });
//    },
//    render: function () {
//        var text = this.state.liked ? 'like' : 'haven\'t liked';
//        return (
//            <p onClick={this.handleClick}>
//                You {text} this. Click to toggle.
//            </p>
//        );
//    }
//});
//React.render(
//    <LikeButton/>,
//    document.getElementById("example")
//    );

////example2
//var App = React.createClass({
//    getInitialState: function () {
//        return {userInput:'1111'};
//    },
//    handleChange: function (e) {
//        this.setState({userInput:e.target.value});
//    },
//    clearAndFocusInput: function () {
//        this.setState({ userInput: '' }, function () {
//            //var txt=this.refs.theInput.getDOMNode;
//            //console.log(txt);
//            this.refs.theInput.getDOMNode().focus();
//        });
//    },
//    render: function () {
//        return (
//            <div>
//                <div onClick={this.clearAndFocusInput}>
//                    Click to Foucs and Reset
//                </div>
//                <input ref="theInput" value={this.state.userInput} onChange={this.handleChange} />

//            </div>
//            );
//    }
//});

//            React.render(
//                <App />,
//                document.getElementById("example")
//                );
////example3
//var Avatar = React.createClass({
//    render: function () {
//        return (
//            <div>
//                <ProfilePic username={this.props.username}/>
//                <ProfileJoin createtime={this.props.createtime}/>
//                <ProfileEnd endtime={this.props.endtime}/>
//            </div>
//            );
//    }
//});

//            var ProfilePic=React.createClass({
//                render:function () {
//                    return(
//                        <img src={'http://www.meihua.info/icons/'+this.props.username+'?t=111'}/>
//                        );
//                }
//});


//            var ProfileJoin=React.createClass({
//                render:function () {
//                    return (
//                        <span >{this.props.createtime}</span>
//                        );
//                }
//            });

//            var ProfileEnd=React.createClass({
//                render:function () {
//                    return (
//                        <span>{this.props.endtime}</span>
//                        );
//                }
//            });
//            React.render(
//                <Avatar username="logo2.png" createtime="2015-10-15" endtime="2015-10-16"/>,
//            document.getElementById("example")
//                );
////example4
//var ListItemWrapper = React.createClass({
//    handClick:function () {
//        //console.log("You clicked: "+this.props.results[i]);
//        console.log("You clicked: "+this);
//    },
//    render: function () {
//        return <li onClick={this.handClick(this)}>{this.props.data.text}</li>;
//    }
//});

//var MyComponent=React.createClass({

//    render:function () {
//        return (
//            <ul>
//                {this.props.results.map(function(result){
//                    //onClick={this.handClick.bind(this,result.id)}
//                    return <ListItemWrapper  key={result.id} data={result}/>
//                    },this)}
//            </ul>
//            );
//    }
//});
//var values=[
//    {
//        id:1,
//        text:"11111111"
//    },
//    {
//        id:2,
//        text:"22211111"
//    },
//    {
//        id:3,
//        text:"22211111"
//    }
//];

//React.render(
//    <MyComponent results={values}/>,
//document.getElementById("example")
//    );

////example5
//var GroceryList = React.createClass({
//    handleClick: function(i) {
//        console.log('You clicked: ' + this.props.items[i]);
//    },

//    render: function() {
//        return (
//            <div>
//                {this.props.items.map(function(item, i) {
//                    return (
//                        <div onClick={this.handleClick.bind(this, i)} key={i}>{item}</div>
//                    );
//    }, this)}
//            </div>
//        );
//}
//});

//React.render(
//    <GroceryList items={['Apple', 'Banana', 'Cranberry']} />, document.getElementById("example")
//);
////example6
var SetIntervalMixin = {
    componentWillMount: function () {
        this.intervals = [];
    },
    setInterval: function () {
        this.intervals.push(setInterval.apply(null, arguments));
    },
    componentWillUnmount: function () {
        this.intervals.map(clearInterval);
    }
};

var TickTock = React.createClass({
    mixins: [SetIntervalMixin],
    getInitialState: function () {
        return { seconds: 0 };
    },
    componentDidMount: function () {
        this.setInterval(this.tick, 1000);
    },
    tick: function () {
        this.setState({ seconds: this.state.seconds + 1 });
    },
    render: function () {
        return (
            <p>
                React has been running for {this.state.seconds} seconds
            </p>
            );
    }
});
React.render(
    <TickTock />,
    document.getElementById("example")
    );