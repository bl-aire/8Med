import Header from "../components/base/Header"
import Footer from "../components/base/Footer"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
        {children}
      <Footer />
    </div>
  )
}