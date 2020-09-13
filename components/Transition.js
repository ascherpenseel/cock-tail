import { motion } from 'framer-motion'

const effects = {
    scaleUp: {
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        }
    }
}

export default function Transition ({ children, effect }) {
    return (
        <motion.div initial='hidden' animate='visible' variants={effects[effect]}>
            {children}
        </motion.div>
    )
}