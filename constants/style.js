import {StyleSheet, StatusBar} from "react-native"

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        paddingTop:StatusBar.currentHeight, 
    },
    input: {
        height:40,
        margin:12,
        padding:10,
        borderWidth:1,
        borderRadius:5,
        justifyContent: "center",
        paddingLeft:30,
        paddingRight:30
    },
    inputContainer: {
        flexDirection: "row", // To place label and input side by side
        alignItems: "center",
      },
      loginText: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 20,
      },
    button: {
      height:40,
      margin:12,
      padding:10,
      borderWidth:1,
      borderRadius:5,
      justifyContent: "center",
      paddingLeft:30,
      paddingRight:30
    },
    safeContainer: {
      flex:1,
      backgroundColor:"plum",
      paddingVertical:20,
      paddingHorizontal:20
    },
    pageheader: {
      headerTitle:"Home",
      headerTitleAlign:"center",
      headerTitleStyle: {
        fontWeight: '900',
        fontSize: 24,  
      },
      headerStyle:{backgroundColor: "plum",


      

      },
      headerShadowVisible:false,
      headerTransparent:false
    },
    prayerbox: {
      backgroundColor: '#f9c2ff',
      padding: 10,
      marginVertical: 8,
      marginHorizontal: 0,
      borderRadius: 10,
    },
    
  counterContainer: {
    marginTop: 15,
    flexDirection: 'row', // Arrange emojis in a row
  },
  emojiContainer: {
    borderRadius: 20, // Makes the border circular
    borderWidth: 2,
    backgroundColor:"white",
    borderColor: '#ccc', // Color of the border
    paddingHorizontal: 5, // Space around the emoji to make the border visible
    paddingVertical:3,
    alignItems: 'center', // Center the emoji within the border
    justifyContent: 'center',
    marginHorizontal:10
    
  },
  emoji: {
    fontSize: 12,
    color: '#000',
  },
  date:{
    fontWeight:"bold",

    paddingVertical:3
  },
  header:{
    fontWeight:"bold",
    textAlign:"center",
    paddingVertical:10,
    paddingHorizontal:10

  },
  content:{
    textAlign:"center",
    paddingVertical:10,
    paddingBottom:30
  },

  myprayerinput:{
    height:300,
    margin:12,
    padding:20,
    borderWidth:1,
    borderRadius:5,
    justifyContent: "center",

    textAlignVertical: 'top'
  },

  submitprayerbutton:{
    alignItems: 'center',
    margin:12,
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#433878',
    padding:10},

  text: {

    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    paddingHorizontal:30
  },
  modalButtonContainer: {
    flexDirection: 'row',      // Arrange buttons in a row
    justifyContent: 'center',  // Center the buttons horizontally
    marginTop: 20,             // Add some top margin
  },
  buttonSpacing: {
    width: 10,                 // Spacing between the buttons
  },

  


})
export default styles