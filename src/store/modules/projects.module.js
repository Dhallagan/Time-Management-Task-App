import Vue from "vue";
import api from "@/api/api.service";
import {
  makeProject,
  makeTask,
  getProjectById,
  getProjectByTaskId
} from "@/helpers/projects.helpers";

import { FETCH_PROJECTS, PROJECTS_SAVE } from "@/store/actions.types";
import {
  PROJECT_ADD,
  SET_PROJECTS,
  TASK_ADD,
  TASK_DELETE
} from "@/store/mutations.types";

const initialState = {
  projects: []
};

export const state = { ...initialState };

export const actions = {
  [FETCH_PROJECTS]({ commit }) {
    api.getState().then((state) => commit(SET_PROJECTS, state.data));
  },
  [PROJECTS_SAVE]({ state }) {
    api
      .setState(state.projects)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  }
};

export const mutations = {
  [SET_PROJECTS](state, projects) {
    state.projects = projects;
  },
  [PROJECT_ADD](state, { name }) {
    state.projects.push(makeProject(name));
    this.dispatch(PROJECTS_SAVE);
  },
  [TASK_ADD](
    state,
    { projectId, name, notes, importance, urgency, deadline, assignee }
  ) {
    const project = getProjectById(state.projects, projectId);
    project.arrBackLog.push(
      makeTask(name, notes, importance, urgency, deadline, assignee)
    );
    this.dispatch(PROJECTS_SAVE);
  },
  [TASK_DELETE](state, { projectId, taskId }) {
    const project = getProjectByTaskId(state.projects, taskId);
    //console.log(project);
    if (project.arrBackLog.find((task) => task.id === taskId)) {
      console.log("Entered backlog");
      project.arrBackLog.splice(
        project.arrBackLog.findIndex((task) => task.id === taskId),
        1
      );
    } else if (project.arrInProgress.find((task) => task.id === taskId)) {
      console.log("Entered progress");
      project.arrInProgress.splice(
        project.arrInProgress.findIndex((task) => task.id === taskId),
        1
      );
    } else if (project.arrNeedHelp.find((task) => task.id === taskId)) {
      console.log("Entered help");
      project.arrNeedHelp.splice(
        project.arrNeedHelp.findIndex((task) => task.id === taskId),
        1
      );
    } else if (project.arrDone.find((task) => task.id === taskId)) {
      console.log("Entered done");
      project.arrDone.splice(
        project.arrDone.findIndex((task) => task.id === taskId),
        1
      );
    }

    this.dispatch(PROJECTS_SAVE);
  }
};

const getters = {
  projects(state) {
    return state.projects;
  },
  getProjectById: (state) => (projectId) => {
    return getProjectById(state.projects, projectId);
  },
  getProjectByTaskId: (state) => (taskId) => {
    return getProjectByTaskId(state.projects, taskId);
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
