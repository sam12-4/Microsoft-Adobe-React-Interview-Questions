import Accordian from "./components/Accordian"
import Carousel from "./components/Carousel"
import LoadMoore from "./components/LoadMoore"
import RandomColor from "./components/RandomColor"
import Rating from "./components/Rating"
import TreeView from "./components/treeView/Index"
import menusData from "./components/treeView/data" 
// import { sideMenus } from "./components/treeView/Menus"

function App() {
  return <>
  {/* <div></div> */}
  <Accordian />
  <RandomColor />
  <Rating />
  <Carousel url={'https://picsum.photos/v2/list'} page={1} limit={3} />
  <LoadMoore />

  <TreeView  list={menusData}/>
  {/* <p>{menusData[0]}</p> */}
  {/* {menusData.map((i, _)=>{
    return <p>{i.label}</p>
  })} */}
  </>
}

export default App
