import img from "../assets/selfhug.png"
import { LuHandHeart } from "react-icons/lu";
import { FaHeart} from "react-icons/fa";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { AiOutlineSmile } from "react-icons/ai";
import { RiChatSmileAiLine } from "react-icons/ri";
import { GoSmiley } from "react-icons/go";
export default 

function Body(){
    return(<div style={{textAlign:"center",    
      backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWaVK8ZBzv--Nzn0RavlMK9MiM4MDAGeTJ4TJrS0coabr8jukLV7sO48L3XLDAgFxL24&usqp=CAU)",
        position: "relative",
        backgroundSize: "cover",
        color:"#000000d3",
        paddingTop:"20px",padding:"40px",
        width:"fit-content",
        
    }}>

        <img src={img} style={{backgroundBlendMode:"overlay",
          borderRadius:"50%",
          opacity:"0.6",
          transform:"translate(0px ,90px)",
          border:"3px solid #000000d3"}}/>
     <div style={{display:"flex",
        flexDirection:"column",fontFamily:"cursive",
        flexWrap:"wrap"}}>   <p style={{fontSize:"11rem",letterSpacing:"2px"}}>welcome to self help
          <p style={{display:"flex",
        flexDirection:"column",fontFamily:"cursive",
        flexWrap:"wrap",color:"#000000d3",fontSize:"4rem"}}>you are probably wondering what is self help?
   <p style={{display:"flex",
        flexDirection:"column",fontFamily:"cursive",
        flexWrap:"wrap",color:"#000000d3",fontSize:"3rem"}}>self help is a platform dedicated at help one achieve their self improvement goals by providing them with tools ad resources they will need all in one place <p style={{color:"#000000d3",fontSize:"2.5rem"}}>and yes you guessed it all that is done right here
   <p style={{display:"flex",
        flexDirection:"column",fontFamily:"cursive",
        flexWrap:"wrap",color:"#000000d3"}}>we also seek to be a safe place for everyone to grow and improve as a community  <p style={{color:"#000000d3"}}>with that said welcome home <FaHeart/> </p>
   </p>
   </p>
  </p>
  </p></p>
   
 <p style={{fontSize:"9rem",letterSpacing:"2px",color:"#000000d3",transform:"translate(0px,-15rem)"}}>subscription plans?</p>
  <div style={{display:"flex",justifyContent:"center"}}>
  <table style={{backgroundColor:"#000000d3",letterSpacing:"1px",width:"80rem",transform:"translate(0px,-15rem)"}}>
    
    <tr style={{backgroundColor:"#f2f2f2",width:"4rem",margin:"3rem"}}>
        <th>free plan</th>
        <th> 6 months plan ($30.99) <BiPurchaseTagAlt/></th>
        <th> yearly plan ($55.99) <BiPurchaseTagAlt/></th>
      </tr>
  
      <tr style={{backgroundColor:"#f2f2f2",widthMin:"4rem",whiteSpace:"wrap"}}>
        <th>access 3 great books for free recommended for you,
          community posting,and one on one conversations with me for all intrested parties <GoSmiley/></th>
        <th>access to all features including all books, poetry ,audio books ,our recommendations for youtube channels to help you on your journey,and activate background music,more tips ad tricks and plus all free features <AiOutlineSmile/></th>
        <th> has all the perks of the previous but cheaper in the long run <RiChatSmileAiLine/></th>
      </tr>
      
  
    </table >
  </div>
</div>  </div>);
}