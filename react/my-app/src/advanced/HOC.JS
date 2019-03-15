import React, {Component} from 'react';

// HOC higher-order components
// Concretely, a hoc is a function that takes a component
// and returns a new componenth:v

export class CommentList extends Component {
    constructor(props) {
        super(props);    
        this.state = {
            comments: DataSource.getComments()    
        };
        // "DataSource" is some global data source
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // subscriber to change
        DataSource.addChangeListener(this.handleChange);  
    }

    componentDidUnmount() {
        // clean up listener
        DataSource.removeChangeListener(this.handleChange);    
    }

    handleChange() {
        // update commponent state whenever the data source changes
        this.setState({
            comments: DataSource.getComments()    
        });    
    }


    render(
        return (
            <div>
                {this.state.comments.map((comment) => {
                    <Comment comment={comment key={comment.id}} />    
                })}
            </div>
        );
    );
}



class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPost: DataSource.getBlogPost(props.id)    
        };
        this.handleChange = this.handleChange.bind(this);
    }    

    renderList(data){
        let listArray = [];
        listArray.push(<TextBlock test=data.text>);

        return listArray;
    }

    componentDidMount() {
        DataSource.addChangeListener(this.handleChange);    
    }

    componentDidUnmount() {
        DataSource.removeChangeListener(this.handleChange);    
    }

    handleChange() {
        this.setState({
            blogPost: DataSource.getBlogPost(this.props.id)    
        });    
    }

    render() {
        return (
            <TextBlock text={this.state.blogPost} /> 
            <div onClick={this.renderList}></div>
        );    
    }
}

