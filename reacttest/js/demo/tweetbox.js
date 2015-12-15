var TweetBox = React.createClass({
    getInitialState: function() {
        return {
            text: "",
            photoAdded:false
        };
    },
    show:function(){
        console.log("a");
    },
    togglePhoto:function(){
        //console.log(this.state.photoAdded); 
        this.setState({
            photoAdded:!this.state.photoAdded
        });
    },
    //test function
    someMethod:function(){
        return (
          <a href="#">Hello World</a>
      );
    },
    overflowAlert:function(){
        if(this.remainingCharacters()<0){
            if(this.state.photoAdd){
                var beforeOverflowText=this.state.text.substring(140-23-10,140-23);
                var overflowText=this.state.text.substring(140-23);
            }else{
                var beforeOverflowText=this.state.text.substring(140-10,140);
                var overflowText=this.state.text.substring(140);
            }
    
            return (
              <div className="alert alert-warning">
                <strong>Oops!Too Long:</strong>
                &nbsp;...{beforeOverflowText}
            <strong className="bg-danger">{overflowText}</strong>
          </div>
          );
        }else{
            return "";
        }
    },
    remainingCharacters:function(){
        console.log(this.state.photoAdded); 
        if(this.state.photoAdded){
            console.log(140-23-this.state.text.length);
            return 140-23-this.state.text.length;
        }else{
            console.log(140-this.state.text.length);
            return 140-this.state.text.length;
        }
    },
    handleChange: function(event) {
        //this.state.text=event.target.value;
        this.setState({ text: event.target.value });
    },
    render: function() {
        return (
          <div className="well clearfix">
            {this.overflowAlert()}
            <textarea className="form-control"
        onChange={this.handleChange}>
        </textarea>
        <br/>
        <button className="btn btn-primary pull-right" disabled={this.state.text.length===0&&!this.state.photoAdded} onClick={this.show} >Tweet</button>
        <button className="btn btn-default pull-right" onClick={this.togglePhoto}>
        {this.state.photoAdded ? "√ Photo Added":"Add Photo"}
        </button>
        <span>{140-this.state.text.length}|{this.remainingCharacters()}</span>
        </div>
      );
    }
});

React.render(
  <TweetBox />, document.getElementById("example2")
);
//function allowDrop(event){
//    event.preventDefault();
//}
//function drag(event){
//    console.log(event.target.id);
//    event.dataTransfer.setData("dropobj",event.target.id);
//    //console.log(event);
//}
//function drop(event){
//    event.preventDefault();
//    var data=event.dataTransfer.getData("dropobj");
//    event.target.appendChild(document.getElementById(data));
//    //console.log(event.dataTransfer);
  
//}