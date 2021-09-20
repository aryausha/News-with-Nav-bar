import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class NewsApi1 extends Component {
    state={
        news:[]
    }
    FetchApi=()=>
    {
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2021-08-20&sortBy=publishedAt&apiKey=5da45fca78524c79a414bfe1d214a970").then(
            (response)=>
            {
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
                        <Button color="secondary"
                        variant="contained"
                        fullWidth
                        onClick={this.FetchApi}
                        >
                            Get News
                        </Button>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>author</TableCell>
                                        <TableCell>title</TableCell>


                                        <TableCell>  description</TableCell>
                                        <TableCell>publishedAt</TableCell>

                                        <TableCell>content</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.news.map(
                                        (value,index)=>
                                        {
                                            return <TableRow>
                                                 <TableCell>{value.author}</TableCell>
                                        <TableCell>{value.title}</TableCell>


                                        <TableCell>  {value.description}</TableCell>
                                        <TableCell>{value.publishedAt}</TableCell>

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
