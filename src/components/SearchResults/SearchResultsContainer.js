import { connect } from 'react-redux';
import SearchResults from '../SearchResults/SearchResults';
import { getCardsForAllList } from '../../redux/cardsRedux.js';
import { createAction_changeSearchString } from '../../redux/searchStringRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForAllList(state, props.match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString =>
    dispatch(
      createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);