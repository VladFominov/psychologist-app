import { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'
import Layout from '@/components/layout/Layout'

import notFoundImg from '../../public/images/404.jpg'



const NotFound: NextPage = () => {
  return (
    <Layout title="404">
        <div style={{textAlign: 'center'}}>
        <Image src={notFoundImg} alt="Picture of 404 error" width={500}/>
        </div>
      
    </Layout>
  )
}

export default NotFound