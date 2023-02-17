
import Home from 'pages/Home';
import Detail from 'pages/Detail';

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
