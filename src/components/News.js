import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component {
    // articles = [{
    //     "source": {
    //         "id": null,
    //         "name": "Post Magazine"
    //         },
    //         "author": "Peggy Sito,Daniel Ren, Peggy Sito,Daniel Ren",
    //         "title": "China’s BYD takes Tesla’s crown as the world’s biggest electric vehicle producer by sales",
    //         "description": "BYD, the Chinese carmaker backed by Warren Buffett’s Berkshire Hathaway, has overtaken Elon Musk’s Tesla as the world’s biggest EV producer by sales.",
    //         "url": "https://www.scmp.com/business/china-business/article/3184241/chinas-byd-takes-teslas-crown-worlds-biggest-electric",
    //         "urlToImage": "https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_coronavirus_generic/public/d8/images/canvas/2022/07/05/c872fcdb-214b-4b8d-840b-53c925bd3915_ea81240a.jpg?itok=XckysJpP&v=1657035511",
    //         "publishedAt": "2022-07-05T15:43:37Z",
    //         "content": "Published: 11:43pm, 5 Jul, 2022\r\nUpdated: 11:43pm, 5 Jul, 2022"
    //                 }]

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalArticles: 0
        }
    }
    async componentDidMount() {
        this.updateNews();
    }
    handlePrevious = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }
    handleNext = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updateNews();

    }
    updateNews = async () => {
        this.props.changProg(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.changProg(30)
        let article = await fetch(url);
        this.props.changProg(70)
        let data = await article.json();
        console.log(data);
        this.setState({
            articles: data.articles,
            totalArticles: data.totalResults,
            loading: false,
            page: this.state.page + 1
        });
        this.props.changProg(100)
        console.log(url);
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let article = await fetch(url);
        let data = await article.json();
        console.log(data);
        this.setState({
            articles: this.state.articles.concat(data.articles),
            totalArticles: data.totalResults
        });
    }
    render() {
        let { mode } = this.props;

        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px',marginTop:'100px' }}>Top Headlines - {this.props.category.slice(0,1).toUpperCase()+this.props.category.slice(1)} ({this.props.country.toUpperCase()})</h1>
                {this.state.loading && <Spinner mode={mode} />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalArticles}
                    loader={this.state.articles.length !== this.state.totalArticles && <Spinner mode={mode} />}>
                    <div className="container my-3">
                        <div className='row'>
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url} >
                                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} mode={mode} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })
                            }
                        </div>
                    </div>
                </InfiniteScroll>
            </>

        )
    }
}
