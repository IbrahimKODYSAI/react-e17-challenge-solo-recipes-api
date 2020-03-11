// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

const mapStateToProps = state => ({
  loading: state.loading,
});

const mapDispatchToProps = {};

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
