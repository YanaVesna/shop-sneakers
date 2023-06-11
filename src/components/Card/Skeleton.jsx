import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="card"
    speed={2}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#f2f2f2"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="4" rx="0" ry="0" width="210" height="260" />
  </ContentLoader>
);

export default Skeleton;
