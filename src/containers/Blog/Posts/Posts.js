import React, {Component} from 'react';
import './Posts.css';
import axois from '../../../axios';
import Post from '../../../components/Post/Post';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
class Posts extends Component{
		state={
	        posts:[]
	    }
	    componentDidMount(){
	        axois.get('/posts')
	        .then(response =>{
	            const posts = response.data.slice(0,4);
	            const updatedPosts = posts.map(post=>{
	                return{
	                    ...post,
	                    author: 'Abhishek'
	                }
	            })
	            this.setState({posts: updatedPosts})
	            console.log(response)
	        })
	        .catch((error)=> {
	            // this.setState({error: true});
	            	console.log(error);
	         }); 
	    }
	    postSelectedHandler(id){
	    	//this.props.history.push({pathname: '/posts/'+id});
	    	this.props.history.push('/posts/'+id);
	        //this.setState({selectedPostId: id})
	    }
	render(){
		console.log(this.props)
		let posts = <p style={{textAlign: 'center'}}>Somethiing went wrong</p>
        if(!this.state.error){
            posts = this.state.posts.map(post=>{
                return <Post  
                			key={post.id}
                			title={post.title}  
                            author={post.author} 
                             clicked={()=>this.postSelectedHandler(post.id) } />;
                        
            })
        }
       
		return(
			<div>
				<section className="Posts">
	                {posts}
	            </section>
                <Route path={this.props.match.url+'/:id'} exact component={FullPost} />
            </div>
		)
	}
}

export default Posts;