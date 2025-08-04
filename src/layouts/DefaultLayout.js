// layouts/DefaultLayout.js
import Header from "@/components/modules/Header/Header"
import Footer from "@/components/modules/Footer/Footer"

const DefaultLayout = ({ children }) => (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
)

export default DefaultLayout
