////demo4
//var HelloMessage = React.createClass({
//    render: function () {
//        return <h1>hello {this.props.name}</h1>;
//    }
//});
//React.render(
//    <HelloMessage name="test"/>,
//    document.getElementById("example")
//    );
////demo5
//var NotesList = React.createClass({
//    render: function () {
//        return (
//            <ol>
//            {
//                this.props.children.map(function (child) {
//                    return <li>{child}</li>
//                })
//            }
//            </ol>
//            );
//    }
//});

//React.render(
//    <NotesList>
//        <span>hello</span>
//        <span>world</span>
//    </NotesList>,
//    document.body
//    );
////demo6
//var MyTitle = React.createClass({
//    propTypes: {
//        title: React.PropTypes.string.isRequired,
//    },
//    render: function () {
//        return <h1>{this.props.title}</h1>;
//    }
//});

//var data=123;
//React.render(
//    <MyTitle title={data}/>,
//document.body
//    );
////demo7
//var MyTitle = React.createClass({
//    getDefaultProps: function () {
//        return {
//            title:'Hello'
//        };
//    },
//    render: function () {
//        return <h1>{this.props.title}</h1>;
//    }
//});

//React.render(
//    <MyTitle />,
//    document.body
//    );
////demo8
//var MyComponent = React.createClass({
//    handleClick: function () {
//        React.findDOMNode(this.refs.myTextInput).focus();
//    },
//    render: function () {
//        return (
//            <div>
//                <input type="text" ref="myTextInput"/>
//                <input type="button" value="Focus the text input" onClick={this.handleClick}/>
//            </div>
//            );
//    }
//});

//React.render(
//    <MyComponent/>,
//    document.getElementById("example")
//    );
////demo9
//var Input = React.createClass({
//    getInitialState: function () {
//        return {
//            value:'hello!',
//            title:'sdsd'
//        };
//    },
//    handleChange: function (event) {
//        this.setState({
//            value:event.target.value,
//            title:event.target.title
//        });
//    },
//    render: function () {
//        var value = this.state.value;
//        var title=this.state.title;
//        return (
//            <div>
//                <input type="text" value={value} title={title} onChange={this.handleChange}/>
//                <p>{value}{title}</p>
//            </div>
//            );
//    }
//});
//React.render(<Input/>,document.body);
////demo10
//var Hello = React.createClass({
//    getInitialState: function () {
//        return {
//            opacity:1.0
//        };
//    },
//    componentDidMount: function () {
//        this.timer = setInterval(function () {
//            var opacity = this.state.opacity;
//            opacity -= .05;
//            if (opacity<0.1) {
//                opacity = 1.0;
//            }
//            this.setState({
//                opacity:opacity
//            });
//        }.bind(this),100);
//    },
//    render: function () {
//        return (
//            <div style={{opacity:this.state.opacity}}>
//                Hello {this.props.name}
//            </div>
//            );
//    }
//});

//            React.render(
//                <Hello name="world"/>,
//            document.body
//                );

//demo11 ajax
var UserGist = React.createClass({
    getInitialState: function () {
        return {
            username: '',
            lastGistUrl: ''
        };
    },
    componentDidMount: function () {
        $.get(this.props.source,function (result) {

            //var lis=result.map;

            var lastGist=result[0];
            if (this.isMounted()) {
                this.setState({
                    username:lastGist.owner.login,
                    lastGistUrl:lastGist.html_url
                });
            }
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                {this.state.username}'s last gist is 
                <a href={this.state.lastGistUrl}>here</a>.
            </div>
            );
    }
});

//var UserGistList=React.createClass({
//    render:function () {
//        return (
//            <UserGist/>
//            )
//    }
//});
React.render(
    <UserGist source="https://api.github.com/users/octocat/gists"/>,
    document.body
    );