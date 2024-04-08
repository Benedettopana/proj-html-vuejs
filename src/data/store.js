import { reactive } from "vue";

export const store = reactive({
  //! HEADER
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
  // TODO: Aggiungere icone
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
  //! /HEADER
  // % Footer
  address: {
    title: "Address",
    info: [
      "382 NE 191st St # 87394 Miami, FL 33179-3899",
      "+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)",
      "support@maxcoach.com",
    ],
  },

  socialFooter: [
    {
      iconName: "Facebook",
      iconLink: "#",
      icon: "fa-brands fa-square-facebook",
    },
    {
      iconName: "Twitter",
      iconLink: "#",
      icon: "fa-brands fa-twitter",
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

  //*Explore
  exploreFooter: {
    title: "Explore",
    items: ["Start here", "Success story", "Blog", "Courses", "Contact us"],
  },
  //*Information
  informationFooter: {
    title: "Information",
    items: [
      "Membership",
      "Purchase guide",
      "Privacy policy",
      "Terms of services",
    ],
  },

  instagramFooter: {
    title: "Instagram",
    tag: "@maxcoach",
    photo: [
      "120084500_197897808368764_8114555493043279565_n.jpg",
      "120012142_177596140500760_8623485824101406058_n.jpg",
      "120099363_364334431619755_7198812647386067017_n.jpg",
    ],
  },
  // % /Footer
});
