import {useState} from "react";

function Folder({datas}){
  const [expand,setExpand] = useState();
  if(datas.isFolder)
{
  return( <div>
<span onClick={()=>setExpand(!expand)}>
{datas.name}
<br/>
</span>
<div style={{display:expand ? "block" : "none",paddingLeft:"15px"}}>
  {datas.items.map((folders)=>{
    return <Folder key = {folders.name} datas={folders}/>;
  })}
  </div>
</div>
);
}else{
  return <span>{datas.name}<br/></span>
}

}

export default Folder
