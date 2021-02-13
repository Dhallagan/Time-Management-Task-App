<template>
  <div class="container mt-5">
    <b-modal id="add-task-modal" title="New Task" @ok="handleAddTask()">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="newTask.name"
            placeholder="New Task"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-textarea
          id="textarea"
          v-model="newTask.notes"
          placeholder="Notes"
          rows="3"
          max-rows="6"
        ></b-form-textarea>

        <b-form-group label="Prority">
          <b-form-checkbox
            id="checkbox-1"
            v-model="newTask.urgency"
            name="checkbox-1"
            value="Urgent"
            unchecked-value="Not Urgent"
            inline
            >Urgent</b-form-checkbox
          >

          <b-form-checkbox
            id="checkbox-2"
            v-model="newTask.importance"
            name="checkbox-2"
            value="Important"
            unchecked-value="Not Important"
            inline
            >Important</b-form-checkbox
          >
        </b-form-group>

        <!-- <b-form-group label="Importance">
          <b-form-checkbox-group
            id="checkbox-group-1"
            v-model="newTask.urgency"
            :options="['Urgent', 'Important']"
            button
          ></b-form-checkbox-group>
        </b-form-group> -->

        <label for="example-datepicker">Deadline</label>
        <b-form-datepicker
          id="example-datepicker"
          v-model="newTask.deadline"
          placeholder="When"
          today-button
          :date-format-options="{
            year: undefined,
            month: 'short',
            day: '2-digit',
          }"
          class="mb-2"
        ></b-form-datepicker>
      </form>
    </b-modal>

    <div class="row">
      <div class="col">
        <h1>Task Board</h1>
      </div>
    </div>

    <div class="row mt-2" v-for="project in projects" :key="project.id">
      <div class="col-12">
        <span class="float-right">
          <PlusIcon
            v-b-modal.add-task-modal
            @click.native="selectedProject = project.id"
          />
        </span>
        <h2>{{ project.name }}</h2>

        <div class="row mt-2 ml-5">
          <div class="col-sm-12 col-lg-3 border-left">
            <div class="p-2 alert alert-secondary bg-light">
              <h3>Back Log</h3>

              <draggable
                class="list-group kanban-column"
                :list="project.arrBackLog"
                group="tasks"
              >
                <div
                  class="list-group-item"
                  v-for="task in project.arrBackLog"
                  :key="task.name"
                >
                  {{ task.name }}
                  <RemoveIcon
                    class="icon"
                    @click.native="handleDeleteTask(task.id)"
                  />
                  <div class="row">
                    <div class="col-12">
                      <span class="badge badge-secondary mr-1">{{
                        task.urgency
                      }}</span>

                      <span class="badge badge-secondary">{{
                        task.importance
                      }}</span>

                      <span class="ml-1 float-right">
                        <ClockIcon />
                        {{ formatDate(task.deadline) }}
                      </span>
                    </div>

                    <!-- <div class="row">
                      <div class="col-12">
                        <button @click="handleDeleteTask(task.id)">
                          Delete
                        </button>
                      </div>
                    </div> -->
                  </div>
                </div>
              </draggable>
            </div>
          </div>

          <div class="col-sm-12 col-lg-3 border-left">
            <div class="p-2 alert bg-warning">
              <h3>In Progress</h3>

              <draggable
                class="list-group kanban-column"
                :list="project.arrInProgress"
                group="tasks"
              >
                <div
                  class="list-group-item"
                  v-for="task in project.arrInProgress"
                  :key="task.name"
                >
                  {{ task.name }}
                  <RemoveIcon
                    class="icon"
                    @click.native="handleDeleteTask(task.id)"
                  />
                  <div class="row">
                    <div class="col-12">
                      <span class="badge badge-secondary mr-1">{{
                        task.urgency
                      }}</span>

                      <span class="badge badge-secondary">{{
                        task.importance
                      }}</span>

                      <span class="ml-1 float-right">
                        <ClockIcon />
                        {{ formatDate(task.deadline) }}
                      </span>
                    </div>
                  </div>
                </div>
              </draggable>
            </div>
          </div>

          <div class="col-sm-12 col-lg-3 border-left">
            <div class="p-2 alert alert-danger bg-danger">
              <h3>Stuck</h3>
              <!-- In Progress draggable component. Pass arrInProgress to list prop -->
              <draggable
                class="list-group kanban-column"
                :list="project.arrNeedHelp"
                group="tasks"
              >
                <div
                  class="list-group-item"
                  v-for="task in project.arrNeedHelp"
                  :key="task.name"
                >
                  {{ task.name }}
                  <RemoveIcon
                    class="icon"
                    @click.native="handleDeleteTask(task.id)"
                  />
                  <div class="row">
                    <div class="col-12">
                      <span class="badge badge-secondary mr-1">{{
                        task.urgency
                      }}</span>

                      <span class="badge badge-secondary">{{
                        task.importance
                      }}</span>

                      <span class="ml-1 float-right">
                        <ClockIcon />
                        {{ formatDate(task.deadline) }}
                      </span>
                    </div>
                  </div>
                </div>
              </draggable>
            </div>
          </div>

          <div class="col-sm-12 col-lg-3 border-left">
            <div class="p-2 alert bg-success">
              <h3>Done</h3>
              <!-- Testing draggable component. Pass arrNeedHelp to list prop -->
              <draggable
                class="list-group kanban-column"
                :list="project.arrDone"
                group="tasks"
              >
                <div
                  class="list-group-item"
                  v-for="task in project.arrDone"
                  :key="task.name"
                >
                  {{ task.name }}
                  <RemoveIcon
                    class="icon"
                    @click.native="handleDeleteTask(task.id)"
                  />
                  <div class="row">
                    <div class="col-12">
                      <span class="badge badge-secondary mr-1">{{
                        task.urgency
                      }}</span>

                      <span class="badge badge-secondary">{{
                        task.importance
                      }}</span>

                      <span class="ml-1 float-right">
                        <ClockIcon />
                        {{ formatDate(task.deadline) }}
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
import ClockIcon from "../components/icons/Clock";
import PlusIcon from "../components/icons/Plus";
import RemoveIcon from "../components/icons/Remove";
import { PROJECT_ADD, TASK_ADD, TASK_DELETE } from "@/store/mutations.types";

export default {
  name: "TaskBoard",
  components: {
    draggable,
    ClockIcon,
    PlusIcon,
    RemoveIcon,
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), "MMM dd");
    },
    handleAddProject(text) {
      this.$store.commit(PROJECT_ADD, { name: text });
    },
    handleAddTask(task) {
      var projectId = this.selectedProject;
      this.$store.commit(TASK_ADD, { projectId, ...this.newTask });
    },
    handleDeleteTask(taskId) {
      var projectId = this.selectedProject;
      this.$store.commit(TASK_DELETE, { projectId, taskId });
    },
  },
  props: {
    projects: Array,
  },
  data() {
    return {
      format,
      selectedProject: {},
      newTask: {
        name: "",
        notes: "",
        importance: "",
        urgency: "",
        deadline: Date.now(),
        assignee: null,
      },
    };
  },
};
</script>

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
.icon {
  position: absolute;
  top: 10px;
  right: 10px;
  padding-left: 5px;
}
</style>
