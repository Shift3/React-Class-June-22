export default function location(state = "Seattle, WA", action) {
  switch (action.type) {
    case "CHANGE_LOCATION":
      console.log("action.payload:", action.payload);
      return action.payload;
    default:
      return state;
  }
}
