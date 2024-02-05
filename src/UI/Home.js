import React from "react";
import Categories from "./Categories";
import Collection from "./Collection";
import Recentp from "./Recentp";
import Slide from "./Slide";
import Women from "./Women";
import collection from "./collection.module.css";

export default function Home() {
  return (
    <div className={collection.totalbox}>
      <Slide />
      <Collection />
      <Categories />
      <Recentp />
      <Women />
    </div>
  );
}
