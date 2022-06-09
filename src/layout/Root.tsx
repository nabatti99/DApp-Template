import { Fragment } from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Fragment>
      <p>root</p>
      <Outlet />
    </Fragment>
  );
}
