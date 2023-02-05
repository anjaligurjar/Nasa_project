function  usePlates(){
    const [planets, saveplates]= useState([]);
    const getPlanets=useCallback(async()=>{
    const fetchedplanets=await httpGetPlanets()
    saveplates(fetchedplanets)
})
}
module.exports= {usePlates}