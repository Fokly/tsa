import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const Sidebar = () => {
  const[open,serOpen] = useState(false)


    const variants ={
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition:{
                type: "spring",
                stiffness: 25,
            },
        },
        closed: {
            clipPath:"circle(30px at 50px 50px)",
            transition:{
                delay: 0.5,
                type: "spring",
                stiffness: 200,
                dampling: 30,
            },
        },
    };
  return (
  <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton serOpen={serOpen}/>
    </motion.div>
  );
};

export default Sidebar;
