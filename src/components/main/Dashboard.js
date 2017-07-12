import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image, ScrollView} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Input, Button, Item, Spinner } from '../common';

class Dashboard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
		<View style={styles.dashboardBlock}>
				<View style={styles.dashboardInner}>
					{/*Dashboard Header Start*/}
					<View style={styles.dashboardHead}>				
						<View style={styles.sideIcons}>
							<View style={[styles.iconCell, styles.iconCellActive]}>
								<Image style={styles.iconCellImage} source={require('../../img/lifescore-button.png')} />				
							</View>
							<View style={styles.iconCell}>
								<Image style={styles.iconCellImage} source={require('../../img/radar-button.png')} /> 						
							</View>
							<View style={styles.iconCell}>
								<Image style={styles.iconCellImage} source={require('../../img/muvit-button.png')} />						
							</View>
						</View>
						<View style={styles.profileCell}>
							<Image style={styles.profileCellImage} source={require('../../img/profile.png')} />
						</View>
					</View>				

					{/*Dashboard Header Slider Start*/}
					<View>				
						<View style={[styles.circle, styles.circle1]}>
							<Image style={{width:158, height:158,}} source={require('../../img/lifescore-ring-b-01.png')} />
							<View style={styles.lifescoreCell}>
								<Text style={styles.lifescoreNo}>64</Text>
								<Text style={styles.lifescoreText}>LifeScore</Text>
								<Text style={styles.lifescoreText}>Report</Text>
							</View>
						</View>				
					</View>
				</View>

				{/*ToDo Block*/}
				<View style={styles.toDoBlock}>
					<View style={styles.panel}>
						<View style={styles.panelHead}>
							<View style={styles.paneLft}>
								<Text style={styles.panelTtl}>July 2017</Text>
								<Text style={styles.panelSubTtl}>REQUIRED ACTIVITIES COMPLETED</Text>
							</View>
							<View style={styles.checkIcon}>
								<View style={[styles.checkInner]}>
									<Image source={require('../../img/check-arrow.png')} />
								</View>
							</View>
						</View>
						<View style={styles.panelInner}>
							<ScrollView>
								<View style={styles.toDo}>
								<View style={styles.toDoRow}>
									<View style={[styles.checkIcon, styles.checkIconSml]}>
										<View style={styles.checkInner}>
											<Image style={styles.arrowSml} source={require('../../img/check-arrow.png')} />
										</View>
									</View>								
									<Text style={styles.todText}>Register your account</Text>								
								</View>
								<View style={styles.toDoRow}>
									<View style={[styles.checkIcon, styles.checkIconSml]}>
										<View style={[styles.checkInner,styles.checkBorder]}>
											<Image style={styles.arrowSml} source={require('../../img/check-arrow.png')} />
										</View>
									</View>								
									<Text style={[styles.todText, styles.todoChecked]}>
									Register your account 

									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, standard dummy text ever since the 1500s, standard dummy text ever since the 1500s, standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, standard dummy text ever since the 1500s, standard dummy text ever since the 1500s, standard dummy text ever since the 1500s, 
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, standard dummy text ever since the 1500s, standard dummy text ever since the 1500s, standard dummy text ever since the 1500s, 


									
									</Text>								
								</View>
							</View>
							</ScrollView>
						</View>
					</View>
				</View>
				{/*Footer Start*/}					
				<View style={styles.footer}>
					<View style={styles.footerItem}>
						<TouchableOpacity style={styles.menuIcon}>							
							<Image source={require('../../img/home-icn.png')} /> 							
						</TouchableOpacity>
						<TouchableOpacity style={styles.menuIcon}>							
							<Image source={require('../../img/book-icn.png')} /> 							
						</TouchableOpacity>
						<TouchableOpacity style={styles.menuIcon}>							
							<Image source={require('../../img/mail-icn.png')} /> 							
						</TouchableOpacity>
						<TouchableOpacity style={styles.menuIcon}>							
							<Image source={require('../../img/user-icn.png')} /> 							
						</TouchableOpacity>
					</View>					
					<TouchableOpacity style={styles.chatCell}>							
						<Image source={require('../../img/ai-colors.png')} /> 							
					</TouchableOpacity>											
				</View>	
				{/*Footer End*/}


		</View>
		);
	}
}

