import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "text1" },
  { id: "q2", author: "Max", text: "text2" },
];

export const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
};
