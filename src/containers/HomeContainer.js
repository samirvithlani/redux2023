import { connect } from "react-redux";
import { addToCart } from "../Action/Action";
import { HomeComponent } from "../components/HomeComponent";
//redux...

const mapStateToProps = (state) => ({
  cartData: state,
});

const mapDispatchToProps = (dispatch) => ({
  //action need to call from here
  addToCartHandler: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
