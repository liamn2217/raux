import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import PostCreate from './components/PostCreate';
import ProfilePage from './components/ProfilePage';
import SearchPage from './components/SearchPage';
import LibraryPage from './components/LibraryPage';


const RouterComponent = () => (
    <Router>
        <Scene key="root" hideNavBar>
          <Scene key="auth">
            <Scene key="login" component={LoginForm} title="Please login" initial />
          </Scene>


          <Scene key="main">
            <Scene 
              onRight={() => Actions.newPost()}
              rightTitle="New"
              key="home"
              component={Home} 
              title="Home" 
            />
            <Scene key="newPost" component={PostCreate} title="New Post" />
            <Scene key="search" component={SearchPage} title="Search" />
            <Scene key="profile" component={ProfilePage} title="Profile" />
            <Scene key="library" component={LibraryPage} title="Library" />
          </Scene>
        </Scene>


    </Router>
  );

export default RouterComponent;
