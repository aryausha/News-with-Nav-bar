import { Avatar, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class NewsApi2 extends Component {
    state={
        news:[]
    }
    getData=()=>
    {
        axios.get("https://newsapi.org/v2/everything?q=apple&from=2021-09-19&to=2021-09-19&sortBy=popularity&apiKey=5da45fca78524c79a414bfe1d214a970").then(
            (response)=>{
                console.log(response.data.articles)
                this.setState({
                    news:response.data.articles
                })
            }
        )
    }
    render() {
        return (
            <div>
                <Grid container style={{padding:70}}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button color="primary"
                        variant="contained"
                        fullWidth
                        onClick={this.getData}
                        >
                            Get Data
                        </Button>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Image</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Author</TableCell>
                                        <TableCell>Title</TableCell>
                                        <TableCell>Description</TableCell>

                                        <TableCell>Content</TableCell>


                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.news.map(
                                        (value,index)=>{
                                            return<TableRow>
                                                <TableCell><Avatar variant="square" src={value.urlToImage}></Avatar></TableCell>
                                                <TableCell>{value.publishedAt}</TableCell>
                                                <TableCell>{value.author}</TableCell>
                                                <TableCell>{value.title}</TableCell>
                                                <TableCell>{value.description}</TableCell>
                                                <TableCell>{value.content}</TableCell>

                                            </TableRow>

                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>
                </Grid>
                
            </div>
        )
    }
}
