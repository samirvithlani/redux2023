import { connect } from "react-redux";
import { getProducts } from "../Action/Action";
import { ProductComponent } from "../components/ProductComponent";

const mapStateToProps = (state) => ({

    products:state
})
const mapDispatchToProps = (dispatch) => ({

    getProductHandler : products => dispatch(getProducts(products))

})
export default connect(mapStateToProps,mapDispatchToProps)(ProductComponent);