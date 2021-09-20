import { AppBar, colors, MenuItem, Toolbar, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Typography>
                            NEWS
                        </Typography>
                        <Link to="/news1" style={{textDecoration:'secondary'}}><MenuItem style={{paddingLeft:40,paddingRight:40}}>News1</MenuItem></Link>
                        <Link to="/news2" style={{textDecoration:'secondary'}}><MenuItem style={{paddingLeft:40,paddingRight:40}}>News2</MenuItem></Link>
                        <Link to="/news3" style={{textDecoration:'primary'}}><MenuItem style={{paddingLeft:40,paddingRight:40}}>News3</MenuItem></Link>
                        <Link to="/news4" style={{textDecoration:'primary'}}><MenuItem style={{paddingLeft:40,paddingRight:40}}>News4</MenuItem></Link>

                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
