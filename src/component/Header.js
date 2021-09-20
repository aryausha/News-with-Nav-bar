import { AppBar, colors, Toolbar, Typography } from '@material-ui/core'
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
                        <Link to="/news1" style={{paddingLeft:40,paddingRight:40}}>News1</Link>
                        <Link to="/news2" color="primary" style={{paddingLeft:40,paddingRight:40}}>News2</Link>
                        <Link to="/news3" style={{paddingLeft:40,paddingRight:40}}>News3</Link>
                        <Link to="/news4" style={{paddingLeft:40,paddingRight:40}}>News4</Link>

                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
