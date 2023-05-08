import About from '@/components/about'
import Container from '@/components/container'
import EventSection from '@/components/event'
import Hero from '@/components/hero'
import { Layout } from '@/components/layout'
import NavBar from '@/components/navbar'
import PosterSection from '@/components/poster'
import TestimoniSection from '@/components/tesimoni'
import TimelineSection from '@/components/timeline_section'
import AboutData from '@/configs/about_data'
import HeroData from '@/configs/hero_data'
import { timelineGeneral } from '@/configs/timeline_data'

export default function Home() {
  
  return (
    <Layout pageTitle='DCF 2023 | Diponegoro Chemistry Fair 2023' description='Website DCF 2023 oleh HMK UNDIP'>
      <Hero data={HeroData[0]}/>
      <About data={AboutData[0]}/>
      <EventSection/>
      <PosterSection/>
      <TimelineSection desc='Timeline Pelaksanaan Rangkaian Acara Diponegoro Chemistry Fair 2023' timelineData={timelineGeneral}/>
      <TestimoniSection/>
      <Container/>

      <div className='lg:hidden'>
        <NavBar/>
      </div>
    </Layout>
  )
}
