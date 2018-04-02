<template>
	<el-row class="container">
		<nav-bar></nav-bar>
		<div class="main" >
			<!-- <side-bar></side-bar> -->
			<side-bar></side-bar>
      <app-main></app-main>
		</div>
	</el-row>
</template>

<script>
import { SideBar, NavBar,AppMain } from "./components";
export default {
  data() {
    return {};
  },
  components: {
    SideBar,
    NavBar,
    AppMain
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleopen() {
      //console.log('handleopen');
    },
    handleclose() {
      //console.log('handleclose');
    },
    handleselect: function(a, b) {},
    //退出登录
    logout: function() {
      var _this = this;
      this.$confirm("确认退出吗?", "提示", {
        //type: 'warning'
      })
        .then(() => {
          sessionStorage.removeItem("user");
          _this.$router.push("/login");
        })
        .catch(() => {});
    },
    //折叠导航栏
    collapse: function() {
      this.collapsed = !this.collapsed;
    },
    showMenu(i, status) {
      this.$refs.menuCollapsed.getElementsByClassName(
        "submenu-hook-" + i
      )[0].style.display = status ? "block" : "none";
    }
  },
  computed: {
    sideBar() {
      return this.$store.getters.sidebar;
    }
  }
};
</script>

<style scoped lang="scss">
@import "~scss_vars";

.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .main {
    display: flex;
    // background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    width:100%;
  }
}
</style>