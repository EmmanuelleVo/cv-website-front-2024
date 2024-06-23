<template>
  <div>
      <div class="header__nav">
        <nav class="nav nav-primary c-wrapper">
            <div class="header__nav-logo">
                <NuxtLink to="/" title="Home" class="u-absolute">Home</NuxtLink>
                <div class="nav__logo">
                     <!-- TODO:SVGLOGO -->
                     <svg xmlns="http://www.w3.org/2000/svg" width="53" height="60"><g transform="translate(-106 -34)"><circle data-name="Ellipse 1" cx="18" cy="18" r="18" transform="translate(123 47)" fill="#ffee32"/><text transform="translate(107 83)" fill="#161617" font-size="50" font-family="HelveticaNeue-Bold, Helvetica Neue" font-weight="700"><tspan x="0" y="0">V</tspan></text></g></svg>
                    <div class="nav__logo-text"><span class="bold">Emmanuelle</span> Vo</div>
                 </div>
            </div>
            <div class="nav__wrapper">
                <button class="hamburger">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
                <div class="nav__links-container">
                    <div class="nav__links">
                        <NuxtLink to="/about" title="About" class="nav__link"><span class="nav__link__textWrapper">About</span></NuxtLink>
                        <NuxtLink to="/#formations" title="Formations" class="nav__link"><span class="nav__link__textWrapper">Formations</span></NuxtLink>
                        <NuxtLink to="/#projects" title="Formations" class="nav__link"><span class="nav__link__textWrapper">Projects</span></NuxtLink>
                        <NuxtLink to="/#competences" title="Competences" class="nav__link"><span class="nav__link__textWrapper">Competences</span></NuxtLink>
                        <NuxtLink to="/" title="Contact" class="c-btn c-btn--primary"><span class="nav__link__textWrapper">Work With Me</span></NuxtLink>
                    </div>
                </div>
            </div>
        </nav>
      </div>
  </div>
</template>

<script setup lang="ts">

function handleScroll() {
    if (scrollY > 0) {
        document.querySelector('.header__nav')?.classList.add('is-scrolled')
    } else {
        document.querySelector('.header__nav')?.classList.remove('is-scrolled')
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>