<template>
  <div>
    <h2>Personal projects</h2>
    <div class="projects">
      <Project
        class="project"
        v-for="(project, index) in projects"
        :key="index"
        :name="project.name"
        :description="project.description"
        :image="project.img"
        :url="project.url" />
    </div>
  </div>
</template>

<script>
import Project from '../components/Project.vue'
import json from '../resources/projects.json';

export default {
  name: 'Projects',
  components: {
    Project
  },
  data: function() {
    return {
      projects: json 
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom : 5em;

  .project {
    margin: 1em;
  }
}
</style>