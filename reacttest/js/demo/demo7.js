/// <reference path="lib/react.js" />

//var Input = React.createClass({
//    getInitialState: function () {
//        return { value: 'Hello!' };
//    },
//    handleChange: function (event) {
//        this.setState({
//            value:event.target.value
//        })
//    },
//    render: function () {
//        var value = this.state.value;
//        return(
//            <div>
//                <input type="text" value={value} onChange={this.handleChange}/>
//                <p>{value}</p>
//            </div>
//            );
//    }
//});
//React.render(<Input/>,document.getElementById("example"));

var Avatar = React.createClass({
    getInitialState:function () {
        return {
            float:left
        };
    },
    componentDidMount:function () {
        this.state.float=false;
    },
    render: function () {
        return (
            <div>
                <Userinfo username={this.props.username} logosrc={this.props.logosrc} score={this.props.usersocre}/>
                <Userreg regtime={this.props.regtime}/>
                <Vipinfo endtime={this.props.endtime}/>
            </div>
            );
    }
});

var Userinfo=React.createClass({
    render:function () {
        return (
            <div>
                <span>{this.props.username}</span>
                <img src={this.props.logosrc} alt="" />
                <span>{this.props.userscore}</span>
            </div>
            );
    }
});

var Userreg=React.createClass({
    render:function () {
        return (
            <div>
                <span>加入时间:{this.props.regtime}</span>
            </div>
            );
    }
});
var Vipinfo=React.createClass({
    render:function () {
        return (
            <div>
                <span>VIP到期时间:{this.props.endtime}</span>
            </div>
            );
    }
});

React.render(
    <Avatar username="test" logosrc="xxx.png" usersocre="45" regtime="2015-11-20" endtime="2015-12-20" style={{float:this.state.float}}/>,
document.getElementById("example")
    );

