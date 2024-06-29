import React from 'react';
import ContentLoader from 'react-content-loader';

export const PostPageSkeleton = () => (
  <ContentLoader
    speed={2}
    width={1220}
    height={350}
    viewBox="0 0 1220 390"
    backgroundColor="#f3f3f3"
    foregroundColor="#C3C3C3">

    <rect x="305" y="0" rx="6" ry="6" width="592" height="246" />
    <rect x="80" y="261" rx="6" ry="6" width="1060" height="35" />
    <rect x="80" y="310" rx="6" ry="6" width="1060" height="40" />
    
  </ContentLoader>
);