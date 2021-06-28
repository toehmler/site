<template>
  <div id="home">
    <div id="header" class="container-fluid bg-dark-blue">
        <div class="container">
        <div id="img-container" class="row py-5 align-items-center">
          <div class="col-xl-5 col-10 offset-lg-2 order-1 order-md-2">
            <img id="img1" src="/headshot_line_hover.png" class="img-fluid">
            <img id="img2" src="/headshot_line_hover.png" class="img-fluid">
          </div>


          <div class="col-xl-4 col-10 py-3 text-light order-2 order-md-1">
            <p class="h1 display-2 serif">Trey<br>
              <span style="position:relative;bottom:40px">
                Oehmler</span></p>
            <p class="lead">I’m a recent graduate working in San Francisco as a software engineer. I am actively seeking new opportunities and projects.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="projects" class="container-fluid py-5">
      <div class="container">
        <div class="row justify-content-center justify-content-lg-start align-items-center">
          <div v-for="project in projects" class="col-lg-6 col-md-9 mb-4">
            <a :href="project.href">
              <img :src="project.src" class="img-fluid project-tile">
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--
    <div class="container-fluid py-5">
      <Scrollama
        :debug="false"
        :offset="0.5"
        @step-exit="({index}) => (updateStep(index))"
        @step-enter="({index}) => (updateStep(index))">
        <div class="graphic class" slot="graphic">
          <!--
          <p class="fw-400 h4 w-100">{{currentProject.title}}</p>
          <p class="lead mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>

          <a href="/" class="dark-button mr-auto">{{currentProject.title}}</a>
        </div>
        <div v-for="project in projects" class="step" data-step-no="project.step">
          <a :href="project.href">
            <img :src="project.src" class="img-fluid project-tile">
          </a>
        </div>
      </Scrollama>
    </div>
          -->


  </div>


</template>
<script>
import Scrollama from "vue-scrollama";

export default {
  components: {
    Scrollama
  },
  methods: {
    updateStep(index) {
      console.log('hello world');
      console.log(index);
      this.currentProject = this.projects[index];
    }
  },
  data() {
    return {
      currStep: null,
      currentProject:{},
      projects: [
        {
          step:1,
          title: 'Partisan News Viewer',
          src: '/news_app_tile.jpg',
          href: 'https://news.treyoehmler.com',
        },
        {
          step:2,
          title: 'UNet: Automatic Brain Tumor Segmentation',
          src: '/tumor_tile.jpg',
          href: '/unet',
        },

        {
          step: 3,
          title: 'Dompen',
          src: '/dompen_tile.jpg',
          href: '/dompen',
        },
        {
          step:4,
          title: 'DomCBD',
          src: '/domcbd_tile_2.jpg',
          href: '/domcbd',

        },

        {
          step:5,
          title: 'Gardenhouse Brands',
          src: '/gardenhouse_tile.jpg',
          href: 'https://gardenhousebrands.com',

        },
        {
          step:6,
          title: 'Calavera Cannabis',
          src: '/calavera_tile.jpg',
          href: 'https://calaveracannabis.com',
        },

      ]
    };
  },
  mounted() {
    this.currentProject = this.projects[0];
  },

  
}
</script>

<style lang="scss">


// additions and overrides of DOM elements vue-scrollama sets up
.scrollama-container {
  display: flex;
  .scrollama-graphic {
    flex: 2;
    height: 80vh;
    top: 10vh;
  }
  .scrollama-steps {
    flex: 3;
  }
}

// your elements styles
.graphic {
  height: 100%;
  margin: 0 3rem;
//  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
.step {
  padding: 15vh 0 !important;
  margin: 0 3rem;
  margin-bottom: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>

