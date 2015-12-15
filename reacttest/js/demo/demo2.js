//demo1
//var names = ["A", "B", "E"];

//React.render(
//    <div>
//    {
//        names.map(function(name){
//            return <div>Hello,{name}!</div>
//        })
//    }
//    </div>,
//    document.getElementById("example")
//    );

//demo2
//var arr = [
//    <h1>Hello1</h1>,
//    <h2>JSON</h2>
//];
//React.render(
//    <div>{arr}</div>,
//    document.getElementById("example")
//    );

//demo3
//var Msg = React.createClass({
//    render: function () {
//        return <h1>Hello{this.props.name}</h1>;
//    }
//});

//React.render(
//    <Msg name="apple"/>,
//    document.getElementById("example")
//    );

//demo4
//var Notes = React.createClass({
//    render: function () {
//        return (
//            <ol>
//            {
//                this.props.children.map(function(child){
//                    return <li>{child}</li>
//                })
//            }
//            </ol>
//            );
//    }
//});
//React.render(
//    <Notes>
//        <span>hello</span>
//        <span>world</span>
//    </Notes>,
//    document.body
//    );

//demo5

var My = React.createClass({
    propTypes: {
        title:React.PropTypes.string.isRequired,
    },
    render: function () {
        return <h1>{this.props.title}</h1>
    }
});