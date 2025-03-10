import { montserrat } from '@/app/font'
import Image from 'next/image'
import React from 'react'

const TrustedSection = () => {
  return (
    <section className="container mx-auto grid gap-y-8 py-20">
          <div className={`mx-auto font-bold ${montserrat.className}`}>
            TRUSTED BY LEADING COMPANY
          </div>
          <div className="mx-auto">
            <li className="flex gap-8">
              <div>
                <Image
                  src="/logoipsum-360.svg"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="/logoipsum-360.svg"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="/logoipsum-360.svg"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src="/logoipsum-360.svg"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
            </li>
          </div>
        </section>
  )
}

export default TrustedSection