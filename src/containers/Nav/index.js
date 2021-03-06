// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Nav from 'src/components/Nav';

const mapStateToProps = state => ({
  recipes: state.recipes,
});

const mapDispatchToProps = {};

// Container
const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

// == Export
export default NavContainer;

