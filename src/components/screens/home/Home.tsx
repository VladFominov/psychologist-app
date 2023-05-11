import React, { FC } from 'react'


import Layout from '@/components/layout/Layout'
import Hero from '@/components/hero/Hero'
import Facility from '@/components/facilitySection/Facility'
import Diploma from '@/components/diplomaSection/Diploma'



const Home:FC = () => {
  return (
    <Layout title='Home' description="Find help for your addiction from a qualified psychologist. Our services include individual and group therapy, addiction assessments, and personalized treatment plans. Contact us today to schedule an appointment">
<Hero />
<Facility />
<Diploma />
    </Layout>
  )
}

export default Home