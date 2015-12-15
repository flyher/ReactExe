/// <reference path="../lib/showdown.min.js" />
var converter = new Showdown.converter();
var Comment = React.createClass({
    render: function () {
        var rawMarkup = converter.makeHtml(this.props.children.toString());
        return (
            <div className="comment">
                <h2 className="comment">
                    
                </h2>
            </div>
            );
    }
});