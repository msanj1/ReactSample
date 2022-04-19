import { Fragment, useEffect } from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

export const QuoteDetails = () => {
  const routeMatch = useRouteMatch();
  const params = useParams();
  const quoteId = params.quoteId;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(()=>{
    sendRequest(quoteId);
  },[sendRequest, quoteId]);

  if(status === 'pending'){
    return <div className='centered'>
      <LoadingSpinner></LoadingSpinner>
    </div>
  }

  if(error){
    return <p className='centered'>{error}</p>
  }

  if(!loadedQuote.text){
    return <p >No Quote</p>
  }

  console.log(params.quoteId);

  const quote = loadedQuote.find((quote) => quote.id === params.quoteId);
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
