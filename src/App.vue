<template>
  <div id="app">
    <div class="off-canvas position-right" id="offCanvas" data-off-canvas>
      <ul class="sidebar-menu" data-close="offCanvas">
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/queues" exact>Queues</router-link></li>
        <li><router-link to="/jobs" exact>Jobs</router-link></li>
        <li><router-link to="/servers" exact>Servers</router-link></li>
      </ul>
    </div>
    <div class="off-canvas-content" data-off-canvas-content>
      <div class="top-bar">
        
          <ul class="menu expanded">
            <li class="logo">
              <router-link to="/">RethinkDB Job Queue UI</router-link>
            </li>
            <li><a class="button small menu-button" data-toggle="offCanvas">Menu</a></li>
          </ul>
        
      </div>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    // eslint-disable-next-line
    this.offCanvas = new Foundation.OffCanvas($('#offCanvas'))
  }
}
</script>



<style lang="scss">  
  @import './styles/global';
  
  // Chrome Reset 
  a:focus {
    outline: none;
  }

  .logo, .logo a {
    color: $white;
    font-weight: normal;
  }

  li a.menu-button {
    border-radius: 20px;
    padding-left: 1.5rem;
    padding-right: 1.5rem; 
    font-weight: 600;
    text-transform: uppercase;
    display: inline-block;
    float: right;
  }

  .content-wrapper {
    padding: 0.75rem 0;
  }

  .sidebar-menu {
    @include menu-base();
    @include menu-direction(vertical);
    a {
      color: $secondary-color;
      font-weight: normal;
    }
    a.active {
      font-weight: 600;
      color: $primary-color;
    }
  }
</style>
