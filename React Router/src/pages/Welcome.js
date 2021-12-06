import { Route } from "react-router";

export const Welcome = () => {
  return (
    <section>
      <h1>The welcome page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new user</p>
      </Route>
    </section>
  );
};
