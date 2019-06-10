import React, { Component } from 'react';
import axois from '../../axios';
import './Blog.css';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
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
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/*<Route path="/" component={Posts} />*/}
                </Switch>
                {/*<Route path="/" exact render={()=><h1>Home</h1>} />
                <Route path="/new-post" exact render={()=><h1>Home 2</h1>} />*/}
            </div>
        );
    }
}

export default Blog;