<template>
    <div class="about">
      <h1 class="u-visually-hidden">About me • CV - Emmanuelle Vo</h1>
        <section class="header c-wrapper">
          <div class="header__container">
            <div class="title--section-mark">
              <h2 class="title title--section">{{ page.aboutPage.section_1_title}}</h2>
            </div>
            <div class="header__content">
              <div class="header__content-inner">
                <p class="header__excerpt--big excerpt--big">I am a <span class="extra-bold">full-stack developer</span> [literally] - away
                  from the corporate buzz.</p>
                <div class="header__excerpt excerpt">
                  <SanityContent :blocks="page.aboutPage.section_1_text" class="header__excerpt excerpt"/>
                </div>
              </div>
            </div>
            <figure class="header__figure">
              <img
                  :src="$urlFor(page.aboutPage.section_1_image).width(800).url()"
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

        <section class="about__s1 c-wrapper">
          <div class="title--section-mark">
            <h2 class="title title--section">{{ page.aboutPage.section_2_title}}</h2>
          </div>
          <div class="about__s1__inner">
            <div class="about__s1__container">
            <p class="excerpt--big">Started out as a small division of a famous brand, turned into a <span class="extra-bold">change-driven machine.</span></p>
            <div class="about__s1__content">
              <div class="excerpt">
                <SanityContent :blocks="page.aboutPage.section_2_text" class="excerpt" />
              </div>
            </div>
          </div>
          <figure class="about__s1__figure">
              <img
                  :src="$urlFor(page.aboutPage.section_2_image).width(800).url()"
                  class="about__s1__img"
                  alt="person working on computer"
                  loading="lazy"
              />
            </figure>
          </div>
        </section>
    </div>
</template>


<script setup lang="ts">

const query = groq`*[_type == 'page' && pageType == 'about'][0]{
  ...,
  
}`;

const { data: page } = useSanityQuery(query);



definePageMeta({
  title: 'About • CV - Emmanuelle Vo'
})
</script>