import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { PageProps } from 'gatsby'
import React from 'react'
import Seo from '../components/Seo'
import Testimonial from '../components/Testimonial'
import { mySubscriptions } from '../store'
import { updateSubscriptions } from '../actions'
import { useRecoilState } from 'recoil'

export default function Home(props: PageProps) {
  const [subscriptions, setSubscriptions] = useRecoilState(mySubscriptions)
  const createDummySubscription = async () => {
    const newSubscription = {
      sku: `sku_${Math.random()}`,
      quantity: Math.floor(Math.random() * 9),
      frequency: 'every other week',
    }
    console.log(`New Subscription = ${JSON.stringify(newSubscription)}`)
    const updatedSubscriptions = subscriptions.concat([newSubscription])
    const newSubscriptions = await updateSubscriptions(updatedSubscriptions)
    setSubscriptions(newSubscriptions)
  }

  return (
    <>
      <Seo />
      <Nav />
      <div>{JSON.stringify(subscriptions)}</div>
      <div>Description about our fabulous pastured eggs...</div>
      <div>Maybe a pretty form so you can select delivery frequency and amount of eggs</div>
      <button onClick={() => createDummySubscription()}>Subscribe</button>
      <Testimonial />
      <Footer />
    </>
  )
}
