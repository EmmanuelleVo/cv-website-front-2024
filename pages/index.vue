<template>
    <div class="home">
        <h1 class="u-visually-hidden">Home • CV - Emmanuelle Vo</h1>
        <section class="header c-wrapper">
          <div class="header__container">
            <div class="title--section-mark">
              <h2 class="title title--section">{{ page.homePage.section_1_title}}</h2>
            </div>
            <div class="header__content">
              <div class="header__content-inner">
                <p class="header__excerpt--big excerpt--big">Experience the benefits of working with <span class="bold">Emmanuelle Vo</span>, a dedicated full-stack developer.</p>
                <div class="header__excerpt excerpt">
                  <SanityContent :blocks="page.homePage.section_1_text" class="header__excerpt excerpt"/>
                </div>
              </div>
            </div>
            <figure class="header__figure">
              <img
                  :src="$urlFor(page.homePage.section_1_image).width(800).url()"
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
            <h2 class="title title--section">{{ page.homePage.section_2_title}}</h2>
          </div>
          <div class="home__s1__container">
            <p class="excerpt--big">I use my <span class="bold">experience</span> to add value to your project.</p>
            <div class="home__s1__content">
              <div class="excerpt">
                <SanityContent :blocks="page.homePage.section_2_text" class="excerpt" />
                <!-- TODO:page.homePage.link -->
                <NuxtLink to="/about" title="Learn more about me" class="c-btn c-btn--primary"><span>More about me</span></NuxtLink>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" class="home__s2">
          <div class="title--section-mark">
            <h2 class="title title--section">{{ page.homePage.section_3_title}}</h2>
          </div>
          <div class="home__s2__container">
            <!-- TODO:Swiper -->
            <p>My project</p>
          </div>

        </section>

        <section id="competences" class="home__s3 c-wrapper">
          <div class="title--section-mark">
            <h2 class="title title--section">{{ page.homePage.section_4_title}}</h2>
          </div>
          <div class="home__s3__container">
            <div class="home__s3__container-left">
              <p class="excerpt--big">Throw anything at me. <span class="bold">I will get it done.</span></p>
              <!-- TODO:IMAGE -->
            </div>
            <div class="home__s3__lists">
              <ul class="home__s3__list">
                <span class="title title--list">What we do</span>
                <li class="home__s3__item" v-for="competence in page.homePage.competences" :key="competence.key">{{ competence.competenceName }}</li>
              </ul>
              <ul class="home__s3__list">
                <span class="title title--list">What we do</span>
                <li class="home__s3__item" v-for="technology in page.homePage.technologies" :key="technology.key">{{ technology.technologyName }}</li>
              </ul>
            </div>
          </div>
        </section>
    </div>
</template>



<script setup lang="ts">

const query = groq`*[_type == 'page' && pageType == 'home'][0]{
  ...,
  homePage {
    ...,
    section_1_text[] {
      ...,
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug.current
        }
      }
    }
  }
}`;

const { data: page } = useSanityQuery(query);



definePageMeta({
  title: 'Home • CV - Emmanuelle Vo'
})

</script>