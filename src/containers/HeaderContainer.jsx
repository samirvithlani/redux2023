import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../Action/Action";
import { HeaderComponent } from "../components/HeaderComponent";
import { HomeComponent } from "../components/HomeComponent";
//redux...

const mapStateToProps = (state) => ({
  cartData: state
});

const mapDispatchToProps = (dispatch) => ({

  removeFromCartHandler: (payload) => dispatch(removeFromCart(payload))

});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
