import React from "react";

import EditCard from "../../components/EditCard/EditCard";

const EditPosts = () => {
  return (
    <div className={` container mx-auto`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center justify-center">
        <EditCard />
        <EditCard />
        <EditCard />
        <EditCard />
        <EditCard />
        <EditCard />
        <EditCard />
      </div>
    </div>
  );
};

export default EditPosts;
