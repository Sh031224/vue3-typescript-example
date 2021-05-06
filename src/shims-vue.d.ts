declare module "*.vue" {
  import { DefineComponent } from "vue";
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $https: any;
    $urls: any;
    $Message: any;
    $Modal: any;
  }

  const component: DefineComponent<{}, {}, Vue, any>;
  export default component;
}
