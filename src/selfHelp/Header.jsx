import { LuHandHeart } from "react-icons/lu";
export default 

function Header(props){
    return(<div style={{display:"flex",
        justifyContent:"space-between",
        flexWrap:"nowrap",
        paddingLeft:"20px",
        minWidth:"100%",
    color:"#000000C1",
    borderBottom:"2px solid ",
    fontFamily:"cursive",transform:"translateY(1.3px)"}}>
        <h1 style={{outline:"auto",padding:"3px"}}>self<sub>help</sub> <LuHandHeart/></h1>
     <div  style={{display:"flex", color:"#000000BE",
        justifyContent:"space-between",
        gap:"8px",fontFamily:"cursive",
        transform:"translate(-1rem,1.6rem)",
        fontSize:"1.4rem"}}>
          {props.home? <></>:<a href="/"><p style={{
                            outline:"auto", 
                            color:"#000000BE"}}>- home -</p></a> 
   }   
             <a href="/home"><p style={{outline:"auto", color:"#000000BE"}}>- products -</p></a> 
   
    <a href="/community"><p style={{outline:"auto", color:"#000000BE"}}>- community -</p></a>   
    <a><p style={{outline:"auto", color:"#000000BE"}}>- log in -</p></a>  
     </div>   
    </div>);
}