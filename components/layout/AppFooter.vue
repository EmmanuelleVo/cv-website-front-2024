<template>
    <footer class="footer">
        <div class="footer__container c-wrapper">
            <div class="footer__main">
                <div class="footer__main-header">
                    <div class="footer__main-logo">
                        <NuxtLink to="/" title="Home" class="u-absolute">Home</NuxtLink>
                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="60"><g transform="translate(-106 -34)"><circle data-name="Ellipse 1" cx="18" cy="18" r="18" transform="translate(123 47)" fill="#ffee32"/><text transform="translate(107 83)" fill="#161617" font-size="50" font-family="HelveticaNeue-Bold, Helvetica Neue" font-weight="700"><tspan x="0" y="0">V</tspan></text></g></svg>
                    </div>
                    <div class="footer__main-title">
                        <p class="">Think we might click? 
                            <br> 
                            <span class="extra-bold"><NuxtLink to="/" title="contact" class="link">Let's work together</NuxtLink> and find out.</span>
                        </p>
                    </div>
                </div>
                <div class="footer__main-footer">
                    <div class="footer__main-copyright footer__copyright footer__copyright-desktop">
                        <ul class="footer__copyright-list">
                            <li class="footer__copyright-item">©cv.emmanuelle-vo.be 2024. All rights reserved.</li>
                            <li class="footer__copyright-item"><NuxtLink to="#" @click="disableLink">Terms and Conditions</NuxtLink></li>
                            <li class="footer__copyright-item"><NuxtLink to="#" @click="disableLink">Privacy Policy</NuxtLink></li>
                            <li class="footer__copyright-item"><NuxtLink to="#" @click="disableLink">Cookie Policy</NuxtLink></li>
                            <li class="footer__copyright-item"><NuxtLink to="#" @click="disableLink">Working Hours</NuxtLink></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer__aside">
                <div class="footer__aside-container">
                    <span class="footer__aside-title title">Address</span>
                    <span class="footer__aside-content" style="max-width: 130px;">{{ settings.address }}</span>
                </div>
                <div class="footer__aside-container">
                    <span class="footer__aside-title title">About me</span>
                    <span class="footer__aside-content">You can find more about my works and me in the following links :</span>
                </div>
                <div class="footer__aside-container">
                    <span class="footer__aside-title title">Contact me</span>
                    <div class="footer__aside-list">
                        <NuxtLink to="tel:+32 498 62 48 15" title="Phone me" external class="footer__aside-content footer__link">BE: {{ settings.phoneNumber }}</NuxtLink>
                        <NuxtLink :to="`mailto:${settings.email}`" title="Send me an email" external class="footer__aside-content footer__link">{{ settings.email}}</NuxtLink>
                    </div>
                </div>
                <div class="footer__aside-container">
                    <span class="footer__aside-title title u-visually-hidden">Links</span>
                    <div class="footer__aside-list">
                        <NuxtLink :to="settings.github" title="GitHub" external target="_blank" class="footer__aside-content footer__link">Github.com</NuxtLink>
                    <NuxtLink :to="settings.linkedin" title="LinkedIn" external target="_blank" class="footer__aside-content footer__link">LinkedIn.com</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="footer__copyright footer__copyright-mobile">
                        <ul class="footer__copyright-list">
                            <li class="footer__copyright-item">©cv.emmanuelle-vo.be 2024. All rights reserved.</li>
                            <li class="footer__copyright-item"><NuxtLink to="#" @click="disableLink">Terms and Conditions</NuxtLink></li>
                            <li class="footer__copyright-item"><NuxtLink to="#" @click="disableLink">Privacy Policy</NuxtLink></li>
                            <li class="footer__copyright-item"><NuxtLink to="#" @click="disableLink">Cookie Policy</NuxtLink></li>
                            <li class="footer__copyright-item"><NuxtLink to="#" @click="disableLink">Working Hours</NuxtLink></li>
                        </ul>
                    </div>
        </div>
    </footer>
</template>


<script setup lang="ts">    
    const query = groq`*[_type == 'settings'][0]`;
	const { data: settings } = useSanityQuery(query);

    const disableLink = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }
</script>