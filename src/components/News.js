import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {
    
        article= {"articles" : [
        {
        "author": null,
        "title": "“Inflation Forecasts Aren't Worth the Paper They're Written on”: This Is about the Bank of Canada's Reaction to Inflation, But it's the Same in the US and Everywhere  WOLF STREET",
        "description": "“Why the current tightening cycle is unlike anything we’ve observed in the past.”",
        "url": "https://wolfstreet.com/2022/06/24/inflationforecastsarentworththepapertheyrewrittenonthisisaboutthebankofcanadasreactiontoinflationbutitsthesameintheusa/",
        "urlToImage": "https://wolfstreet.com/wpcontent/uploads/2022/06/CanadaCPIBOCforecasts.png",
        "publishedAt": "20220625T01:43:21Z",
        "content": "“Why the current tightening cycle is unlike anything weve observed in the past.\r\nWhen Canadas Consumer Price Index for May was released a couple of days ago, it was as expected, I would say a lot lot… [+5867 chars]"
        },
        {
        "author": null,
        "title": "Dow Jones Futures: Market Rally Gains Steam; 9 Stocks To Watch  Investor's Business Daily",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMid2h0dHBzOi8vd3d3LmludmVzdG9ycy5jb20vbWFya2V0LXRyZW5kL3N0b2NrLW1hcmtldC10b2RheS9kb3ctam9uZXMtZnV0dXJlcy1tYXJrZXQtcmFsbHktZ2FpbnMtc3RlYW0tOS1zdG9ja3MtdG8td2F0Y2gv0gEA?oc=5",
        "urlToImage": null,
        "publishedAt": "20220625T01:26:00Z",
        "content": null
        },
        {
        "author": "Mitchell Clark",
        "title": "Juul can keep selling ecigarettes, after an appeals court paused the FDA's ban  The Verge",
        "description": "A court has ruled that Juul can keep selling its products while the company prepares an emergency motion to stay the FDA’s recent order preventing sales of the Juul device and Juul pods.",
        "url": "https://www.theverge.com/2022/6/24/23182384/fdajuulbanpausedcappealscourtemergencyimmediatestay",
        "urlToImage": "https://cdn.voxcdn.com/thumbor/MMZ4hEe2jQWqY5yHInAAayYawFc=/0x146:2040x1214/fitin/1200x630/cdn.voxcdn.com/uploads/chorus_asset/file/19205211/acastro_190916_1777_juul_0002.0.jpg",
        "publishedAt": "20220625T00:37:24Z",
        "content": "A DC appeals court is giving the company a moment to prepare the paperwork\r\nThe company says it could suffer irreparable harm if it cant sell its products while the court considers its case.\r\nIllustr… [+1586 chars]"
        },
        {
        "author": null,
        "title": "U.S. new home sales rebound in May; consumer sentiment at record low  Reuters.com",
        "description": "Sales of new U.S. singlefamily homes unexpectedly rose in May, but the rebound is likely to be temporary as home prices continue to increase and the average contract rate on a 30year fixedrate mortgage approaches 6%, reducing affordability.",
        "url": "https://www.reuters.com/business/usnewhomesalesunexpectedlyrisemay20220624/",
        "urlToImage": "https://www.reuters.com/resizer/rPeN8NcggL6ph2x_SKFPUvykMY8=/1200x628/smart/filters:quality(80)/cloudfrontuseast2.images.arcpublishing.com/reuters/FWE3325JJJO7POLKFOUH75RFSQ.jpg",
        "publishedAt": "20220625T00:00:00Z",
        "content": "WASHINGTON, June 24 (Reuters)  Sales of new U.S. singlefamily homes unexpectedly rose in May, but the rebound is likely to be temporary as home prices continue to increase and the average contract … [+4127 chars]"
        },
        {
        "author": "Krystal Hur",
        "title": "Cramer's lightning round: Move on from DigitalBridge  CNBC",
        "description": "\"Mad Money\" host Jim Cramer rings the lightning round bell, which means he's giving his answers to callers' stock questions at rapid speed.",
        "url": "https://www.cnbc.com/2022/06/24/cramerslightningroundmoveonfromdigitalbridge.html",
        "urlToImage": "https://image.cnbcfm.com/api/v1/image/1020791281539342565979105501689.jpg?v=1539342593&w=1920&h=1080",
        "publishedAt": "20220624T23:33:25Z",
        "content": "Sign up now for the CNBC Investing Club to follow Jim Cramer's every move in the market.Questions for Cramer?Call Cramer: 1800743CNBC\r\nWant to take a deep dive into Cramer's world? Hit him up!Mad … [+135 chars]"
        },
        {
        "author": "Mike Florio",
        "title": "Disney, Apple, Amazon have submitted bids for Sunday Ticket  NBC Sports",
        "description": "As DirecTV prepares to conclude an exclusive NFL Sunday Ticket run that began nearly 30 years ago, three companies have made a play to take over the package in 2023.Alex Sherman of CNBC.com reports that Disney, Apple, and Amazon have submitted bids for the ou…",
        "url": "https://profootballtalk.nbcsports.com/2022/06/24/disneyappleamazonhavesubmittedbidsforsundayticket/",
        "urlToImage": "https://profootballtalk.nbcsports.com/wpcontent/uploads/sites/25/2022/02/GettyImages1091147176e1645368405381.jpg",
        "publishedAt": "20220624T23:30:00Z",
        "content": "As DirecTV prepares to conclude an exclusive NFL Sunday Ticket run that began nearly 30 years ago, three companies have made a play to take over the package in 2023.\r\nAlex Sherman of CNBC.com reports… [+1061 chars]"
        }]}
        
        
    constructor() {
        super();
        this.state = {
            articles: this.article.articles,
            loading: false
        }
    }
    async componentDidMount() {

        // let article = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=c6fe7687951f4619ab4ecbce80e8d714");
        // let data = await article.json();
        // console.log(data);
        // this.setState({articles:data.articles});

    }

    render() {
        return (
            <div className="container my-3">
                <div className='row'>
                {this.state.articles.map((element) =>{
                    return  <div className="col-md-4" key = {element.url} >
                    <NewsItem title={element.title} description={element.description} imageUrl ={element.urlToImage} url = {element.url} />
                    </div> })
                }
            </div>

            </div >
        )
    }
}
