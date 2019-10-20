import React from "react"
import { Link } from "gatsby"
import componentStyles from "./navigation.module.css"

const Navigation = () => {
  return (
    <ul className={componentStyles.navigation}>
      <li className={componentStyles.navigationItem}>
        <Link to="#">Projects</Link>
      </li>
      <li className={componentStyles.navigationItem}>
        <Link to="#">About</Link>
      </li>
      <li className={componentStyles.navigationItem}>
        <Link to="#">Contact</Link>
      </li>
      <li className={componentStyles.navigationItem}>
        <Link to="#">Blog</Link>
      </li>
    </ul>
  )
}

export default Navigation
