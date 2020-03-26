import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

import PurchaseModal from "./components/PurchaseModal.jsx";
import SideBar from "./components/sidebar/SideBar.jsx";
import NykeMain from "./components/NykeMain/NykeMain.jsx";
import Fade from "./components/Fade.jsx";

import shoeExample from "./mockData.js";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			view: "feed",
			currentShoe: shoeExample,
			similiarShoes: [],
			currentOrder: {},
			submitOrder: false
		};

		this.updateCurrentOrder = this.updateCurrentOrder.bind(this);
		this.getShoe = this.getShoe.bind(this);
		this.purchaseShoe = this.purchaseShoe.bind(this);
		this.closePurchaseShoe = this.closePurchaseShoe.bind(this);
		this.getAllSimiliarShoes = this.getAllSimiliarShoes.bind(this)
		this.setColorWayShoe = this.setColorWayShoe.bind(this)
	}
	// const [state, setState] = useState({view: 'Feed'})
	//const [showPurchaseModal, setShowPurchaseModal] = useState(false)

	componentDidMount() {
		this.getShoe();
	}



	getShoe() {
		const currentPath = window.location.pathname
		console.log(currentPath)
		Axios.get(`/api/shoes/Nike Zoom Fly 3 Shield`)
			.then(response => {
				console.log(response.data)

				this.setState({
					currentShoe: response.data[0],
					shoeSet: response.data
				});
			})
			.catch((e) => {
				window.alert("Fetch Request For Nike Main Component Failed")
				this.setState({
					currentShoe: shoeExample,
				})
			});
	}

	getAllSimiliarShoes(){
		Axios.get(`/api/shoes/`)
	}


	setColorWayShoe(shoe){
		this.setState({
			currentShoe: shoe
		})
	}




	purchaseShoe() {
		this.setState({
			confirmPurchase: true
		});
		return new Promise((res, rej) => {
			setTimeout(() => {
				this.closePurchaseShoe();
			}, 3000);
		});
	}
	closePurchaseShoe() {
		this.setState({
			confirmPurchase: false
		});
	}
	//sizing chart selection
	updateCurrentOrder(orderKey, orderVal) {
		let { currentOrder } = this.state;
		const currentState = currentOrder;
		currentState[orderKey] = orderVal;
		this.setState({ currentOrder: currentState });
		console.log(this.state.currentOrder);
	}


	render() {
		return (
			<div id='main_nl'>
				<div id='base_nl'>
					<NykeMain currentShoe={this.state.currentShoe} />
					<SideBar
						shoeSet={this.state.shoeSet}
						currentShoe={this.state.currentShoe}
						updateCurrentOrder={this.updateCurrentOrder}
						purchaseShoe={this.purchaseShoe}
						setColorWayShoe={this.setColorWayShoe}
					/>
					{this.state.confirmPurchase && (
						<Fade show={this.state.confirmPurchase}>
							<PurchaseModal currentShoe={this.state.currentShoe} closePurchaseShoe={this.closePurchaseShoe} />
						</Fade>
					)}
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app"));
