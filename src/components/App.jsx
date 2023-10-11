import React, { useEffect } from 'react';
import { StyledAppContainer } from './App.styled';
import { fetchPosts, findPostById } from '../servise/api';
import { DeteilsSection } from './DeteilsSection';
import { useState } from 'react';

// const [options, setOptions] = useState({ abuba: 1, aboba: 1, grisha: 1 });

// const handleAddOption = (optionName) => {
//   setOptions((prevState) => ({
//     ...prevState,
//      [optionName]: prevState[optionName] + 1,
//    }))
// }
// handleAddOption("grisha");

export const App = () => {
  // state = {
  //   posts: null,
  //   isLoading: false,
  //   error: null,
  //   searchedPostId: null,
  // };
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchedPostId, setSearchedPostId] = useState(null);

  const fetchAllPosts = async () => {
    try {
      // this.setState({ isLoading: true });
      setIsLoading(true);
      const postsData = await fetchPosts();
      // this.setState({ posts: posts });
      setPosts(postsData);
    } catch (error) {
      // this.setState({ error: error.message });
      setError(error.message);
    } finally {
      // this.setState({ isLoading: false });
      setIsLoading(false);
    }
  };

  // const fetchPostById = async () => {
  //   try {
  //     setIsLoading(true);
  //     const post = await findPostById(searchedPostId);
  //     // this.setState({posts: [post],});
  //     setPosts([post]);
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // componentDidMount() {
  //   this.fetchAllPosts();
  // }
  useEffect(() => {
    fetchAllPosts();
  }, []);

  // componentDidUpdate(_, prevState) {
  //   if (prevState.searchedPostId !== this.state.searchedPostId) {
  //     this.fetchPostById();
  //   }
  // }
  useEffect(() => {
    if (!searchedPostId) return;
    const fetchPostById = async () => {
      try {
        setIsLoading(true);
        const post = await findPostById(searchedPostId);
        // this.setState({posts: [post],});
        setPosts([post]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPostById();
  }, [searchedPostId]);

  const handleSubmitSearch = event => {
    event.preventDefault();
    const searchedPostIdValue = event.currentTarget.elements.searchPostId.value;

    // this.setState({searchedPostId: searchedPostId});
    setSearchedPostId(searchedPostIdValue);

    event.currentTarget.reset();
  };

  const showPosts = Array.isArray(posts) && posts.length;
  return (
    <StyledAppContainer>
      <h1 className="title" tabIndex={0}>
        App title
      </h1>
      <DeteilsSection />
      <form onSubmit={handleSubmitSearch}>
        <label>
          <p>Enter post ID to find in database</p>
          <input name="searchPostId" type="text" placeholder="Enter ID" />
          <button type="submit">Search</button>
          <button onClick={fetchAllPosts} type="reset">
            Reset
          </button>
        </label>
      </form>
      {isLoading && (
        <div>
          <p>Loading...</p>
        </div>
      )}
      {error && <p className="error">{error}</p>}

      <ul className="postList">
        {showPosts &&
          posts.map(post => {
            return (
              <li key={post.id} className="postListItem">
                <span>Id: {post.id}</span>
                <h3>Title: {post.title}</h3>
                <h4>User Id: {post.userId}</h4>
                <p>Body: {post.body}</p>
              </li>
            );
          })}
      </ul>
    </StyledAppContainer>
  );
};
