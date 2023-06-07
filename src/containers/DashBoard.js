import { connect } from "react-redux";
import { DashBoard } from "../components/DashBoard";

const mapStateToProps = (state) => ({

    loginUser: state.logedinUser
})
const mapDispatchToProps = (dispatch) => ({

    //action
})
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);