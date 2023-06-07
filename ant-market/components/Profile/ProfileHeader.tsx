import { SafeAreaView, Image, Text, StyleSheet } from 'react-native';


const ProfileHeader = () => {
    const pages = ["Shop", "Saved", "Messages"]

    return (
            <SafeAreaView style={styles.view}>
                <Text style={styles.username}>
                    Username
                </Text>
                <Text>
                <Image style={styles.prof_pic} source={require("../../assets/profpic_default.png")}/>
                    {/* <Text style={styles.follow_header}>3 Items</Text> */}
                    {/* <ProfStats/> */}
                    {/* <Text style={styles.follow_header}>5 Followers</Text>
                    <Text style={styles.follow_header}>4 Following</Text> */}
                <Image style={styles.stats_pic} source={require("../../assets/profstats.png")}/>
                </Text>
                <Image style={styles.ratings} source={require("../../assets/ratings.png")}/>
            
            </SafeAreaView>
    )
}

const ProfStats = () => {
    return(
        <SafeAreaView>
            <Text>
                Items
            </Text>
        </SafeAreaView>
    );
    
}

export default ProfileHeader;

const styles = StyleSheet.create ({
    view: {
        justifyContent: 'center', 
        height: 75, 
        marginTop: 20,
        marginBottom: 30,
        marginLeft: 20,
        marginRight: 20,
        flex: 1
    },
    username: {
        textAlign: 'left',
        fontSize: 25,
        marginBottom: 5,
        fontWeight: "bold"
    },
    prof_pic: {
        height: 50, 
        width: 50, 
        resizeMode: "cover"
    },
    stats_pic: {
        marginLeft: 50,
        height: 50, 
        width: 200, 
        resizeMode: "cover"
    },
    ratings: {
        height: 25, 
        width: 95,
        resizeMode: "cover"
    },
    follow_header: {
        marginLeft: 10,
        
        fontWeight: "bold"
    }
 })