import React from "react"
import Container from "../container"
import Logo from "../logo"
import { Spin as Hamburger } from "hamburger-react"
import ThemeSwitcher from "../theme-switcher"
import { Link } from "gatsby"
import cn from "classnames"
import styles from "./header.module.scss"

export default function Header() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className={cn(styles.header, open ? styles.open : null)}>
      <Container className={styles.container}>
        <Logo />
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <ul className={styles.menu}>
              <li>
                <Link to="/blog" activeClassName={styles.active}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/notes" activeClassName={styles.active}>
                  Notes
                </Link>
              </li>
              <li>
                <Link to="/contact" activeClassName={styles.active}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.buttons}>
            <ThemeSwitcher />
            <span className={styles.hamburger}>
              <Hamburger
                rounded
                toggled={open}
                toggle={setOpen}
                label="Toggle menu"
                distance="sm"
                hideOutline={false}
              />
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}
