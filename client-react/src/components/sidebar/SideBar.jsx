import React, { useState, useEffect } from "react";
import SizingGuide from "./sizing_chart/Sizing.jsx";
import SideBarAccordian from "./Sidebar_accordian/SideBarAccordian.jsx";
import Description from "./description_/Description.jsx";
import Headline from "./headline/Headline.jsx";

const SideBar = ({ currentShoe, updateCurrentOrder, purchaseShoe, shoeSet, setColorWayShoe}) => {
	return (
		<div id='sidebar_nl'>
			<div id='sidebar_contents'>
				<Headline currentShoe={currentShoe} />
				<Colorway currentShoe={currentShoe} shoeSet={shoeSet} setColorWayShoe={setColorWayShoe}/>
				<SizingGuide currentShoe={currentShoe} updateCurrentOrder={updateCurrentOrder} />
				<BuyButtons currentShoe={currentShoe} purchaseShoe={purchaseShoe} />
				<Description currentShoe={currentShoe} />
				<SideBarAccordian currentShoe={currentShoe} />
			</div>
		</div>
	);
};

const Colorway = ({shoeSet, setColorWayShoe}) => {

	return (
		<div id='colorway_wrapper'>
			<ul id='colorway_list'>
				{
				shoeSet === undefined ? <li id='colorway_pic'></li> :
				shoeSet.map((shoe, index) => {
					return (
						<li id='colorway_pic' key={index} onClick={()=>setColorWayShoe(shoe)}>
							<img src={shoe.productPictures[0]} className='colorway_img'/>
						</li>
					)
				})}
			</ul>
		</div>
	);
};

const BuyButtons = ({ purchaseShoe }) => {
	//going to take ID/Size

	return (
		<div id='button_wrapper'>
			<button className='add_to_cart cartbtn' onClick={purchaseShoe}>
				Add To Cart
			</button>
			<button className='favorite cartbtn'>
				Favorite <i className='far fa-heart'></i>
			</button>
		</div>
	);
};

export default SideBar;
