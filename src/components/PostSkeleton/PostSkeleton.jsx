import React from 'react';
import ContentLoader from 'react-content-loader';

export const PostSkeleton = () => (
  <ContentLoader
    speed={2}
    width={1220}
    height={250}
    viewBox="0 0 1220 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#C3C3C3">

    <rect x="0" y="0" rx="6" ry="6" width="592" height="246" />
    <rect x="624" y="0" rx="6" ry="6" width="120" height="16" />
    <rect x="624" y="28" rx="6" ry="6" width="420" height="55" />
    <rect x="624" y="95" rx="6" ry="6" width="596" height="57" />
  </ContentLoader>
);