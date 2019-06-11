import React, { Component } from 'react';
import axois from '../../axios';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
//import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost');
});
const Posts = asyncComponent(()=>{
    return import('./Posts/Posts');
});

class Blog extends Component {
    state={
        auth: true
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact
                            activeClassName="my-active"
                            activeStyle={{
                                color:'#fa923f',
                                textDecoration: 'underline'
                            }}
                            >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} />:null}
                    <Route path="/posts" component={Posts} />
                    {/*<Redirect from="/" to="/posts" />*/}
                    <Route render={()=><h1>Not Found</h1>} />
                    {/*<Route path="/" component={Posts} />*/}
                </Switch>
                {/*<Route path="/" exact render={()=><h1>Home</h1>} />
                <Route path="/new-post" exact render={()=><h1>Home 2</h1>} />*/}
            </div>
        );
    }
}

export default Blog;