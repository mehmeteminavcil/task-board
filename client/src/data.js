export const boards = [
  {
    id: crypto.randomUUID(),
    title: "To do",
    status: "todo",
  },
  {
    id: crypto.randomUUID(),
    title: "In Progress",
    status: "progress",
  },
  {
    id: crypto.randomUUID(),
    title: "Done",
    status: "done",
  },
];

export const tasks = [
  {
    id: crypto.randomUUID(),
    status: "todo",
    category: "DESIGN SYSTEM",
    title: "Hero Section",
    text: "Create a design system for a hero section in 2 different variants. Create a simple presentation with these components.",
    color: "green",
    helper: ["VH", "AG"],
  },
  {
    id: crypto.randomUUID(),
    status: "todo",
    category: "TYPOGRAPHY",
    title: "Typography change",
    text: "Modify typography and styling of text placed on 6 screens of the website design. Prepare a documentation.",
    color: "blue",
    helper: ["ML"],
  },

  {
    id: crypto.randomUUID(),
    status: "progress",
    category: "DEVELOPMENT",
    title: "Implement design screens",
    text: "Our designers created 6 screens for a website that needs to be implemented by our dev team.",
    color: "red",
    helper: ["VH", "LK"],
  },
  {
    id: crypto.randomUUID(),
    status: "done",
    category: "DEVELOPMENT",
    title: "Fix bugs in the CSS code",
    text: "Fix small bugs that are essential to prepare for the next release that will happen this quarter.",
    color: "red",
    helper: ["HU", "NL"],
  },
  {
    id: crypto.randomUUID(),
    status: "done",
    category: "TYPOGRAPHY",
    title: "Proofread final text",
    text: "The text provided by marketing department needs to be proofread so that we make sure that it fits into our design.",
    color: "blue",
    helper: ["AG"],
  },
  {
    id: crypto.randomUUID(),
    status: "done",
    category: "DESIGN SYSTEM",
    title: "Responsive design",
    text: "All designs need to be responsive. The requirement is that it fits all web and mobile screens.",
    color: "green",
    helper: ["VH", "AG"],
  },
  ,
];
