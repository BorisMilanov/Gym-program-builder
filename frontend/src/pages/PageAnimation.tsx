// import React, { useRef } from 'react'
// import { ParallaxLayer } from '@react-spring/parallax'
// import styles from './styles.module.css'

// interface PageProps {
//   offset: number
//   gradient: string
//   onClick: () => void
// }

// const Page = ({ offset, gradient, onClick }: PageProps) => (
//   <>
//     <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
//       <div className={styles.slopeBegin} />
//     </ParallaxLayer>

//     <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
//       <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
//     </ParallaxLayer>

//     <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
//       <span>0{offset + 1}</span>
//     </ParallaxLayer>
//   </>
// )

// export default Page;