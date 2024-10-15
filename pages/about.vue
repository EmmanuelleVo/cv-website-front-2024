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
              <span class="header__mark-decoration">
                <span class="header__mark-line"></span>
              </span>
            </div>
          </div>
        </section>

        <section class="about__s1 c-wrapper">
          <div class="title--section-mark">
            <h2 class="title title--section">{{ page.aboutPage.section_2_title}}</h2>
          </div>
          <div class="about__s1__inner">
            <figure class="about__s1__figure">
                <img
                    :src="$urlFor(page.aboutPage.section_2_image).width(800).url()"
                    class="about__s1__img"
                    alt="person working on computer"
                    loading="lazy"
                />
              </figure>
            <div class="about__s1__container">
            <p class="excerpt--big">Started out as a student with a passion in web, became a <span class="extra-bold">full-stack developer.</span></p>
            <div class="about__s1__content">
              <div class="excerpt">
                <SanityContent :blocks="page.aboutPage.section_2_text" class="excerpt" />
              </div>
            </div>
          </div>
          </div>
        </section>
    </div>
</template>


<script setup lang="ts">
import gsap from "gsap";

const query = groq`*[_type == 'page' && pageType == 'about'][0]{
  ...,
  
}`;

const { data: page } = useSanityQuery(query);
const aboutPage = computed(() => page.aboutPage);

definePageMeta({
  title: 'About • CV - Emmanuelle Vo'
})


onMounted(() => {
    gsap.fromTo(".header__container", 
    { y: '10%', opacity: 0 },
    { y: '0%', opacity: 1, duration: 1.5, ease: 'power2.out' }
    );

    const elements = [
      { selector: ".title--section-mark", yStart: '-15%' },
      { selector: ".about__s1__figure", xStart: '-15%' },
      { selector: ".about__s1__container", xStart: '15%' },
    ];

    elements.forEach(({ selector, xStart = '0%', yStart = '0%'}) => {
      gsap.fromTo(selector, 
        { x: xStart, y: yStart, opacity: 0 },
        { 
          x: '0%', y: '0%', opacity: 1, duration: 2, ease: 'power2.out',
          scrollTrigger: {
            trigger: selector,
            start: 'top 80%',
            end: 'top 30%',
            scrub: true,
            once: true,
          }
        }
      );
    });


  });

</script>