const styles = StyleSheet.create({
	dashboardBlock:{
		flex:1,
		backgroundColor:'#0071bc',
	},
	dashboardInner:{
		flex:1,
	},
	dashboardHead:{	
		flex:1,
		margin:20,
		position:'absolute',
		left:0,
		right:0,
		height:250,
	},
	sideIcons:{		
		position:'absolute',
		left:0,
	},
    iconCell: {
    	width:60,
    	height:60,
    	borderRadius:60,        
        padding:18,
        marginBottom:12,
        justifyContent:'center',
        alignItems:'center'
    },
    iconCellActive: {
		backgroundColor:'#8cc63f'
    },  
    iconCellImage:{  
    	width: 50,
    	height: 50,
    },
    profileCell:{
    	backgroundColor:'rgba(0, 0, 0, 0.1)',
    	width: 158,
    	height: 158,
    	alignItems:'center',
    	justifyContent:'center',
    	borderRadius:158,
    	marginLeft:'auto',
    	marginRight:'auto',
    	marginTop:30,
    },
    profileCellImage:{
    	width: 110,
    	height: 110,
    	borderRadius:110,
    },
    circle:{
    	marginLeft:'auto',
    	marginRight:'auto',
    	alignItems:'center',  
    },
    circle1:{    	
    	width:170,
    	height:170,
    	marginTop:50,
    },
    lifescoreCell: {
	    position: 'absolute',
	    top: -20,
	    left:175,
	    backgroundColor:'rgba(256, 256, 256, 0.1)',
	    padding:10,
	    borderRadius:4   
	},
	lifescoreNo:{
		fontSize: 30,
		color:'#d9e021',
		marginBottom:5,
		textAlign:'center' 
	},
	lifescoreText:{
		color:'#fff',
		textAlign:'center' 
	},
	footer:{
		backgroundColor:'white',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-around'
	},
	footerItem:{
		flex:1,
		flexDirection:'row',
		alignItems:'center',
	},
	menuIcon:{
		flex:1,		
		padding:15
	},
	chatCell:{
		width:68,
    	height:68,
    	backgroundColor: '#eaeaea',
    	alignItems:'center',
    	justifyContent:'center',
    	borderRadius:68,
    	marginRight:10,
	},
	toDoBlock:{
		flex:1,
		position:'absolute',
		bottom:0,
		left:15,
		right:15,
	},	
	panel:{
		flex:1,
		backgroundColor:'#f2f2f2',
		borderRadius: 8,
		paddingBottom:15,
	},	
	panelInner:{
		backgroundColor:'#fff',
		maxHeight:270,
		minHeight:270
	},
	panelHead:{
		flexDirection:'row',
		height:60,
		paddingRight:15,
		paddingLeft:15,
		borderTopLeftRadius:8,
		borderTopRightRadius:8,
	},
	paneLft:{
		flex:1,
	},
	panelTtl:{
		fontSize: 21,
		marginBottom:5,
	},
	panelSubTtl:{
		color:'#8cc63f'
	},
	checkIcon:{
		width: 52,
		height: 52,
		backgroundColor: '#fff',
		borderRadius:52,
		marginTop:5
	},
	checkIconSml:{
		width: 32,
		height: 32,
	},
	arrowSml:{
		width: 15,
		height: 12,
	},	
	checkInner:{
		flex:1,
		alignItems: 'center',
		justifyContent:'center',
		backgroundColor:'#8cc63f',
		borderRadius:52
	},
	checkBorder:{
		backgroundColor:'transparent',
    	borderWidth:1,
    	borderColor:'#aaa',
    	borderStyle:'dashed'
	},
	toDoRow:{
		flexDirection:'row',
		padding:10,
		borderWidth:1,
		borderColor:'#eaeaea'
	},
	todText:{
		paddingTop:9,
		paddingLeft:10,
	},
	todoChecked:{
		textDecorationLine:'line-through'
	},
});

export default Dashboard;