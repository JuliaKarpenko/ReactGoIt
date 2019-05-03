import React, {Component} from 'react';
import queryString from 'query-string';
import * as api from '../api-mock/api';
import ArticleList from '../components/ArticleList';
import CategorySelector from '../components/CategorySelector';
import categories from '../api-mock/categories';

const getCategoryFromProps = props => queryString.parse(props.location.search).category;

export default class ArticlesPage extends Component {
    state={
        qwerty: []
    }

    componentDidMount() {
      const category = getCategoryFromProps(this.props);

      if(!category) {
        this.props.history.replace({
          pathname: this.props.history.location.pathname,
          search: "category=all"
        })
        return;
      }

      api.fetchAllArticles()
      .then(articles => this.setState({qwerty: articles}))
    }

    componentDidUpdate(prevProps) {
      const prevCategory = getCategoryFromProps(prevProps);
      const nextCategory = getCategoryFromProps(this.props);

      if(prevCategory === nextCategory) return;
      api.fetchArticlesByCategory(nextCategory).then(articles => this.setState({qwerty: articles}))
    }

    handleCategotyPage = (category) => {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `category=${category}`
      })
    };

    render() {
        const { qwerty } = this.state;
        const { match } = this.props;
        const { search } = this.props.location;
        const currentCategory = getCategoryFromProps(this.props);

      return (
        <>
          <h1>articles page</h1>
          <CategorySelector
            options={categories}
            value={currentCategory}
            onChange={this.handleCategotyPage}
          />
          <ArticleList articles={qwerty} match={match} location={search} />
        </>
      )
    }
}