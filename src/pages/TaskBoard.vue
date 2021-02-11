<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <h1>Task Board</h1>
      </div>
    </div>

    <div class="row mt-5" v-for="project in projects" :key="project.name">
      <div class="col-12 border-bottom">
        <h2>{{ project.name }}</h2>

        <div class="row mt-5 ml-5">
          <div class="col-3">
            <div class="p-2 alert alert-secondary">
              <h3>Back Log</h3>

              <draggable
                class="list-group kanban-column"
                :list="project.arrBackLog"
                group="tasks"
              >
                <div
                  class="list-group-item"
                  v-for="backlog in project.arrBackLog"
                  :key="backlog.name"
                >
                  {{ backlog.name }}

                  <div class="row">
                    <div class="col-12">
                      <span class="badge badge-secondary mr-1">{{
                        backlog.urgency
                      }}</span>

                      <span class="badge badge-secondary">{{
                        backlog.priority
                      }}</span>

                      <span class="ml-1 float-right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-clock"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                          />
                          <path
                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                          />
                        </svg>
                        {{ formatDate(backlog.deadline) }}
                      </span>
                    </div>
                  </div>
                </div>
              </draggable>
            </div>
          </div>

          <div class="col-3">
            <div class="p-2 alert alert-warning">
              <h3>In Progress</h3>
              <!-- In Progress draggable component. Pass arrInProgress to list prop -->
              <draggable
                class="list-group kanban-column"
                :list="project.arrInProgress"
                group="tasks"
              >
                <div
                  class="list-group-item"
                  v-for="element in project.arrInProgress"
                  :key="element.name"
                >
                  {{ element.name }}

                  <div class="row">
                    <div class="col-12">
                      <span class="badge badge-secondary mr-1">{{
                        element.urgency
                      }}</span>

                      <span class="badge badge-secondary">{{
                        element.priority
                      }}</span>

                      <span class="ml-1 float-right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-clock"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                          />
                          <path
                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                          />
                        </svg>
                        {{ formatDate(element.deadline) }}
                      </span>
                    </div>
                  </div>
                </div>
              </draggable>
            </div>
          </div>

          <div class="col-3">
            <div class="p-2 alert alert-danger">
              <h3>Need Help</h3>
              <!-- In Progress draggable component. Pass arrInProgress to list prop -->
              <draggable
                class="list-group kanban-column"
                :list="project.arrNeedHelp"
                group="tasks"
              >
                <div
                  class="list-group-item"
                  v-for="element in project.arrNeedHelp"
                  :key="element.name"
                >
                  {{ element.name }}

                  <div class="row">
                    <div class="col-12">
                      <span class="badge badge-secondary mr-1">{{
                        element.urgency
                      }}</span>

                      <span class="badge badge-secondary">{{
                        element.priority
                      }}</span>

                      <span class="ml-1 float-right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-clock"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                          />
                          <path
                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                          />
                        </svg>
                        {{ formatDate(element.deadline) }}
                      </span>
                    </div>
                  </div>
                </div>
              </draggable>
            </div>
          </div>

          <div class="col-3">
            <div class="p-2 alert alert-success">
              <h3>Done</h3>
              <!-- Testing draggable component. Pass arrNeedHelp to list prop -->
              <draggable
                class="list-group kanban-column"
                :list="project.arrDone"
                group="tasks"
              >
                <div
                  class="list-group-item"
                  v-for="element in project.arrDone"
                  :key="element.name"
                >
                  {{ element.name }}

                  <div class="row">
                    <div class="col-12">
                      <span class="badge badge-secondary mr-1">{{
                        element.urgency
                      }}</span>

                      <span class="badge badge-secondary">{{
                        element.priority
                      }}</span>

                      <span class="ml-1 float-right">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-clock"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
                          />
                          <path
                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
                          />
                        </svg>
                        {{ formatDate(element.deadline) }}
                      </span>
                    </div>
                  </div>
                </div>
              </draggable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";
import draggable from "vuedraggable";

export default {
  name: "TaskBoard",
  components: {
    draggable,
  },
  methods: {
    formatDate: function (date) {
      return format(new Date(date), "MMM dd");
    },
  },
  props: {
    projects: Array,
  },
  data() {
    return {
      format,
      newTask: "",
      // 4 arrays to keep track of our 4 statuses
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
