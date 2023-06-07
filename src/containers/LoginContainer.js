import { connect } from "react-redux";
import { storeLogedinUser } from "../Action/Action";
import { UserLogin } from "../components/UserLogin";

const mapStateToProps = (state) => ({

    logedinUser: state.logedinUser
})
const mapDispatchToProps = (dispatch) => ({

    loginHandler:(user)=>(dispatch(storeLogedinUser(user)))

})

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);