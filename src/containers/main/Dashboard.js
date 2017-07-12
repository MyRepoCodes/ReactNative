import { connect } from 'react-redux';
import Dashboard from '../../components/main/Dashboard';

const mapStateToProps = ({ post }) => {
  const { loading, error } = post;

  return { loading, postError: error };
};

export default connect(mapStateToProps, {})(Dashboard);