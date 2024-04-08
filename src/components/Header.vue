<script></script>

<template>
  <header>
    <div class="container-fluid">
      <!--% Mobile: 1 col (hamburger) - tablet: 2 col (tolgo social) - desktop: 3 col FULL-->
      <div
        class="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-around align-items-center"
      >
        <!--! logo -->
        <div id="logo" class="col d-flex justify-content-center">
          <img src="../../../public/img/dark-logo.png" alt="MaxCoach" />
        </div>
        <!--! /logo -->
        <!--? Dropdown menu -->
        <nav id="drop-menu" class="col d-flex justify-content-center">
          <ul class="nav">
            <!--% item navbar -->
            <li class="nav-item active dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
                >Dropdown</a
              >
              <!--% azioni dropdown -->
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
              </ul>
              <!--% azioni dropdown -->
            </li>
          </ul>
        </nav>
        <!--? /Dropdown menu -->
        <!--* Social icon -->
        <div id="social" class="col d-flex justify-content-center">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <!--* /Social icon -->
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/general" as *;
@use "../assets/scss/partials/variables" as *;

// logo
#logo {
  img {
    height: 26px;
    width: 160px;
  }
}

// #drop-menu,
#social {
  color: $color-boulder;
  i {
    margin: 0 0.8em;
  }
}
</style>
