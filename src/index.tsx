import React from 'react';
import ReactDOM from 'react-dom/client';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory, BrowserHistory } from 'history';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import HomePage from './pages/HomePage/HomePage';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DetailCourse from './pages/DetailCourse/DetailCourse';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import CourseContent from './pages/CourseContent/CourseContent';
import UserManagement from './pages/UserManagement/UserManagement';
import UserProfile from './pages/Profile/UserProfile';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';
import './App.css';
import Blog from './pages/Blog/Blog';
import Events from './pages/Events/Events';
import About from './pages/Abouts/About';
import Course from './pages/Course/Course';
// import SearchPage from './pages/SearchPage/SearchPage';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const history: BrowserHistory | any = createBrowserHistory();


root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <BackToTopButton />
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="courses">
            <Route path=":course" element={<DetailCourse />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="blog" element={<Blog />} />
          <Route path="sukien" element={<Events />} />
          <Route path="thongtin" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="khoahoc" element={<Course />} />
          {/* <Route path="timkiem:tuKhoa" element={<SearchPage />} /> */}
          <Route path="userProfile" element={<UserProfile />} />
          <Route path="detail">
            <Route path=":courseID" element={<CourseContent />} />
          </Route>
          <Route path="admin" element={<UserManagement />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

