import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
import { useEffect } from "react";
export const NewQuote = () => {
  const history = useHistory();
  const { sendRequest, status } = useHttp(addQuote);
  
  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  };
  return (
    <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={addQuoteHandler}
    ></QuoteForm>
  );
};
