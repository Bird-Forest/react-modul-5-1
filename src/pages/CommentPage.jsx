import React from 'react';
import { useParams } from 'react-router-dom';

export default function CommentPage() {
  const { postId } = useParams();
  return <div>CommentPage: postId={postId}</div>;
}
