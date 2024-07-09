<template>
    <div class="home">
        <h1 class="u-visually-hidden">Home • CV - Emmanuelle Vo</h1>
        <section class="header c-wrapper">
          <div class="header__container">
            <div class="title--section-mark">
              <h2 class="title title--section">{{ data.page.homePage.section_1_title}}</h2>
            </div>
            <div class="header__content">
              <div class="header__content-inner">
                <p class="header__excerpt--big excerpt--big">Experience the benefits of working with <span class="extra-bold">Emmanuelle Vo</span>, a dedicated full-stack developer.</p>
                <div class="header__excerpt excerpt">
                  <SanityContent :blocks="data.page.homePage.section_1_text" class="header__excerpt excerpt"/>
                </div>
              </div>
            </div>
            <figure class="header__figure">
              <img
                  :src="$urlFor(data.page.homePage.section_1_image).width(800).url()"
                  class="header__img"
                  alt="person working on computer"
                  loading="lazy"
              />
            </figure>
            <div class="header__mark">
              <span class="header__mark-content">Scroll down for more</span>
            </div>
          </div>
        </section>

        <section id="formations" class="home__s1 c-wrapper">
          <div class="title--section-mark">
            <h2 class="title title--section">{{ data.page.homePage.section_2_title}}</h2>
          </div>
          <div class="home__s1__container">
            <p class="excerpt--big">I use my <span class="extra-bold">experience</span> to add value to your project.</p>
            <div class="home__s1__content">
              <div class="excerpt">
                <SanityContent :blocks="data.page.homePage.section_2_text" class="excerpt" />
                <NuxtLink to="/about" title="Learn more about me" class="c-btn c-btn--primary"><span>More About Me</span></NuxtLink>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" class="home__s2">
          <div class="title--section-mark c-wrapper">
            <h2 class="title title--section">{{ data.page.homePage.section_3_title}}</h2>
          </div>
          <div class="home__s2__container">
            <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
            :slides-per-view="2"
            :pagination="{
              el: '.swiper-pagination',
              clickable: true,
            }"
            :loop="true"
            :effect="'creative'"
            :autoplay="{
              delay: 8000,
              disableOnInteraction: true,
            }"
            :creative-effect="{
              prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }"
            :breakpoints="{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }"
            >
              <SwiperSlide v-for="(project, index) in data.projects" :key="project.key" class="card">
                <div class="card__figure-container">
                  <figure class="card__figure" :style="{ backgroundImage: `url(${$urlFor(project.image).width(800).url()})` }"></figure>
                </div>
                <div class="card__content">
                  <span class="card__title"><span class="card__number">{{ index+1 }} / </span> {{ project.name }}</span>
                  <span class="card__description">{{ project.description }}
                    <span class="card__arrow"><svg xmlns="http://www.w3.org/2000/svg" width="8.077" height="13.326"><path d="M.707.707l3.971 3.971 1.985 1.985-5.956 5.956" fill="none" stroke="currentColor" stroke-width="2"/></svg></span>
                  </span>
                </div>
                <NuxtLink :to="project.link.url" target="_blank" title="Learn more about the project" class="card__link"></NuxtLink>
              </SwiperSlide>
              <div class="swiper-pagination"></div>
            </Swiper>
          </div>


        </section>

        <section id="competences" class="home__s3 c-wrapper">
          <div class="title--section-mark">
            <h2 class="title title--section">{{ data.page.homePage.section_4_title}}</h2>
          </div>
          <div class="home__s3__container">
            <div class="home__s3__container-left">
              <p class="excerpt--big">Throw anything at me. <span class="extra-bold">I will get it done.</span></p>
              <figure class="home__s3__figure">
                  <img
                      :src="$urlFor(data.page.homePage.section_4_image).width(350).url()"
                      class="home__s3__img"
                      alt="person working on computer"
                      loading="lazy"
                  />
                </figure>
            </div>
            <div class="home__s3__lists">
              <ul class="home__s3__list">
                <span class="title title--list">What I do</span>
                <li class="home__s3__item" v-for="competence in data.page.homePage.competences" :key="competence.key">{{ competence.competenceName }}</li>
              </ul>
              <ul class="home__s3__list">
                <span class="title title--list">Technologies I use</span>
                <li class="home__s3__item" v-for="technology in data.page.homePage.technologies" :key="technology.key">{{ technology.technologyName }}</li>
              </ul>
            </div>
          </div>
        </section>
    </div>
</template>



<script setup lang="ts">

const query = groq`{
   "page":*[_type == "page" && pageType == 'home'][0]{..., homePage{...}}, 
   "projects":*[_type=="project"]{...}
}`;

const { data: data } = useSanityQuery(query);

definePageMeta({
  title: 'Home • CV - Emmanuelle Vo'
})

</script>