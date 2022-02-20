import styles from './Footer.module.scss';

const Footer = ({ ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      <p>
        &copy; <a href="https://spacejelly.dev">Space Jelly</a>, {new Date().getFullYear()} &amp; Images via <a href="https://unsplash.com/">unsplash.com</a>
      </p>
    </footer>
  )
}

export default Footer;