import { reactive } from "vue";

export const store = reactive({
  //? item nav menu
  navItem: [
    {
      title: "home",
      action: [
        {
          titleAction: "Action",
          linkAction: "#",
        },
        {
          titleAction: "Another Action",
          linkAction: "#",
        },
        {
          titleAction: "Something else here",
          linkAction: "#",
        },
        {
          titleAction: "Separated link",
          linkAction: "#",
        },
      ],
    },
    {
      title: "Pages",
      action: [
        {
          titleAction: "Action",
          linkAction: "#",
        },
        {
          titleAction: "Another Action",
          linkAction: "#",
        },
        {
          titleAction: "Something else here",
          linkAction: "#",
        },
        {
          titleAction: "Separated link",
          linkAction: "#",
        },
      ],
    },
    {
      title: "Courses",
      action: [
        {
          titleAction: "Action",
          linkAction: "#",
        },
        {
          titleAction: "Another Action",
          linkAction: "#",
        },
        {
          titleAction: "Something else here",
          linkAction: "#",
        },
        {
          titleAction: "Separated link",
          linkAction: "#",
        },
      ],
    },
    {
      title: "Features",
      action: [
        {
          titleAction: "Action",
          linkAction: "#",
        },
        {
          titleAction: "Another Action",
          linkAction: "#",
        },
        {
          titleAction: "Something else here",
          linkAction: "#",
        },
        {
          titleAction: "Separated link",
          linkAction: "#",
        },
      ],
    },
    {
      title: "Blog",
      action: [
        {
          titleAction: "Action",
          linkAction: "#",
        },
        {
          titleAction: "Another Action",
          linkAction: "#",
        },
        {
          titleAction: "Something else here",
          linkAction: "#",
        },
        {
          titleAction: "Separated link",
          linkAction: "#",
        },
      ],
    },
    {
      title: "Shop",
      action: [
        {
          titleAction: "Action",
          linkAction: "#",
        },
        {
          titleAction: "Another Action",
          linkAction: "#",
        },
        {
          titleAction: "Something else here",
          linkAction: "#",
        },
        {
          titleAction: "Separated link",
          linkAction: "#",
        },
      ],
    },
  ],
  //? /item nav menu

  //? item social icon
  social: [
    {
      iconName: "Twitter",
      iconLink: "#",
      icon: "fa-brands fa-twitter",
    },
    {
      iconName: "Facebook",
      iconLink: "#",
      icon: "fa-brands fa-facebook-f",
    },
    {
      iconName: "Instagram",
      iconLink: "#",
      icon: "fa-brands fa-instagram",
    },
    {
      iconName: "Linkedin",
      iconLink: "#",
      icon: "fa-brands fa-linkedin-in",
    },
  ],
  //? /item social icon

  //? Action
  action: [
    {
      actionIcon: "Measure",
      actionLink: "#",
      acitonIcon: "",
    },
    {
      actionIcon: "F.A.Q.",
      actionLink: "#",
      acitonIcon: "",
    },
    {
      actionIcon: "Help",
      actionLink: "#",
      acitonIcon: "",
    },
    {
      actionIcon: "Shop",
      actionLink: "#",
      acitonIcon: "",
    },
  ],
  //? /Action
});
