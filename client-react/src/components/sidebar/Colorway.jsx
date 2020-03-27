import React,{useState} from 'react'

const Colorway = ({shoeSet, setColorWayShoe}) => {

	let [selectedShoe, setSelectedShoe] = useState(null)

	const selectShoe = (shoe) => {
		setSelectedShoe(shoe)
	}

	//colorway_img_selected
	return (
		<div id='colorway_wrapper'>
			<ul id='colorway_list'>
				{
				shoeSet === undefined ? <li id='colorway_pic'></li> :
				shoeSet.map((shoe, index) => {
					return (
						<ShoeItem key={index} shoe={shoe} setColorWayShoe={setColorWayShoe} selectShoe={selectShoe} selected={selectedShoe == shoe}/>
					)
				})}
			</ul>
		</div>
	);
};


const ShoeItem = ({shoe, setColorWayShoe, selectShoe, selected}) => {
	return (
	<li id='colorway_pic'
	onClick={() => {
		setColorWayShoe(shoe)
		selectShoe(shoe)
		}}>
		<img src={shoe.productPictures[0]} className={`${selected === true ? 'colorway_img_selected' : 'colorway_img'}`}/>
	</li>
	)
}




export default Colorway