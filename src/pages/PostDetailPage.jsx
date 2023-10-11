import React from 'react';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import CommentPage from './CommentPage';

export default function PostDetailPage() {
  const { postId } = useParams();
  return (
    <div>
      <h3>PostDetail: {postId}</h3>
      <div>
        <NavLink to="comments" className="header-link">
          Comment
        </NavLink>
      </div>
      <Routes>
        <Route path="comments" element={<CommentPage />} />
      </Routes>
    </div>
  );
}
