<template>
    <div class="container-fluid" style="position:relative">
        <div class="container" id="page-content">
            <Scrollama
              :debug="false"
              :offset="0.9"
              @step-enter="stepEnterHandler"
              @step-exit="stepExitHandler"
            >
              <div id="graphic-slot" class="graphic" slot="graphic">
                  <p class="h1 display-4 raleway fw-700 my-0 py-0 logo-top-text tracking-in-expand">Trey</p>
                  <p class="h1 display-4 raleway fw-700 my-0 py-0 logo-bottom-text tracking-in-expand">Oehmler</p>
                  <div id="divider" class="tracking-in-expand"></div>
                  <a href="#about" v-on:click="closeMobileMenu" class="fw-500 mt-3 ml-2 tracking-in-expand d-inline">about</a>
                  <a href="#projects" v-on:click="closeMobileMenu" class="fw-500 ml-2 tracking-in-expand">work</a>
                  <a href="#contact" v-on:click="closeMobileMenu" class="fw-500 ml-2 tracking-in-expand">contact</a>
                  <!--
                  <i class="fas fa-phone"></i>
                  <i class="far fa-envelope"></i>
                  <i class="fab fa-github"></i>
                  -->
              </div>
              <div class="step" data-step-no="1">
                  <p class="text-center h1 fw-500 bounce-in-top">Hi.
                  <p class="text-center fw-300 text-focus-in">I build websites.</p>
                  <div id="about"></div>
              </div>
              <div class="step" data-step-no="2">
                  <p class="h5 fw-500 mb-3">My name is Trey. I'm 20 years old and a web designer, developer and college student. I’m currently studying computer science and math at Middlebury College.</p>
                  <p class="fw-300">At eleven years old I began teaching myself to program. Starting with simple websites, I worked my way up to building full-stack web apps, iPhone apps, and developing for motion sensing technology. Nowadays, I have a wide range of development-related interests, though I primarily focus my efforts on creating immersive, responsive and memorable websites.</p> 
                  <p class="h4 fw-500">Technical Experience</p>
                  <p class="fw-300">I have a passion for problem solving and figuring things out. I try to learn as many new skills and technologies as possible so that I can deliver work that’s in touch with current digital design trends while performing well.  I’ve been around a computer my entire life, and been programming them for the last eight years. Recently, I’ve turned my focus  towards full-stack web development. Below I’ve listed the tools and languages I feel most comfortable using.</p>
                  <p>
                      <span class="badge badge-pill badge-dark">HTML / CSS</span>
                      <span class="badge badge-pill badge-dark">Sass</span>
                      <span class="badge badge-pill badge-dark">Less</span>
                      <span class="badge badge-pill badge-dark">Laravel</span>
                      <span class="badge badge-pill badge-dark">Blade</span>
                      <span class="badge badge-pill badge-dark">Vue.js</span>
                      <span class="badge badge-pill badge-dark">React</span>
                      <span class="badge badge-pill badge-dark">ES6 / Babel</span>
                      <span class="badge badge-pill badge-dark">Python</span>
                      <span class="badge badge-pill badge-dark">C</span>
                      <span class="badge badge-pill badge-dark">Java</span>
                      <span class="badge badge-pill badge-dark">MYSQL</span>
                      <span class="badge badge-pill badge-dark">Photoshop</span>
                      <span class="badge badge-pill badge-dark">Sketch</span>
                  </p>
                  <div id="projects"></div>
              </div>
              <!-- TODO: ADD TECHNICAL SKILLS -->
              <div class="step" data-step-no="3">
                  <p class="h2 fw-500">Recent Projects</p>
                  <p class="fw-300">I can handle projects from scratch or projects for established brands with preexisting visuals and aesthetics. Below is a collection of some of my web development work and some of the projects I'm currently involved in. </p>
              </div>
              <div class="step" data-step-no="4">
                  <a class="project-link" href="https://domcbd.co" target="__blank">
                      <img src="/domcbd.png" class="img-fluid mb-3">
                  </a>
                  <a href="https://domcbd.co" class="h5 fw-500 project-link" target="__blank">domcbd.co</a>
                  <p class="fw-300">An online storefront for DomCBD. Includes a blog with a custom content management system built from the ground up.</p>
              </div>
              <div class="step" data-step-no="5">
                  <a class="project-link" href="https://dompen.co" target="__blank">
                      <img src="/dompen.png" class="img-fluid mb-3">
                  </a>
                  <a href="https://dompen.co" class="h5 fw-500 project-link" target="__blank">dompen.co</a>
                  <p class="fw-300">A informational and branding site for DomPen. Includes a blog, store locatator and dynamic, high-quality graphics.</p>
              </div>
              <div class="step" data-step-no="6">
                  <a class="project-link" href="https://onelifemh.org" target="__blank">
                      <img src="/onelife.png" class="img-fluid mb-3">
                  </a>
              </div>
              <div class="step" data-step-no="7">
                  <a href="https://onelifemh.org" target="__blank" class="project-link h5 fw-500">onelifemh.org</a>
                  <p class="fw-300">A promotional website for OneLife, a fundraising organization for pediatric brain cancer. Includes newsletter integration and Stripe payment processing.</p>
              </div>
              <div id="contact" class="step" data-step-no="8">
                  <p class="h2 fw-500 mb-3">Contact</p>
                  <p class="fw-300">Interested in starting a project with me? Feel free to reach out! I work with my clients to determine compensation well below the market average, while still creating websites that will set you, your brand, or your organization apart.</p>
                  <a href="mailto:treyoehmler@gmail.com"><i class="far fa-envelope contact-icon"></i><span class="small">treyoehmler@gmail.com</span></a>
                  <a href="tel:203-722-1497"><i class="fas fa-phone contact-icon"></i><span class="small">(203) 722-1497</span></a>
                  <a href="https://github.com/toehmler" target="__blank"><i class="fab fa-github contact-icon"></i><span class="small">toehmler</span></a>
              </div>
            </Scrollama>

            <button v-on:click="toggleMobileMenu" id="menu-toggle" class="hamburger hamburger--spring hidden-toggle" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>

        <div id="overlay" class="hidden-overlay"></div>
    </div>
                

