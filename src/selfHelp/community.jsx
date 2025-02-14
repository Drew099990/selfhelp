import Header from "./Header";
import Footer from "./Footer";
import CommunityBody from "./communityBody";
export default 

function Community(){
    return(<div>
        <Header home={false}/>
        <CommunityBody/>
        <Footer/>
    </div>);
}