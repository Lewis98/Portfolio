import React from 'react'

import { motion as anim } from 'framer-motion'


const pageMotion = {
    initial: { opacity: 0},
    animate: { opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 0.25 } },
    exit: { opacity: 0, transition: { duration: 1, ease: "easeIn" } }
  };

const PgTrans = (props) => {
  return (
    <anim.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageMotion}

        style={containerStyle}
    >
        {props.children}      
    </anim.div>
  )
}


const containerStyle = {
    height: '95%',
    width: '100%'
}

export default PgTrans;
