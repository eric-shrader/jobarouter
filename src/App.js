import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

//pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/help/Contact'
import Faq from './components/pages/help/Faq'
import NotFound from './components/pages/NotFound'
import Careers, { careersLoader } from './components/pages/careers/Careers'

// layouts
import RootLayout from './components/layouts/RootLayout'
import HelpLayout from './components/layouts/HelpLayout'
import CareersLayout from './components/layouts/CareersLayout'
import CareerDetails, {
  careerDetailsLoader,
} from './components/pages/careers/CareerDetails'
import CareersError from './components/pages/careers/CareersError'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      {/* route for when URL doesnt match a page */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
