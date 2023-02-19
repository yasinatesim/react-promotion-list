import Detail from 'pages/Detail';
import Home from 'pages/Home';

const routeList = [
  {
    path: `/`,
    component: Home,
    exact: true,
  },
  {
    path: `/campaign/:seoName/:id`,
    component: Detail,
    exact: false,
  },
];

export default routeList;
