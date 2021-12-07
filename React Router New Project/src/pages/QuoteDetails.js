import { Fragment } from "react";
import { Route, useParams } from "react-router";
import Comments from "../components/comments/Comments";

export const QuoteDetails = () => {
  const params = useParams();
  console.log(params.quoteId);
  const quoteId = params.quoteId;
  return (
    <Fragment>
      <h1>Quote Details</h1>
      <p>{quoteId}</p>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};
