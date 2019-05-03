import React, { Component } from 'react';
import Item from '../components/Item';
import *as api from '../api-mock/api';

export default class ItemPage extends Component {
    state = {
        id: null,
        imageUrl:null,
        title:null,
        author:null,
        body:null,
        category:null
    };

    componentDidMount() {
        api
            .fetchArticleById(this.props.match.params.id)
            .then(item => this.setState({...item}));
    }

    handleGoBack = () => {
        const { state } = this.props.location;
        const { category } = this.state;

        if (state) {
            return this.props.history.push({
                pathname:'/articles',
                search: state.from
            });
        }

        this.props.history.push({
            pathname:'/articles',
            search: `?category=${category}`
        })
    };

    render() {
        const { imageUrl, title, author, body, category } = this.state;

        return (
        <Item 
            imageUrl={imageUrl} 
            title={title} 
            author={author} 
            body={body} 
            category={category}
            onClick={this.handleGoBack}
        />)
    }
}