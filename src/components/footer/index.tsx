import { useStyles } from './styles'
import { BottomNavigation } from '@material-ui/core'
import React from 'react'

const Footer = () => {
    const classes = useStyles()
    return (
        <BottomNavigation
            className={classes.root}
        >
        </BottomNavigation>
    )
}

export default Footer
