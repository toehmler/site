<template>
    <div class="container-fluid" style="position:relative">
        <div class="container">
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
                  <a href="#about" class="fw-500 mt-3 ml-2 tracking-in-expand d-inline">about</a>
                  <a href="#projects" class="fw-500 ml-2 tracking-in-expand">work</a>
                  <a href="#contact" class="fw-500 ml-2 tracking-in-expand">contact</a>
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
                  <p class="h5 fw-500 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas nibh vitae purus tincidunt malesuada. Nunc id odio nec diam blandit porttitor.</p>
                  <p class="fw-300">Ut eleifend eros in augue bibendum, sed tincidunt ex finibus. Phasellus non sapien posuere tortor tempor aliquet. Phasellus at ante sed nisl luctus vestibulum. Pellentesque quis ante pulvinar, sodales mi rhoncus, ultrices ex. Sed ligula lacus, iaculis eu mollis ut, consequat eget nisl. Morbi ornare nulla ut fermentum facilisis.</p> 
                  <p class="fw-300 mb-5">Morbi massa nunc, luctus et dui eu, aliquet posuere sapien. Suspendisse eu ultricies ex, sed blandit enim. Vivamus imperdiet pulvinar dictum. Suspendisse tempor pretium aptent taciti sociosqu ad litora torquent.</p>
                  <p class="h4 fw-500">Technical Experience</p>
                  <p class="fw-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in risus eu justo dapibus vestibulum. Nam nibh nisi, luctus et venenatis quis, commodo sed odio. Nam vestibulum nisi non enim sollicitudin dictum. Donec blandit blandit risus at fringilla. Donec varius massa ac auctor hendrerit. Nulla dui ex, rutrum tempor nisi convallis, pharetra egestas nulla. Cras scelerisque urna in egestas pretium.</p>
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
                  <p class="fw-300">Mauris accumsan, quam sed commodo mattis, lorem eros mattis lorem, ac fermentum turpis orci eu tortor. Vestibulum tincidunt hendrerit accumsan. Duis egestas tempus diam, ac molestie turpis venenatis quis.</p>

              </div>
              <div class="step" data-step-no="4">
                  <img src="/domcbd.png" class="img-fluid mb-3">
                  <p class="h5 fw-500">domcbd.co</p>
                  <p class="fw-300">Proin varius dapibus neque venenatis iaculis. Donec pretium, enim sit amet congue iaculis, lectus tortor ornare nisl, ac lobortis lectus elit sed eros. Proin sed tempus arcu. Donec at leo a nibh laoreet pulvinar.</p>
                  <p class="fw-300">Ut bibendum quis dolor eget fringilla. Integer semper sapien a tellus dictum auctor. Phasellus a tempus magna. Maecenas dolor nunc, suscipit vitae pharetra et, aliquet sit amet turpis.</p>
              </div>
              <div class="step" data-step-no="5">
                  <img src="/dompen.png" class="img-fluid mb-3">
                  <p class="h5 fw-500">dompen.co</p>
                  <p class="fw-300">Donec pellentesque lacus in dolor placerat, eget fringilla magna iaculis. Nunc mollis bibendum bibendum. Mauris sed lorem faucibus, scelerisque velit a, malesuada sem.</p>
                  <p class="fw-300">nteger ut mauris efficitur, ultrices nisl vel, tincidunt mauris. Morbi fringilla sodales blandit. Nulla sollicitudin aliquet lectus, vel auctor sem. Morbi leo metus, pellentesque sit amet efficitur sit amet, vestibulum sit.</p>
              </div>
              <div class="step" data-step-no="6">
                  <img src="/onelife.png" class="img-fluid mb-3">
              </div>
              <div class="step" data-step-no="7">
                  <p class="h5 fw-500">onelifemh.org</p>
                  <p class="fw-300">Praesent augue nisi, pretium ut erat a, porta feugiat nulla. Nulla vitae justo mauris. Phasellus varius nunc purus, non imperdiet felis pellentesque a. Aenean pharetra ligula sit amet turpis scelerisque porta. Quisque accumsan gravida eros a egestas. Curabitur dolor dui, sollicitudin in ante in, dignissim congue tellus.</p>
                  <p class="fw-300">nteger ut mauris efficitur, ultrices nisl vel, tincidunt mauris. Morbi fringilla sodales blandit. Nulla sollicitudin aliquet lectus, vel auctor sem. Morbi leo metus, pellentesque sit amet efficitur sit amet, vestibulum sit.</p>
              </div>
              <div id="contact" class="step" data-step-no="8">
                  <p class="h2 fw-500 mb-3">Contact</p>
                  <p class="fw-300">Integer pulvinar eu enim at mollis. Vivamus in dapibus leo. Ut sed risus est. Cras nec mauris euismod ligula laoreet dictum quis vitae magna. Ut viverra elementum consequat. Sed convallis eu justo vel ornare. Etiam vel sodales neque. Cras porttitor nisi in felis luctus, ac consectetur orci.</p>
                  <a href=""><i class="far fa-envelope contact-icon"></i><span class="small">treyoehmler@gmail.com</span></a>
                  <a href=""><i class="fas fa-phone contact-icon"></i><span class="small">(203) 722-1497</span></a>
                  <a href=""><i class="fab fa-github contact-icon"></i><span class="small">toehmler</span></a>
              </div>
            </Scrollama>

            <button id="menu-toggle" class="hamburger hamburger--spring hidden-toggle" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
            <div id="overlay" class="hidden-overlay"></div>
        </div>
    </div>
                

</template>

<script>
import 'intersection-observer' // for cross-browser support
import Scrollama from 'vue-scrollama'

export default {
  components: {
    Scrollama
  },
    data() {
        return {
            currStep : null
        };
    },
  methods: {
    stepEnterHandler ({element, index, direction}) {
        if (index > 0) {
            $('#graphic-slot').addClass('hidden-mobile');
            $('#menu-toggle').removeClass('hidden-toggle');
        }
    },
    stepExitHandler ({element, index, direction}) {
        console.log(index);
        if (index === 1 && direction === 'up') {
            $('#graphic-slot').removeClass('hidden-mobile');
            $('#menu-toggle').addClass('hidden-toggle');
            $('#menu-toggle').removeClass('is-active');
        }

    }

  }
}
</script>
<style src="vue-scrollama/dist/vue-scrollama.css"></style>
