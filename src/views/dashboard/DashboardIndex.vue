<template>
  <div>
  <nav class="navbar fixed-top navbar-expand navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="dropdown profile-dropdown" id="navbarTogglerDemo03">
        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
          <span class="d-none d-sm-inline mx-1">loser</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li>
            <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid top-bar-height">
    <div class="row flex-nowrap">
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white side-bar-height">
          <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li class="nav-item" @click="router.push({name: 'dashboard'})">
              <a href="#" class="nav-link align-middle px-0">
                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
              </a>
            </li>
            <li @click="router.push({name: 'academic_class'})">
              <a href="#" class="nav-link align-middle px-0">
                <i class="fs-4 bi bi-clock-history"></i><span class="ms-1 d-none d-sm-inline">Classes</span>
              </a>
            </li>
            <li @click="router.push({name: 'notes'})">
              <a href="#" class="nav-link px-0 align-middle">
                <i class="fs-4 bi bi-book-half"></i> <span class="ms-1 d-none d-sm-inline">Notes</span></a>
            </li>
            <li @click="router.push({name: 'questions'})">
              <a href="/question" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                <i class="fs-4 bi-quora"></i> <span class="ms-1 d-none d-sm-inline">Questions</span></a>
            </li>
          </ul>
          <hr>
        </div>
      </div>
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </div>
  </div>
</template>
<script setup>
import router from "@/router";
</script>
<style scoped>
.top-bar-height {
  padding-top: 56px;
}
.side-bar-height {
  min-height: calc(100vh - 56px);
}
</style>
<style>
.nav-link {
  color: #FFFFFF;
  font-size: 30px;
  font-weight: 600;
}
.dropdown.profile-dropdown {
  position: relative;
  right: 65px;
}
.dropdown-toggle::after {
  border-top: 0.5em solid;
  border-right: 0.5em solid transparent;
  border-left: 0.5em solid transparent;
}
@media(max-width: 768px) {
  .dropdown.profile-dropdown {
    right: 45px;
  }
}
</style>
