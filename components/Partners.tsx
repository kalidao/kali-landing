import React from 'react'
import Image from 'next/image'
import PartnerStream from '../styles/stream'
import hashed from '../public/partners/hashed.png'
// import seedclub from '../public/partners/seedclub.svg'
import lexdao from '../public/partners/lexdao.svg'
import lexpunk from '../public/partners/lexpunk.svg'

function Partners() {
  return (
    <PartnerStream>
      <Image src={lexpunk.src} height="45px" width="50px" alt="LexPunk" />
      <Image src={lexdao.src} height="45px" width="50px" alt="LexDAO" />
      {/* {/* <Image src={seedclub.src} height="45px" width="110px" /> */}
      <Image src={hashed.src} height="45px" width="110px" alt="Hashed Emergent" /> */
    </PartnerStream>
  )
}

export default Partners
