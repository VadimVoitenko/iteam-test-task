export const API_ROUTES = {
  LOGIN: 'https://user-assessment-api.vercel.app/api/login',
  USERASSESSMENTS: 'https://user-assessment-api.vercel.app/api/userassessments',
  USERS: 'https://user-assessment-api.vercel.app/api/users',
  USERASSESSMENTS_GRAPH_BY_ID: (id: number) =>
    `https://user-assessment-api.vercel.app/api/userassessments/graph?id=${id}`,
};
