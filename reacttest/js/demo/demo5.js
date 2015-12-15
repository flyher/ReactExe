
var UserList = React.createClass({
    propTypes:{
        source:React.PropTypes.string.isRequired,
    },
    render: function () {
        var lis=this.props.source.todos.map(function (todo) {
            return (
                <li>
                    <input type="checkbox" checked={todo.ischeck}/>
                    <span>{todo.text}</span>
                </li>
                );
        });
        return (
            <ul>
                {lis}
            </ul>
        );
    }
});


        var todoList={
            todos:[
                {
                    ischeck:true,
                    text:"1111"
                },
                {
                    ischeck:false,
                    text:"22222"
                }
            ]
        }
React.render(
    <UserList source={todoList}/>,
        document.body
);