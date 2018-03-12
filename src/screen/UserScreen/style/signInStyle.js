import { StyleSheet,Dimensions } from 'react-native';

const {width,height} = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    boxSignIn:{
        height:height * 0.4,
        width:width * 0.75
    },
    userOptions:{
        width:'100%',
        alignItems:'center',
        paddingTop:18,
        paddingBottom:18
    },
    optionTextStyle:{

    },
    lineDecoration:{
        flexDirection:"row",
        width:'80%',
        justifyContent:'space-between'
    },
    lineDraw:{
        
    }

})
