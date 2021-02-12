import Vue from "vue";
const initialState = {
  projects: [
    {
      name: "Willow",
      arrBackLog: [
        // {
        //   name: "Code Sign Up Page",
        //   priority: "Important",
        //   urgency: "Not Urgent",
        //   deadline: "02/11/2021",
        //   created: "01/24/2021",
        // },
        // {
        //   name: "Test Dashboard",
        //   priority: "Important",
        //   urgency: "Not Urgent",
        //   deadline: "02/13/2021",
        //   created: "01/24/2021",
        // },
        // {
        //   name: "Style Registration",
        //   priority: "Not Important",
        //   urgency: "Not Urgent",
        //   deadline: "02/14/2021",
        //   created: "01/25/2021",
        // },
        // {
        //   name: "Help with Designs",
        //   priority: "Not Important",
        //   urgency: "Not Urgent",
        //   deadline: "02/18/2021",
        //   created: "01/24/2021",
        // },
      ],
      arrInProgress: [],
      arrNeedHelp: [],
      arrDone: [
        {
          name: "Add tracker to Invoice View",
          priority: "Important",
          urgency: "Urgent",
          deadline: "02/17/2021",
          created: "01/20/2021",
          assignee: "Emily"
        }
      ]
    },
    {
      name: "Ad Hoc",
      arrBackLog: [
        {
          name: "Houston Associates",
          priority: "Important",
          urgency: "Urgent",
          deadline: "02/12/2021",
          created: "02/05/2021",
          assignee: "Dylan"
        },
        {
          name: "Add links to Actportal",
          priority: "Important",
          urgency: "Not Urgent",
          deadline: "02/12/2021",
          created: "02/05/2021",
          assignee: "Dylan"
        },
        {
          name: "Fix formating on Lior Report",
          priority: "Important",
          urgency: "Not Urgent",
          deadline: "02/20/2021",
          created: "02/11/2021",
          assignee: "Emily"
        },

        {
          name: "Rerun timekeepers for Alissa",
          priority: "Important",
          urgency: "Not Urgent",
          deadline: "02/11/2021",
          created: "02/11/2021",
          assignee: "Richard"
        }
      ],
      arrInProgress: [
        {
          name: "KR Report for Matt",
          priority: "Important",
          urgency: "Urgent",
          deadline: "02/12/2021",
          created: "02/12/2021",
          assignee: "Richard"
        }
      ],
      arrNeedHelp: [],
      arrDone: [
        {
          name: "Add JR to Credit",
          priority: "Important",
          urgency: "Not Urgent",
          deadline: "02/11/2021",
          created: "02/11/2021",
          assignee: "Emily"
        },
        {
          name: "McCabe Report",
          priority: "Important",
          urgency: "Urgent",
          deadline: "02/12/2021",
          created: "02/11/2021",
          assignee: "Dylan"
        },
        {
          name: "Update Account Analysis for New Year",
          priority: "Important",
          urgency: "Urgent",
          deadline: "02/11/2021",
          created: "02/09/2021",
          assignee: "Paul"
        },
        {
          name: "Natixis rerun for Kimberly",
          priority: "Important",
          urgency: "Not Urgent",
          deadline: "02/11/2021",
          created: "02/11/2021",
          assignee: "Dylan"
        }
      ]
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
          assignee: "Dylan"
        }
      ],
      arrInProgress: [],
      arrNeedHelp: [],
      arrDone: [
        {
          name: "SOEBB",
          priority: "Important",
          urgency: "Not Urgent",
          deadline: "02/10/2021",
          created: "01/20/2021",
          assignee: "Dylan"
        }
      ]
    }
  ]
};

export const state = { ...initialState };

const getters = {
  projects(state) {
    return state.projects;
  }
};

export default {
  state,
  // actions,
  // mutations,
  getters
};
