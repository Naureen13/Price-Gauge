import React from 'react'
import {Link} from 'react-router-dom'
import { navItems } from '../../static/data'
import styles from '../../styles/styles.js'

const Navbar = (active) => {
  return (
    // <div>hi</div>
    <div className={` ${styles.noramlFlex}`}>
         {
            navItems && navItems.map((i,index) => (
                <div className="flex">
                    <Link to={i.url}
                    className={`${active === index + 1 ? "text-[#17dd1f]" : "text-white 800px:text-[#fff]"} pb-[10px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
                    >
                    {i.title}
                    </Link>
                </div>
            ))
         }
    </div>
  )
}

export default Navbar
