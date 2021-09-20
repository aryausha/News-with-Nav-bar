import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@material-ui/core';
import axios from 'axios'
import React, { Component } from 'react'

export default class ApiNews2 extends Component {
    constructor(){
        super();
        this.FetchNews();
    }
    mediaImage={
        height:0,
        paddingTop:'56.26%',
        marginTop:'30'
    }
    state={
        news1:[]
    }
    FetchNews=()=>{
        axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5da45fca78524c79a414bfe1d214a970").then(
            (response)=>{
                console.log(response.data.articles)
                this.setState({
                    news1:response.data.articles
                })
            }
        )
    }
    root={
        maxWidth:'30'
    }
    media={
        height:0,
        paddingTop:'56.25%',
    }
    render() {

        return (
            <div>
                <Grid container style={{padding:70}}>
                {/* <Grid item xs={12} sm={4} md={4} lg={4} xl={4}></Grid> */}
                    
                        {this.state.news1.map(
                            (value,index)=>{
                                return <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
 
                                 <Card style={this.root}>
                                <CardHeader 
                                title={value.title}
                                subheader={value.publishedAt}
                                />
                                <CardMedia 
                                style={this.mediaImage}
                                image={value.urlToImage}
                                />
                                <CardContent>
                                    <Typography>{value.description}</Typography>
                                </CardContent>
    
                            </Card>
                            </Grid>


                            }
                        )}
                      

                      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}
