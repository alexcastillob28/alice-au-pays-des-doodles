import Navbar       from '@/components/Navbar'
import Hero         from '@/components/Hero'
import Services     from '@/components/Services'
import Gallery      from '@/components/Gallery'
import About        from '@/components/About'
import Contact      from '@/components/Contact'
import Footer       from '@/components/Footer'
import WaveDivider  from '@/components/WaveDivider'
import Loader       from '@/components/Loader'

// Color tokens (must match tailwind.config.ts)
const CREAM    = '#F9F4F0'
const BLUSH    = '#F5EBE4'
const COCOA    = '#6B4226'

export default function Home() {
  return (
    <>
      <Loader />
      <main>
        <Navbar />

        {/* Hero already has its own bottom wave → cream */}
        <Hero />

        {/* cream */}
        <Services />
        <WaveDivider topColor={CREAM} bottomColor={BLUSH} flip />

        {/* blush */}
        <Gallery />
        <WaveDivider topColor={BLUSH} bottomColor={CREAM} />

        {/* cream */}
        <About />
        <WaveDivider topColor={CREAM} bottomColor={BLUSH} flip />

        {/* blush */}
        <Contact />
        <WaveDivider topColor={BLUSH} bottomColor={COCOA} />

        {/* cocoa */}
        <Footer />
      </main>
    </>
  )
}
