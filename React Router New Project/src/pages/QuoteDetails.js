import { Fragment } from "react";
import { Route, useParams } from "react-router";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "text1" },
  { id: "q2", author: "Max", text: "text2" },
];

export const QuoteDetails = () => {
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
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};
