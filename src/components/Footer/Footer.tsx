import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Container } from '@material-ui/core'
import GITHUB_ICON from './github.svg'

export const Footer: React.FC = () => {
  const styles = useStyles()

  return (
    <div className={styles.footerContainer}>
      <Container maxWidth='md'>
        <b>Catéchisme de l'Église Catholique</b>
        <br />
        <span>© Libreria Editrice Vaticana</span>
        <br />
        <span>© St. Charles Borromeo Catholic Church</span>
        <br />
        <span>
          Reskin par nossbigg&nbsp;
          <a href='https://github.com/nossbigg/catechism'>
            <img src={GITHUB_ICON} height='10' alt='github icon' />
          </a>
          &nbsp;adapté en Français par arnoo&nbsp;
          <a href='https://github.com/arnoo/catechism'>
            <img src={GITHUB_ICON} height='10' alt='github icon' />
          </a>
        </span>
      </Container>
    </div>
  )
}

const useStyles = makeStyles({
  footerContainer: {
    fontSize: '0.75em',
    backgroundColor: '#f7f0d8',
    padding: '2em 0',
  },
})
