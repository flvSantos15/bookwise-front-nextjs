/* eslint-disable @next/next/no-img-element */

import Image from 'next/image'
import logo from '../../public/images/logo.png'

export function Logo() {
  return <Image src={logo} alt="logo" className="object-cover" />
}
