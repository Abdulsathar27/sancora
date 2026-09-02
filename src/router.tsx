import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router'
import { Layout } from './components/layout/Layout'
import { AppProviders } from './context/AppProviders'
import { HomePage } from './routes/HomePage'
import { AboutPage } from './routes/AboutPage'
import { ServicesPage } from './routes/ServicesPage'
import { ServiceDetailPage } from './routes/ServiceDetailPage'
import { CaseStudiesPage } from './routes/CaseStudiesPage'
import { ContactPage } from './routes/ContactPage'

const rootRoute = createRootRoute({
  component: () => (
    <AppProviders>
      <Layout>
        <Outlet />
      </Layout>
    </AppProviders>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
})

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
})

const serviceDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services/$serviceId',
  component: ServiceDetailPage,
})

const caseStudiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/case-studies',
  component: CaseStudiesPage,
})

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  servicesRoute,
  serviceDetailRoute,
  caseStudiesRoute,
  contactRoute,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
