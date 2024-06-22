<template>
    <div class="home">
        <h1 class="u-visually-hidden">Home • CV - Emmanuelle Vo</h1>
        <section class="home__s1">
          <h2 class="title title--section">{{ page.homePage.section_1_title}}</h2>
          <p class="home__s1__excerpt--big">Experience the benefits of working with <span class="bold">Emmanuelle Vo</span>, a dedicated full-stack developer.</p>
          <SanityContent :blocks="page.homePage.section_1_text" class="home__s1__excerpt"/>
          <!-- <SanityImage  /> -->
        </section>

        <section class="home__s1">
          <h2 class="title title--section">{{ page.homePage.section_2_title}}</h2>
          
        </section>
    </div>
</template>



<script setup lang="ts">

const query = groq`*[_type == 'page' && pageType == 'home'][0]{
  ...,
  homePage {
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