</template>

<script>
import 'intersection-observer' // for cross-browser support
import Scrollama from 'vue-scrollama'

const bodyScrollLock = require('body-scroll-lock');
const disableBodyScroll = bodyScrollLock.disableBodyScroll;
const clearAllBodyScrollLocks = bodyScrollLock.clearAllBodyScrollLocks;

export default {
  components: {
    Scrollama
  },
    data() {
        return {
            menu: false
        };
    },
  methods: {
    stepEnterHandler ({element, index, direction}) {
        if (index > 0) {
            $('#graphic-slot').addClass('hidden-mobile');
            $('#menu-toggle').removeClass('hidden-toggle');
        } else if (index === 0) {
            $('#menu-toggle').addClass('hidden-toggle');
        }
            
    },
    stepExitHandler ({element, index, direction}) {
        if (index === 1 && direction === 'up') {
            $('#graphic-slot').removeClass('hidden-mobile');
            $('#menu-toggle').addClass('hidden-toggle');
            $('#menu-toggle').removeClass('is-active');
        }

    },
    toggleMobileMenu() {
        this.menu = !this.menu;
        if (this.menu) {
            $('#graphic-slot').removeClass('hidden-mobile');
            $('#overlay').removeClass('hidden-overlay');
            $('#menu-toggle').addClass('is-active');
            disableBodyScroll($('#graphic-slot'));
        } else {
            $('#graphic-slot').addClass('hidden-mobile');
            $('#overlay').addClass('hidden-overlay');
            $('#menu-toggle').removeClass('is-active');
            clearAllBodyScrollLocks($('#graphic-slot'));
        }
    },
    closeMobileMenu(event) {
        this.menu = false;
        $('#graphic-slot').addClass('hidden-mobile');
        $('#overlay').addClass('hidden-overlay');
        $('#menu-toggle').removeClass('is-active');
        clearAllBodyScrollLocks($('#graphic-slot'));
        event.preventDefault();
        $('html, body').animate({
        scrollTop: $(event.target.hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = event.target.hash;
      });
    }



  }
}
</script>
<style src="vue-scrollama/dist/vue-scrollama.css"></style>
