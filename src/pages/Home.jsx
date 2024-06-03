import Banner from "../components/home/Banner"
import NewsletterSignup from "../components/home/NewsletterSignup"
import Products from "../components/home/Products"
import Reviews from "../components/home/Reviews"


function Home() {
  return (
    <>
    <Banner /> 
    <Products />

    <Reviews />
    <NewsletterSignup />
    </>
  )
}

export default Home