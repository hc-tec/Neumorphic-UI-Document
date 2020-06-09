import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/document',
    name: 'document',
    component: () => import('../views/document.vue'),
    children: [
      {
        path: 'install',
        name: 'install',
        component: () => import('../components/document/install.vue'),
      },
      {
        path: 'quick-start',
        name: 'quick-start',
        component: () => import('../components/document/quickstart.vue'),
      },
      {
        path: 'icon',
        name: 'icon',
        component: () => import('../components/document/icon.vue'),
      },
      {
        path: 'anchor',
        name: 'anchor',
        component: () => import('../components/document/anchor.vue'),
      },
      {
        path: 'radio',
        name: 'radio',
        component: () => import('../components/document/radio.vue'),
      },
      {
        path: 'checkbox',
        name: 'checkbox',
        component: () => import('../components/document/checkbox.vue'),
      },
      {
        path: 'input',
        name: 'input',
        component: () => import('../components/document/input.vue'),
      },
      {
        path: 'select',
        name: 'select',
        component: () => import('../components/document/select.vue'),
      },
      {
        path: 'switch',
        name: 'switch',
        component: () => import('../components/document/switch.vue'),
      },
      {
        path: 'slider',
        name: 'slider',
        component: () => import('../components/document/slider.vue'),
      },
      {
        path: 'table',
        name: 'table',
        component: () => import('../components/document/table.vue'),
      },
      {
        path: 'tag',
        name: 'tag',
        component: () => import('../components/document/tag.vue'),
      },
      {
        path: 'pagination',
        name: 'pagination',
        component: () => import('../components/document/pagination.vue'),
      },
      {
        path: 'avatar',
        name: 'avatar',
        component: () => import('../components/document/avatar.vue'),
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('../components/document/message.vue'),
      },
      {
        path: 'navMenu',
        name: 'navMenu',
        component: () => import('../components/document/navMenu.vue'),
      },
      {
        path: 'tabs',
        name: 'tabs',
        component: () => import('../components/document/tabs.vue'),
      },
      {
        path: 'tooltip',
        name: 'tooltip',
        component: () => import('../components/document/tooltip.vue'),
      },
      {
        path: 'collapse',
        name: 'collapse',
        component: () => import('../components/document/collapse.vue'),
      },
      {
        path: 'divider',
        name: 'divider',
        component: () => import('../components/document/divider.vue'),
      },
      {
        path: 'backtotop',
        name: 'backtotop',
        component: () => import('../components/document/backtotop.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
