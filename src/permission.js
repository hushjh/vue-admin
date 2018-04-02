import router from './router'

router.beforeEach((to, from, next) => {
    //NProgress.start();
    if (to.path == '/login') {
      sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'));
    if (!user && to.path != '/login') {
      next({ path: '/login' })
    } else {
      next()
    }
  })
  
  //router.afterEach(transition => {
  //NProgress.done();
  //});