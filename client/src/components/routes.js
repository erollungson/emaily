import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import SurveyNew from "./pages/SurveyNew";

const routes = [
    {
        path: '/',
        exact: true,
        name: 'Landing',
        component: Landing
    },
    {
        path: '/surveys',
        exact: true,
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/surveys/new',
        exact: true,
        name: 'SurveyNew',
        component: SurveyNew
    },

]

export default routes;