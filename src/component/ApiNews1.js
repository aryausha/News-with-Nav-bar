import { Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import axios from 'axios'
import React, { Component } from 'react'

export default class ApiNews1 extends Component {
    constructor(){
        super();
        this.getApi();
    }
    state={
        apinews:[]
    }
    getApi=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5da45fca78524c79a414bfe1d214a970").then(
            (respone)=>{
                console.log(respone.data.articles)
                this.setState({
                    apinews:respone.data.articles
                })
            }
        )
    }
    render() {
        return (
            <div>
                <TableContainer style={{padding:70}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Description</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.apinews.map(
                                (value,index)=>{
                                    return<TableRow>
                                        <TableCell>{value.source.name}</TableCell>
                                        <TableCell><Avatar src={value.urlToImage}></Avatar></TableCell>
                                        <TableCell>{value.title}</TableCell>
                                        <TableCell>{value.publishedAt}</TableCell>
                                        <TableCell>{value.description}</TableCell>

                                    </TableRow>

                                }
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                
            </div>
        )
    }
}
