export const USER_LOCAL = "USER_LOCAL";
export const USER_ADMIN = "USER_ADMIN";
export const userLocalService = {
  get: () => {
    let userJson = localStorage.getItem(USER_LOCAL);
    if (userJson) {
      return JSON.parse(userJson);
    } else {
      return null;
    }
  },

  set: (userData) => {
    let userJson = JSON.stringify(userData);
    localStorage.setItem(USER_LOCAL, userJson);
  },

  remove: () => {
    localStorage.removeItem(USER_LOCAL);
  },
};

export const userLocalAdmin = {
  get: () => {
    let userJsonAdmin = localStorage.getItem(USER_ADMIN);
    if (userJsonAdmin) {
      return JSON.parse(userJsonAdmin);
    } else {
      return [];
    }
  },
  set: (data) => {
    let userJsonAdmin = JSON.stringify(data);
    localStorage.setItem(USER_ADMIN, userJsonAdmin);
  },

  remove: () => {
    localStorage.removeItem(USER_ADMIN);
  },
};
