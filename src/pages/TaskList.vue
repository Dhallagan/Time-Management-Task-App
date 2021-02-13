<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <h1>Task Queue</h1>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Project</th>
          <th scope="col">Task</th>
          <th scope="col">Assigned To</th>
          <th scope="col">Status</th>
          <th scope="col">Urgency</th>
          <th scope="col">Importance</th>
          <th scope="col">Due</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projectsListView()" :key="project">
          <th scope="row"></th>
          <td>{{ project.project }}</td>
          <td>{{ project.task }}</td>
          <td>{{ project.assignee }}</td>
          <td class="priority-cell" :class="classStatus(project.status)">
            {{ project.status }}
          </td>
          <td class="priority-cell" :class="classOrder(project.urgency)">
            {{ project.urgency }}
          </td>
          <td :class="classOrder(project.importance)">
            {{ project.importance }}
          </td>
          <td>{{ format(new Date(project.deadline), "MMM dd") }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { format } from "date-fns";
import { projectsAsList } from "@/helpers/projects.helpers";
export default {
  name: "TaskList",
  props: {
    projects: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    classOrder(flag) {
      var bgColor = "";
      if (flag === "Urgent" || flag === "Important") {
        bgColor = "bg-danger font-weight-bold text-light";
      }
      return bgColor;
    },
    classStatus(status) {
      var bgColor = "";
      switch (status) {
        case "Completed":
          bgColor = "bg-success text-light";
          break;
        case "Backlog":
          bgColor = "bg-light ";
          break;
        case "In Progress":
          // code block
          bgColor = "bg-warning text-light";
          break;
        case "Stuck":
          // code block
          bgColor = "bg-danger text-light";
          break;
        default:
        // code block
      }
      return bgColor;
    },
    projectsListView() {
      return projectsAsList(this.projects);
    },
  },
  data() {
    return {
      format,
      newTask: "",
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
.priority-cell {
  border-right: 1px solid #dee2e6;
}
</style>
