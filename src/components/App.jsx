// import React, { useEffect } from 'react';
import { StyledAppContainer } from './App.styled';
// import { fetchPosts, findPostById } from '../servise/api';
// import { DeteilsSection } from './DeteilsSection';

import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PostsPage from '../pages/PostsPage';
import SearchPage from '../pages/SearchPage';
import PostDetailPage from 'pages/PostDetailPage';
/*
Маршрутизація:

 <a href="www.google.com">Google</a> - будь-які посилання на зовнішні ресурси, 
 поза нашим додатком

 <Link to="/some-route">Some page</Link>
 <NavLink to="/some-route"> Some page</NavLink> - для маршутизації по нашому додатку

  1. Зміна адресної строки браузера.
  2. Підготувати Route для відображення, тієї чи іншої сторінки 
     <Route path="/some-route" element={<HomePage />} />

*/

export const App = () => {
  // const [posts, setPosts] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [searchedPostId, setSearchedPostId] = useState(null);

  // useEffect(() => {
  //   fetchAllPosts();
  // }, []);

  // useEffect(() => {
  //   if (!searchedPostId) return;
  //   const fetchPostById = async () => {
  //     try {
  //       setIsLoading(true);
  //       const post = await findPostById(searchedPostId);
  //       setPosts([post]);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchPostById();
  // }, [searchedPostId]);

  // const fetchAllPosts = async () => {
  //   try {
  //     setIsLoading(true);
  //     const postsData = await fetchPosts();

  //     setPosts(postsData);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const handleSubmitSearch = event => {
  //   event.preventDefault();
  //   const searchedPostIdValue = event.currentTarget.elements.searchPostId.value;
  //   setSearchedPostId(searchedPostIdValue);
  //   event.currentTarget.reset();
  // };

  return (
    <StyledAppContainer>
      <header>
        <nav>
          <NavLink className="header-link" to="/">
            Home
          </NavLink>
          <NavLink className="header-link" to="/posts">
            Posts
          </NavLink>
          <NavLink className="header-link" to="/search">
            Search
          </NavLink>
        </nav>
      </header>

      {/* <h1 className="title" tabIndex={0}>
        App title
      </h1> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/posts-detail/:postId/*" element={<PostDetailPage />} />
      </Routes>
    </StyledAppContainer>
  );
};
