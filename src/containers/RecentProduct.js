import { connect } from "react-redux";
import { RecentProducts } from "../components/RecentProducts";

const mapStateToProps = (state) => ({

    cartData:state
})
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps,mapDispatchToProps)(RecentProducts)