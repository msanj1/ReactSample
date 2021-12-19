import { Fragment } from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "text1" },
  { id: "q2", author: "Max", text: "text2" },
];

export const QuoteDetails = () => {
  const routeMatch = useRouteMatch();
  const params = useParams();
  console.log(params.quoteId);
  const quoteId = params.quoteId;

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No quote found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote
        text={quote.text}
        authort={quote.author}
      ></HighlightedQuote>
      <Route path={routeMatch.path} exact>
        <div className="centered">
          <Link to={`${routeMatch.url}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${routeMatch.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};
