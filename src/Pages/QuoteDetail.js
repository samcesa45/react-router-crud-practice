import React, { useEffect } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/lib/api';
// const DUMMY_QUOTES = [
// 	{ id: 'q1', author: 'Sam', text: 'Learning React is fun!' },
// 	{ id: 'q2', author: 'Eshiet', text: 'Learning React is great' },
// ];

const QuoteDetail = (props) => {
	const match = useRouteMatch();
	const params = useParams();

	const { quoteId } = params;

	const {
		sendRequest,
		status,
		data: loadedQuote,
		error,
	} = useHttp(getSingleQuote, true);

	// const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	if (status === 'pending') {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (status === 'error') {
		return <p className="centered">{error}</p>;
	}
	if (!loadedQuote.text) {
		return <p>No quote found!</p>;
	}

	if (status === 'error') {
	}
	return (
		<section>
			<HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
			<Route path={`${match.path}`} exact>
				<div className="centered">
					<Link className="btn--flat" to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>

			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</section>
	);
};

export default QuoteDetail;
