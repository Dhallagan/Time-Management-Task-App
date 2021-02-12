export function projectsAsList(projects) {
  var listView = [];

  var arrUI = [];
  var arrUNI = [];
  var arrNUI = [];
  var arrNUNI = [];

  projects.forEach((project) => {
    project.arrBackLog.forEach((task) => {
      var item = {
        project: "",
        task: "",
        priority: "",
        urgency: "",
        deadline: "",
        status: "",
        assignee: ""
      };
      item.project = project.name;
      item.task = task.name;
      item.priority = task.priority;
      item.urgency = task.urgency;
      item.deadline = task.deadline;
      item.status = "Backlog";
      item.assignee = task.assignee;

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
      if (item.urgency === "Not Urgent" && item.priority === "Not Important") {
        arrNUNI.push(item);
      }
    });

    project.arrInProgress.forEach((task) => {
      var item = {
        project: "",
        task: "",
        priority: "",
        urgency: "",
        deadline: "",
        status: "",
        assignee: ""
      };
      item.project = project.name;
      item.task = task.name;
      item.priority = task.priority;
      item.urgency = task.urgency;
      item.deadline = task.deadline;
      item.status = "In Progress";
      item.assignee = task.assignee;

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
      if (item.urgency === "Not Urgent" && item.priority === "Not Important") {
        arrNUNI.push(item);
      }
    });

    project.arrNeedHelp.forEach((task) => {
      var item = {
        project: "",
        task: "",
        priority: "",
        urgency: "",
        deadline: "",
        status: "",
        assignee: ""
      };
      item.project = project.name;
      item.task = task.name;
      item.priority = task.priority;
      item.urgency = task.urgency;
      item.deadline = task.deadline;
      item.status = "Stuck";
      item.assignee = task.assignee;

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
      if (item.urgency === "Not Urgent" && item.priority === "Not Important") {
        arrNUNI.push(item);
      }
    });

    project.arrDone.forEach((task) => {
      var item = {
        project: "",
        task: "",
        priority: "",
        urgency: "",
        deadline: "",
        status: "",
        assignee: ""
      };
      item.project = project.name;
      item.task = task.name;
      item.priority = task.priority;
      item.urgency = task.urgency;
      item.deadline = task.deadline;
      item.status = "Completed";
      item.assignee = task.assignee;

      if (item.urgency === "Urgent" && item.priority === "Important") {
        arrUI.push(item);
      }
      if (item.urgency === "Urgent" && item.priority === "Not Important") {
        arrUNI.push(item);
      }
      if (item.urgency === "Not Urgent" && item.priority === "Important") {
        arrNUI.push(item);
      }
      if (item.urgency === "Not Urgent" && item.priority === "Not Important") {
        arrNUNI.push(item);
      }
    });
  });

  arrUI.sort(function (a, b) {
    return new Date(a.deadline) - new Date(b.deadline);
  });

  arrUNI.sort(function (a, b) {
    return new Date(a.deadline) - new Date(b.deadline);
  });

  arrNUI.sort(function (a, b) {
    return new Date(a.deadline) - new Date(b.deadline);
  });

  arrNUNI.sort(function (a, b) {
    return new Date(a.deadline) - new Date(b.deadline);
  });

  listView = listView.concat(arrUI, arrUNI, arrNUI, arrNUNI);
  return listView;
}
