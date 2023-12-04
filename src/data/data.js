//defining all the columns for MCQS table.
export const baseURL = process.env.REACT_APP_BASE_URL;
export const classColumns = [
  {
    required: "required",
    field: "name",
    type: "string",
    headerName: "Name",
    width: 100,
  },
];

export const subjectColumns = [
  {
    required: "required",
    field: "name",
    type: "string",
    headerName: "Name",
    width: 100,
  },
  {
    field: "academic_class_id",
    type: "string",
    headerName: "Class Id",
    width: 100,
  },
];
export const storeChapterCol = [
  {
    required: "required",
    field: "name",
    type: "string",
    headerName: "Name",
    width: 100,
  },
  {
    required: "required",
    field: "academic_subject_id",
    type: "string",
    headerName: "Subject Id",
    width: 100,
  },
  {
    required: "required",
    field: "chapter_number",
    type: "number",
    headerName: "Chapter Number",
    width: 100,
  },
];

export const mcqsColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    required: "required",
    field: "stem",
    type: "string",
    headerName: "Question Statement",
    width: 450,
  },
  {
    required: "required",
    field: "option_a",
    type: "string",
    headerName: "A",
    width: 100,
  },
  {
    required: "required",
    field: "option_b",
    type: "string",
    headerName: "B",
    width: 100,
  },
  {
    required: "required",
    field: "option_c",
    type: "string",
    headerName: "C",
    width: 100,
  },
  {
    required: "required",
    field: "option_d",
    type: "string",
    headerName: "D",
    width: 100,
  },
  {
    required: "required",
    field: "correct_answer",
    type: "string",
    headerName: "Correct",
    width: 100,
  },
  {
    field: "explanation",
    required: "",
    type: "string",
    headerName: "Explaination",
    width: 250,
  },
];
export const blankColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    required: "required",
    field: "stem",
    type: "string",
    headerName: "Question Statement",
    width: 500,
  },
  {
    required: "required",
    field: "correct_answer",
    type: "string",
    headerName: "Answer",
    width: 200,
  },
  {
    field: "explanation",
    required: "",
    type: "string",
    headerName: "Explaination",
    width: 500,
  },
];
export const shortColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    required: "required",
    field: "stem",
    type: "string",
    headerName: "Question Statement",
    width: 400,
  },
  {
    required: "required",
    field: "correct_answer",
    type: "string",
    headerName: "Answer",
    width: 400,
  },
  {
    field: "explanation",
    required: "",
    type: "string",
    headerName: "Explaination",
    width: 400,
  },
];

// defining all the long questions columns.
export const longColumns = [
  { field: "id", headerName: "ID", width: 50 },
  {
    required: "required",
    field: "stem",
    type: "string",
    headerName: "Question Statement",
    width: 400,
  },
  {
    required: "required",
    field: "correct_answer",
    type: "string",
    headerName: "Answer",
    width: 400,
  },
  {
    field: "explanation",
    required: "",
    type: "string",
    headerName: "Explaination",
    width: 400,
  },
];

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Questions",
        url: "/",
        icon: "question.svg",
      },
    ],
  },
  // {
  //   id: 2,
  //   title: "lists",
  //   listItems: [
  //     {
  //       id: 1,
  //       title: "Notes",
  //       url: "/notes",
  //       icon: "note.svg",
  //     },
  //     {
  //       id: 2,
  //       title: "Questions",
  //       url: "/questions",
  //       icon: "question.svg",
  //     },
  //     {
  //       id: 3,
  //       title: "Tests",
  //       url: "/tests",
  //       icon: "order.svg",
  //     },
  //     {
  //       id: 4,
  //       title: "Result",
  //       url: "/result",
  //       icon: "post2.svg",
  //     },
  //   ],
  // },
];
