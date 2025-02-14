import Header from "./selfHelp/Header";
import Body from "./selfHelp/Body";
import Footer from "./selfHelp/Footer";

export default function SelfHelp() {
    return (
        <div
            style={{
                backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWaVK8ZBzv--Nzn0RavlMK9MiM4MDAGeTJ4TJrS0coabr8jukLV7sO48L3XLDAgFxL24&usqp=CAU)",
                width: "100vw",
                height: "100vh",
                position:"relative",
               transform:"translate(-1rem,-1.6rem)",
                
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Header home={true}/>
            <Body/>
            <Footer/> 
        </div>
    );
}