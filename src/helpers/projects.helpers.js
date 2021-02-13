import { v4 as uuidv4 } from "uuid";

export function makeProject(name, tasks = []) {
  const id = uuidv4();
  var arrBackLog = [];
  var arrInProgress = [];
  var arrNeedHelp = [];
  var arrDone = [];
  return { id, name, arrBackLog, arrInProgress, arrNeedHelp, arrDone };
}

export function makeTask(name, notes, importance, urgency, deadline, assignee) {
  const id = uuidv4();
  const createdAt = new Date();
  return { id, name, notes, importance, urgency, deadline, assignee };
}

export function getProjectById(projects, projectId) {
  return projects.find((project) => project.id === projectId);
}

export function getProjectByTaskId(projects, taskId) {
  return projects.find((project) => {
    var inBacklog = project.arrBackLog.find((task) => task.id === taskId);
    var inInProgress = project.arrInProgress.find((task) => task.id === taskId);
    var inStuck = project.arrNeedHelp.find((task) => task.id === taskId);
    var inDone = project.arrDone.find((task) => task.id === taskId);

    if (inBacklog !== undefined) return inBacklog;
    if (inInProgress !== undefined) return inInProgress;
    if (inStuck !== undefined) return inStuck;
    if (inDone !== undefined) return inDone;
  });
}

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
        importance: "",
        urgency: "",
        deadline: "",
        status: "",
        assignee: ""
      };
      item.project = project.name;
      item.task = task.name;
      item.importance = task.importance;
      item.urgency = task.urgency;
      item.deadline = task.deadline;
      item.status = "Backlog";
      item.assignee = task.assignee;

      //listView.push(item);
      if (item.urgency === "Urgent" && item.importance === "Important") {
        arrUI.push(item);
      }
      if (item.urgency === "Urgent" && item.importance === "Not Important") {
        arrUNI.push(item);
      }
      if (item.urgency === "Not Urgent" && item.importance === "Important") {
        arrNUI.push(item);
      }
      if (
        item.urgency === "Not Urgent" &&
        item.importance === "Not Important"
      ) {
        arrNUNI.push(item);
      }
    });

    project.arrInProgress.forEach((task) => {
      var item = {
        project: "",
        task: "",
        importance: "",
        urgency: "",
        deadline: "",
        status: "",
        assignee: ""
      };
      item.project = project.name;
      item.task = task.name;
      item.importance = task.importance;
      item.urgency = task.urgency;
      item.deadline = task.deadline;
      item.status = "In Progress";
      item.assignee = task.assignee;

      //listView.push(item);
      if (item.urgency === "Urgent" && item.importance === "Important") {
        arrUI.push(item);
      }
      if (item.urgency === "Urgent" && item.importance === "Not Important") {
        arrUNI.push(item);
      }
      if (item.urgency === "Not Urgent" && item.importance === "Important") {
        arrNUI.push(item);
      }
      if (
        item.urgency === "Not Urgent" &&
        item.importance === "Not Important"
      ) {
        arrNUNI.push(item);
      }
    });

    project.arrNeedHelp.forEach((task) => {
      var item = {
        project: "",
        task: "",
        importance: "",
        urgency: "",
        deadline: "",
        status: "",
        assignee: ""
      };
      item.project = project.name;
      item.task = task.name;
      item.importance = task.importance;
      item.urgency = task.urgency;
      item.deadline = task.deadline;
      item.status = "Stuck";
      item.assignee = task.assignee;

      //listView.push(item);
      if (item.urgency === "Urgent" && item.importance === "Important") {
        arrUI.push(item);
      }
      if (item.urgency === "Urgent" && item.importance === "Not Important") {
        arrUNI.push(item);
      }
      if (item.urgency === "Not Urgent" && item.importance === "Important") {
        arrNUI.push(item);
      }
      if (
        item.urgency === "Not Urgent" &&
        item.importance === "Not Important"
      ) {
        arrNUNI.push(item);
      }
    });

    project.arrDone.forEach((task) => {
      var item = {
        project: "",
        task: "",
        importance: "",
        urgency: "",
        deadline: "",
        status: "",
        assignee: ""
      };
      item.project = project.name;
      item.task = task.name;
      item.importance = task.importance;
      item.urgency = task.urgency;
      item.deadline = task.deadline;
      item.status = "Completed";
      item.assignee = task.assignee;

      if (item.urgency === "Urgent" && item.importance === "Important") {
        arrUI.push(item);
      }
      if (item.urgency === "Urgent" && item.importance === "Not Important") {
        arrUNI.push(item);
      }
      if (item.urgency === "Not Urgent" && item.importance === "Important") {
        arrNUI.push(item);
      }
      if (
        item.urgency === "Not Urgent" &&
        item.importance === "Not Important"
      ) {
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
