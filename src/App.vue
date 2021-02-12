<template>
  <div id="app">
    <!-- <b-navbar toggleable="md" type="dark" variant="">
      <b-navbar-brand href="#" class="primary">Que</b-navbar-brand>
    </b-navbar> -->
    <div class="container">
      <div class="row mt-4">
        <div class="col-12">
          <div
            class="btn-group float-right"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              class="btn btn-light"
              :class="{ active: this.view == 'list' }"
              @click="toggleView"
            >
              <QueueIcon />
              Queue
            </button>
            <button
              type="button"
              class="btn btn-light"
              :class="{ active: this.view == 'kanban' }"
              @click="toggleView"
            >
              <KanBanIcon />
              Kan Ban
            </button>
          </div>
        </div>
      </div>
    </div>

    <TaskList :projects="this.projects" v-if="this.view === 'list'" />
    <TaskBoard :projects="this.projects" v-if="this.view === 'kanban'" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TaskBoard from "./pages/TaskBoard";
import TaskList from "./pages/TaskList";
import KanBanIcon from "./components/IconKanBan";
import QueueIcon from "./components/IconQueue";
export default {
  name: "App",
  components: {
    TaskBoard,
    TaskList,
    KanBanIcon,
    QueueIcon,
  },
  computed: {
    ...mapGetters(["projects"]),
  },
  methods: {
    toggleView() {
      if (this.view === "list") {
        this.view = "kanban";
      } else if (this.view === "kanban") {
        this.view = "list";
      }
    },
  },
  data() {
    return {
      view: "list",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>
