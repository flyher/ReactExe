<script type="text/jsx">
    <!--var DisplayContainer1 = React.createClass({
        updateValue: function (modifiedValue) {
            this.setState({
                value:modifiedValue
            });
        },
        getInitialState: function () {
            return {
                value:'My Value'
            }
        },
        render: function () {
            return (
                <div className='DisplayContainer'>
                    <h3>{this.state.value}</h3>
                    <InputBox1 value={this.state.value} updateValue={this.updateValue}/>
                </div>
                );
        }

    });

var InputBox1=React.createClass({
    update:function () {
        var modifiedValue=this.refs.inputValue.getDOMNode().value;

    },
    render:function () {
        return (<input type="text" ref="inputValue" value={this.props.value} onChange={this.update}/>)
}
});

React.renderComponent(<DisplayContainer1/>,document.getElementById("example8"));-->


</script>