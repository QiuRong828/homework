export const props = {
  value: {
    type: [String, Number, Array],
    default: "",
  },
  config: {
    type: Object,
    default: () => ({}),
  },
};
