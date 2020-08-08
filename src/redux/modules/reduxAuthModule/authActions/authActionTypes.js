export default {
  STATE: {
    TOGGLE: {
      SHOW_SIGNUP: "AUTH_STATE_TOGGLE_SHOW-SIGNUP",
    },
  },
  API: {
    PENDING: "AUTH_API_PENDING",
    ERROR: "AUTH_API_ERROR",
    SUCCESS: {
      LOGIN: "AUTH_API_SUCCESS_LOGIN",
      SIGNUP: "AUTH_API_SUCCESS_SIGNUP",
    },
  },
};

/**
 * validador de sintaxis
 * 
let flatObj = (obj) => {
  if (typeof obj === "string") {
    return "";
  }
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key];
      result.push(`${key}_${flatObj(element)}`);
    }
  }
  return result;
};
 */