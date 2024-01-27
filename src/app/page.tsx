import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

import { Globe, ShoppingBag, Leaf, Tractor, Biohazard, Recycle } from 'lucide-react';

const Perks = [
  {
    name: "Organic Certification",
    Icon: Leaf,
    desc: 'We guarantee that all our products are certified organic, ensuring they meet the highest standards of purity and sustainability.'
  },
  {
    name: "Fresh from the Farm",
    Icon: Tractor,
    desc: 'Experience the freshness of produce straight from the farm to your table, harvested at the peak of ripeness for optimal taste and nutrition.'
  },
  {
    name: "Sustainable Practices",
    Icon: Recycle,
    desc: 'Our commitment to sustainable practices ensures that every product you purchase is produced with minimal environmental impact, promoting a healthier planet.'
  },
  {
    name: "Chemical-Free Guarantee",
    Icon: Biohazard,
    desc: 'Say goodbye to harmful chemicals! We guarantee that our products are grown and processed without the use of synthetic pesticides, herbicides, or GMOs.'
  },
  {
    name: "Local and Ethical Sourcing",
    Icon: Globe,
    desc: 'Support local communities and ethical sourcing practices. We prioritize working with local farmers and producers to bring you the best quality organic products.'
  },
  {
    name: "Farm to Table Experience",
    Icon: ShoppingBag,
    desc: 'Immerse yourself in a true farm-to-table experience. Our direct relationships with farmers ensure a seamless journey from the farm to your dining table.'
  },
];



export default function Home() {
  return (
    <>
      <MaxWidthWrapper>

        {/* <div className='py-20 mx-auto  text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl '>Yours marketplace for high Quality {''}
            <span className='text-blue-600 '>Digital Assets </span>
          </h1>
          <p className='mt-6 text-lg text-muted-foreground  max-w-prose'> Welcome to the digital hippo . Every assets on our platform are verified by our teams /experts to meet high quality standards </p>
          <div className='flex flex-col  sm:flex-row gap-4 mt-6 '>
            <Link href="/products" className={buttonVariants()}>Browse Trending</Link>
            <Button variant="ghost">Our Quality Promise &rarr; </Button>
          </div>
        </div> */}
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl '>Your Marketplace for High-Quality {''}
            <span className='text-green-600 '>Organic Products </span>
          </h1>
          <p className='mt-6 text-lg text-muted-foreground max-w-prose'>Welcome to the Organic Oasis. Every product on our platform is carefully curated and verified by our teams/experts to meet the highest organic standards.</p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6 '>
            <Link href="/products" className={buttonVariants()}>Browse Organic Selection</Link>
            <Button variant="ghost">Our Organic Commitment &rarr; </Button>
          </div>
        </div>

        <ProductReel query={{
          sort: "desc",
          limit: 4
        }} title='Brand New' href='/products' />
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50 '>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12  sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 '>
            {Perks.map((perk) => (
              <div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0  flex justify-center'>
                  <div className='h-16 w-16 flex justify-center items-center rounded-full bg-blue-100 text-blue-900 '>
                    {<perk.Icon className='  w-1/3 h-1/3' />}
                  </div>
                </div>
                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6' >
                  <h3 className='text-base font-medium text-gray-900'>{perk.name}</h3>
                  <p className='mt-3 text-sm text-muted-foreground '>{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
