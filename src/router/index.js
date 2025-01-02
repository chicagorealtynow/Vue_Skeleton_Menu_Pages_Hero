import { createRouter, createWebHistory } from 'vue-router'
    import HomeView from '../views/HomeView.vue'
    import AboutView from '../views/AboutView.vue'
    import ServicesView from '../views/ServicesView.vue'
    import OurWorkView from '../views/OurWorkView.vue'
    import FAQsView from '../views/FAQsView.vue'
    import BlogView from '../views/BlogView.vue'
    import ContactView from '../views/ContactView.vue'
    import ACRepairView from '../views/ACRepairView.vue'
    import DrainCleaningView from '../views/DrainCleaningView.vue'

    const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: AboutView
        },
        {
          path: '/services',
          name: 'services',
          component: ServicesView
        },
         {
          path: '/our-work',
          name: 'our-work',
          component: OurWorkView
        },
        {
          path: '/faqs',
          name: 'faqs',
          component: FAQsView
        },
        {
          path: '/blog',
          name: 'blog',
          component: BlogView
        },
         {
          path: '/contact',
          name: 'contact',
          component: ContactView
        },
        {
          path: '/ac-repair',
          name: 'ac-repair',
          component: ACRepairView
        },
        {
          path: '/drain-cleaning',
          name: 'drain-cleaning',
          component: DrainCleaningView
        }
      ]
    })

    export default router
