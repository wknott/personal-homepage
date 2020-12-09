const API_URL = "https://api.github.com/users/wknott/repos?sort=updated";

export const getProjects = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(response.statusText);
  };

  return await response.json();
};