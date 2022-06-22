const dishes = [
  {
    name: "pizza",
    fields: [
      {
        name: "no_of_slices",
        label: "Number of slices",
        type: "number",
      },
      {
        name: "diameter",
        label: "Diameter",
        type: "number",
      },
    ],
  },
  {
    name: "soup",
    fields: [
      {
        name: "spiciness_scale",
        label: "Spiciness (1-10)",
        type: "number",
      },
    ],
  },
  {
    name: "sandwich",
    fields: [
      {
        name: "slices_of_bread",
        label: "Slices of bread",
        type: "number",
      },
    ],
  },
];

export default dishes
