// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Recipe from 'src/components/Recipe';
import { getRecipeBySlug } from 'src/utils';

const mapStateToProps = (state, ownProps) => ({
  recipe: getRecipeBySlug(
    state.recipes,
    ownProps.match.params.slug,
  ),
});

const mapDispatchToProps = {};

// Container
const RecipeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Recipe);

export default RecipeContainer;

