<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <h1>Task List</h1>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Project</th>
          <th scope="col">Task</th>
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
          <td :class="classStatus(project.status)">{{ project.status }}</td>
          <td :class="classOrder(project.urgency)">{{ project.urgency }}</td>
          <td :class="classOrder(project.priority)">{{ project.priority }}</td>
          <td>{{ format(new Date(project.deadline), "MMM dd") }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <div class="row mt-5" v-for="project in projects" :key="project.name">
      <div class="col-12 border-bottom">
        <h2>{{ project.name }}</h2>

        <div class="row mt-5 ml-5">
          <div class="col-3">
            <div class="p-2 alert alert-secondary">
              <h3>Back Log</h3>

              <div
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  name: "TaskBoard",
  methods: {
    classOrder: function (flag) {
      var bgColor = "";
      if (flag === "Urgent" || flag === "Important") {
        bgColor = "bg-warning text-light";
      }
      return bgColor;
    },
    classStatus: function (status) {
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
    //add new tasks method
    projectsListView: function () {
      var listView = [];

      var arrUI = [];
      var arrUNI = [];
      var arrNUI = [];
      var arrNUNI = [];

      this.projects.forEach((project) => {
        project.arrBackLog.forEach((backlog) => {
          var item = {
            project: "",
            task: "",
            priority: "",
            urgency: "",
            deadline: "",
            status: "",
          };
          item.project = project.name;
          item.task = backlog.name;
          item.priority = backlog.priority;
          item.urgency = backlog.urgency;
          item.deadline = backlog.deadline;
          item.status = "Backlog";

          //listView.push(item);
          if (item.urgency === "Urgent" && item.priority === "Important") {
            arrUI.push(item);
          }
          if (item.urgency === "Urgent" && item.priority === "Not Important") {
            arrUNI.push(item);
          }
          if (item.urgency === "Not Urgent" && item.priority === "Important") {
            arrNUI.push(item);
          }
          if (
            item.urgency === "Not Urgent" &&
            item.priority === "Not Important"
          ) {
            arrNUNI.push(item);
          }
        });

        project.arrBackLog.forEach((inProgress) => {
          var item = {
            project: "",
            task: "",
            priority: "",
            urgency: "",
            deadline: "",
            status: "",
          };
          item.project = project.name;
          item.task = inProgress.name;
          item.priority = inProgress.priority;
          item.urgency = inProgress.urgency;
          item.deadline = inProgress.deadline;
          item.status = "In Progress";

          //listView.push(item);
          if (item.urgency === "Urgent" && item.priority === "Important") {
            arrUI.push(item);
          }
          if (item.urgency === "Urgent" && item.priority === "Not Important") {
            arrUNI.push(item);
          }
          if (item.urgency === "Not Urgent" && item.priority === "Important") {
            arrNUI.push(item);
          }
          if (
            item.urgency === "Not Urgent" &&
            item.priority === "Not Important"
          ) {
            arrNUNI.push(item);
          }
        });

        project.arrDone.forEach((completed) => {
          var item = {
            project: "",
            task: "",
            priority: "",
            urgency: "",
            deadline: "",
            status: "",
          };
          item.project = project.name;
          item.task = completed.name;
          item.priority = completed.priority;
          item.urgency = completed.urgency;
          item.deadline = completed.deadline;
          item.status = "Completed";

          if (item.urgency === "Urgent" && item.priority === "Important") {
            arrUI.push(item);
          }
          if (item.urgency === "Urgent" && item.priority === "Not Important") {
            arrUNI.push(item);
          }
          if (item.urgency === "Not Urgent" && item.priority === "Important") {
            arrNUI.push(item);
          }
          if (
            item.urgency === "Not Urgent" &&
            item.priority === "Not Important"
          ) {
            arrNUNI.push(item);
          }
        });
      });

      listView = listView.concat(arrUI, arrUNI, arrNUI, arrNUNI);
      return listView;
    },
  },
  data() {
    return {
      format,
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
