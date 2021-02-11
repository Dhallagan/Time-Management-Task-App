<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-brand href="#">Que</b-navbar-brand>
    </b-navbar>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              List
            </button>
            <button
              type="button"
              class="btn btn-light"
              :class="{ active: this.view == 'kanban' }"
              @click="toggleView"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-kanban"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h11zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11z"
                />
                <path
                  d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3z"
                />
              </svg>
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
import TaskBoard from "./pages/TaskBoard";
import TaskList from "./pages/TaskList";

export default {
  name: "App",
  components: {
    TaskBoard,
    TaskList,
  },
  methods: {
    toggleView: function () {
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
      projects: [
        {
          name: "Willow",
          arrBackLog: [
            {
              name: "Code Sign Up Page",
              priority: "Important",
              urgency: "Not Urgent",
              deadline: "02/11/2021",
              created: "01/24/2021",
            },
            {
              name: "Test Dashboard",
              priority: "Important",
              urgency: "Not Urgent",
              deadline: "02/13/2021",
              created: "01/24/2021",
            },
            {
              name: "Style Registration",
              priority: "Not Important",
              urgency: "Not Urgent",
              deadline: "02/14/2021",
              created: "01/25/2021",
            },
            {
              name: "Help with Designs",
              priority: "Not Important",
              urgency: "Not Urgent",
              deadline: "02/18/2021",
              created: "01/24/2021",
            },
          ],
          arrInProgress: [],
          arrTested: [],
          arrDone: [
            {
              name: "Add tracker to Invoice View",
              priority: "Important",
              urgency: "Urgent",
              deadline: "02/17/2021",
              created: "01/20/2021",
            },
          ],
        },
        {
          name: "Ad Hoc",
          arrBackLog: [
            {
              name: "Fix formating on Lior Report",
              priority: "Important",
              urgency: "Not Urgent",
              deadline: "02/28/2021",
              created: "02/04/2021",
            },
            {
              name: "Update Account Analysis for New Year",
              priority: "Important",
              urgency: "Urgent",
              deadline: "02/11/2021",
              created: "02/09/2021",
            },
            {
              name: "MaCabe Report",
              priority: "Important",
              urgency: "Urgent",
              deadline: "02/12/2021",
              created: "01/20/2021",
            },
          ],
          arrInProgress: [],
          arrTested: [],
          arrDone: [],
        },
        {
          name: "MEAE",
          arrBackLog: [
            {
              name: "Add Groll to ATS exception FIUpload routine ",
              priority: "Important",
              urgency: "Not Urgent",
              deadline: "02/11/2021",
              created: "01/20/2021",
            },
          ],
          arrInProgress: [],
          arrTested: [],
          arrDone: [
            {
              name: "SOEBB",
              priority: "Important",
              urgency: "Not Urgent",
              deadline: "02/10/2021",
              created: "01/20/2021",
            },
          ],
        },
      ],
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
