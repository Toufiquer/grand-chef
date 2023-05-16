import React from "react";
import Card from "../../components/Card/Card";

const Post = () => {
  return (
    <div className={` container mx-auto`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Post;
