import { reactive } from "vue";

export const store = reactive({
  //! TIMER
  timer: {
    days: 104,
    hours: 11,
    min: 34,
    sec: 5,
  },
  //*BTN content
  // TODO: fare stili personalizzati
  button: {
    jumbo: {
      type: 1,
      content: "Get started today",
    },
    ticket: {
      type: 2,
      content: "Get ticket",
    },
    coaching: {
      type: 2,
      content: "Get started today",
    },
    artist: {
      type: 2,
      content: "View all course",
      icon: "fa-solid fa-arrow-right-long arr",
    },
  },
  //% TITLE
  title: {
    jumbo: {
      sectionName: "hello-hero-rossela-script-1.png",
      sectionText: "Artist Coaching And Mentoring Might Be for You",
    },
    coaching: {
      sectionName: "artisti-coaching.png",
      sectionText: "I understand what it takes to create. I can help you with",
    },
    testimonals: {
      sectionName: "testimonials.png",
      sectionText: "Why do people love me?",
    },
    artist: {
      sectionName: "artisti-coaching.png",
      sectionText: "Latest Online Courses",
    },
    article: {
      sectionName: "articles-tips.png",
      sectionText: "Latest From The Blog",
    },
    upcoming: {
      sectionName: "upcoming-events.png",
      sectionText: "Let's Work Together",
    },
  },
  //% /TITLE

  //! HEADER
  //? item nav menu
  navItem: [
    {
      title: "Home",
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

  //* MAIN
  coachBG: [
    {
      img: "artist-shape-01-600x577.png",
      id: "shape-0",
    },
    {
      img: "maxcoach-shape-13-150x150.png",
      id: "shape-1",
    },
    {
      img: "maxcoach-shape-14-1536x343.png",
      id: "shape-2",
    },
    {
      img: "splashp.svg",
      id: "shape-3",
    },
  ],
  point: [
    [
      {
        pointImg: "artist-box-image-01.png",
        title: "Online Coures",
        desc: "Online art coaching now offers you a very powerful way to redesign your artist mind.",
      },
      {
        pointImg: "artist-box-image-02.png",
        title: "One to One",
        desc: "Getting the necessary clarity about the current state to help you improve your ability.",
      },
    ],
    [
      {
        pointImg: "artist-box-image-03.png",
        title: "Anywhere",
        desc: "Acces to voluable and gx»rtable which allow you to setup and live anywhere you want.",
      },
      {
        pointImg: "artist-box-image-04.png",
        title: "On Time",
        desc: "Punctuality is our top priority it's an essential criteria to assess a program quality.",
      },
    ],
  ],
  youtube: [
    {
      img: "artist-video-poster.jpg",
      id: "img-0",
    },
    {
      img: "circle.svg",
      id: "img-1",
    },
    {
      img: "icon-youtube-play.png",
      id: "img-2",
    },
    {
      img: "maxcoach-shape-05-150x150.png",
      id: "img-3",
    },
    {
      img: "maxcoach-shape-12-150x150.png",
      id: "img-4",
    },
    {
      img: "splashp.svg",
      id: "img-5",
    },
    {
      img: "wave.svg",
      id: "img-6",
    },
  ],
  testimonals: [
    {
      name: "Mina Hollace",
      img: "artist-testimonial-avatar-02.jpg",
      activity: "/ Freelancer",
      me: "High level of efficiency and scientific teaching methods",
      about:
        "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
    },
    {
      name: "Madley Pondor",
      img: "artist-testimonial-avatar-03.jpg",
      activity: "IT Specialist",
      me: "lt's a choice of quality for people with special needs",
      about:
        "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
    },
    {
      name: "Florence Themes",
      img: "artist-testimonial-avatar-01.jpg",
      activity: "/ Multimedia Admin",
      me: "lt's a choice of quality for people with special needs",
      about:
        "l'm a very strict person so I require everything to beorganized and neat. Then, l'Il be able to make things right and shine. MaxCoach guys just got me.",
    },
    {
      name: "Mina Hollace",
      img: "artist-testimonial-avatar-04.jpg",
      activity: "/ Freelancer",
      me: "High level of efficiency and scientific teaching methods",
      about:
        "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.",
    },
  ],

  artistCard: [
    {
      img: "artist-course-08-480x480.jpg",
      price: "18.00",
      title: "The Acrylic Painting Academy",
      lesson: "4",
      student: "50",
    },
    {
      img: "artist-course-07-480x480.jpg",
      price: "21.00",
      title: "Drawing and Shading: Complete Course",
      lesson: "14",
      student: "50",
    },
    {
      img: "artist-course-06-480x480.jpg",
      price: "19.00",
      title: "The Color Theory for Digital Artist",
      lesson: "7",
      student: "50",
    },
    {
      img: "artist-course-05-480x480.jpg",
      price: "35.00",
      title: "Ultimate Guide to Digital Sketching for Beginner",
      lesson: "14",
      student: "50",
    },
    {
      img: "artist-course-04-480x480.jpg",
      price: "19.00",
      title: "Portrait Drawing The Smart Way",
      lesson: "2",
      student: "50",
    },
    {
      img: "artist-course-03-480x480.jpg",
      price: "19.00",
      title: "Mastering Watercolor Painting from Beginner",
      lesson: "9",
      student: "50",
    },
    {
      img: "artist-course-02-480x480.jpg",
      price: "25.00",
      title: "The Art & Science of Drawing",
      lesson: "4",
      student: "50",
    },
    {
      img: "artist-course-01-480x480.jpg",
      price: "22.00",
      title: "The Colored Pencil Drawing Course",
      lesson: "6",
      student: "50",
    },
  ],

  event: [
    [
      {
        img: "artist-event-04-250x300.jpg",
        date: "NOV 22, 2020",
        title: "Storytelling Workshop",
        location: "Texas, US",
        icon: "fa-solid fa-location-dot",
      },
      {
        img: "artist-event-02-250x300.jpg",
        date: "NOW 23, 2020",
        title: "International Art Fair 2020",
        location: "Ha,burg, Germany",
        icon: "fa-solid fa-location-dot",
      },
    ],
    [
      {
        img: "artist-event-03-250x300.jpg",
        date: "OCT 10, 2020",
        title: "Painting Art Contest 2020",
        location: "New York, US",
        icon: "fa-solid fa-location-dot",
      },
      {
        img: "artist-event-01-250x300.jpg",
        date: "DEC 15, 2020",
        title: "Street Performance: Call for Artist",
        location: "Illinois, US",
        icon: "fa-solid fa-location-dot",
      },
    ],
  ],
  //* /MAIN

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
