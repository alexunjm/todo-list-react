export const lsManager = {

  clear: () => {
    localStorage.clear();
  },

  get: (key) => {
    try {
      const value = JSON.parse(localStorage.getItem(key));
      return value;
    } catch (error) {
      console.error(error);
    }
    return {};
  },

  set: (key, val) => {
    const value = JSON.stringify(val);
    localStorage.setItem(key, value);
  }
}
