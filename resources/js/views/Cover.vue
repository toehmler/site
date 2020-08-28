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
                  <a href="/res2020.pdf" target="_blank" class="fw-500 ml-2 tracking-in-expand">resume</a>
                  <a href="#contact" v-on:click="closeMobileMenu" class="fw-500 ml-2 tracking-in-expand">contact</a>
                  <div class="d-flex flex-row ml-2 tracking-in-expand mt-2">
                      <a href="tel:203-722-1497"><i class="fas fa-phone nav-icon"></i></a>
                      <a href="https://github.com/toehmler" target="__blank"><i class="fab fa-github nav-icon"></i></a>
                      <a href="mailto:treyoehmler@gmail.com"><i class="far fa-envelope nav-icon"></i></a>
                  </div>

                  <!--
                  <i class="fas fa-phone"></i>
                  <i class="far fa-envelope"></i>
                  <i class="fab fa-github"></i>
                  -->
              </div>
              <div class="step" data-step-no="1">
                  <p class="text-center h4 fw-500 bounce-in-top">I'm a developer.</p>
                  <p class="text-center px-4 fw-300 text-focus-in">Scroll down to learn a bit about me.</p>
                  <div id="about"></div>
              </div>
              <div class="step" data-step-no="2">
                  <p class="h5 fw-500 mb-3">I’m highly driven and I enjoy work that challenges me to learn new ways of thinking, new skills and new technologies.</p>
                  <p class="fw-300">I’ve been programming since I was 11 years old and started by teaching myself Objective-C and how to make iPhone apps. I’ve had a passion for developing ever since and have a wide range of computer-related interests. I’ve received <a href="http://nchscourant.com/trey-oehmler-a-self-taught-technology-mastermind/" target="_blank"><u>significant recognition</u></a> for <a href="https://www.newcanaannewsonline.com/news/article/Not-your-father-s-science-fair-Tech-Night-2011-1016715.php" target="_blank"><u>my work</u></a>, including in 2014 by Complex Magazine, which listed me as one of the <a target="_blank" href="https://www.complex.com/pop-culture/2013/01/the-10-youngest-tech-prodigies-right-now/trey-oehmler"><u>top 10 youngest tech prodigies</u></a> in the world. This spring I graduated from <a href="https://athletics.middlebury.edu/sports/mswimdive/2018-19/bios/oehmler_trey_e1m3"><u>Middlebury College</u></a> where I studied Computer Science and Mathematics. </p>
                  <p class="fw-300">With over nine years of programming experience I have developed the ability to quickly learn new languages and technologies at a pace that allows me stay on top of current design trends while prioritizing performance and compatibility. Through growing up during the dawn of the digital and smartphone era, I have been using and developing for the web for the majority of my life and truly believe in the power of the internet and technology to have a lasting impact on its users. Below you’ll find a list of the languages, frameworks and tools and I find myself using most frequently.</p> 


                  <!--
                  <p class="h5 fw-500 mb-3">My name is Trey. I'm a 20 year old web designer, developer and college student. I’m currently studying computer science and math at Middlebury College.</p>
                  <p class="fw-300">I starting teach myself to program when I was 11. Starting with simple websites, I worked my way up to building full-stack web apps, iPhone apps, and developing for motion sensing technology. Nowadays, I have a wide range of development-related interests, though I primarily focus my efforts on creating immersive, responsive and memorable websites.</p> 
                  <p class="h4 fw-500">Technical Experience</p>
                  <p class="fw-300">I have a passion for problem solving and figuring things out. I try to learn as many new skills and technologies as possible so that I can deliver work that’s in touch with current digital design trends while prioritizing performance. Recently, I’ve turned my focus  towards full-stack web development. Below I’ve listed the tools and languages I feel most comfortable using.</p>
                  -->
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
                      <span class="badge badge-pill badge-dark">C++</span>
                      <span class="badge badge-pill badge-dark">Java</span>
                      <span class="badge badge-pill badge-dark">MYSQL</span>
                      <span class="badge badge-pill badge-dark">Photoshop</span>
                      <span class="badge badge-pill badge-dark">Sketch</span>
                  </p>
                  <div id="projects"></div>
              </div>
              <div class="step" data-step-no="3">
                  <p class="h2 fw-500">Recent Projects</p>
                  <p class="fw-300">Since I started freelancing I’ve done work for a wide variety of different business, organizations and non-profits. I can handle projects from scratch or projects for brands with pre-existing visuals and aesthetics. I’ve included a list of my some of my favorite and most recent projects, although if you’d like to see more examples of my work, send me an email at <a href="mailto:treyoehmler@gmail.com"><u>treyoehmler@gmail.com</u></a> or check out my <a href="http://github.com/toehmler"><u>GitHub</u></a>.</p>

              </div>
              <div class="step" data-step-no="4">
                  <img src="/brains.jpeg" class="img-fluid mb-4">
                  <a href="" class="h5 fw-500 project-link" target="__blank">Automatic Brain Tumor Segmentation</a>
                  <p class="fw-300">
                  This self-directed research project utilizes convolutional neural networks to classify brain tissues in MRI scans and focuses on gliomas, the most common form of brain tumor. While my research is ongoing, the current direction targets high grade gliomas in particular. Tissues can be classified as either non-tumor, necrosis, edema, non-enhancing or enhancing tumor regions. The data used for this project was obtained as part of the multimodal brain tumor segmentation challenge (<a href="https://www.smir.ch/BRATS/Start2015"><u>BRATs</u></a>), which is held annually by the UPenn School of Medicine. To view the most recent progress on this project, please refer to my <a href="https://github.com/toehmler"><u>GitHub</u></a>.</p>
              </div>
              <div class="step" data-step-no="5">
                  <a class="project-link" href="https://domcbd.co" target="__blank">
                      <img src="/domcbd.png" class="img-fluid mb-3">
                  </a>
                  <a href="https://domcbd.co" class="h5 fw-500 project-link" target="__blank">domcbd.co</a>
                  <p class="fw-300">Built as a promotional site for the company DomCBD, this project will soon be serving as online storefront for the brand as well. Made with Laravel and Vue, this project features a custom-built content management system and interacts with various Shopify APIs to manage and display products.</p>
              </div>
              <div class="step" data-step-no="6">
                  <a class="project-link" href="https://dompen.co" target="__blank">
                      <img src="/dompen.png" class="img-fluid mb-3">
                  </a>
                  <a href="https://dompen.co" class="h5 fw-500 project-link" target="__blank">dompen.co</a>
                  <p class="fw-300">Developed as a branding site for DomPen, a sister company of DomCBD, this project is built with mobile compatibility, responsiveness and performance at the top of mind. Through utilizing best practices for search engine optimization and accessibility this site serves as a great example of a beautiful and reliable branding strategy for businesses across any industry.</p>
              </div>
              <div class="step" data-step-no="7">
                  <a class="project-link" href="https://onelifemh.org" target="__blank">
                      <img src="/onelife.png" class="img-fluid mb-3">
                  </a>
              </div>
              <div class="step" data-step-no="8">
                  <a href="https://onelifemh.org" target="__blank" class="project-link h5 fw-500">onelifemh.org</a>
                  <p class="fw-300">Designed and developed as an informational website for a student run-charity organization at Middlebury College, this project includes a custom newsletter subscription sign-up form, as well as integration with Stripe to accept donations online. The design is highly responsive and has helped the charity nearly double its annual fundraising goal in the last three months alone.</p>
              </div>
              <div id="contact" class="step" data-step-no="9">
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
