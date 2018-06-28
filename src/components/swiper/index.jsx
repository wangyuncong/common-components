import React,{Component} from 'react'
import './style.css'
class Swiper extends Component{
    constructor(){
        super()
        this.state = {
            content:[1,2,3,4,5]
        }
        this.MouseDown = this.MouseDown.bind(this)
        this.onMouseUp = this.onMouseUp.bind(this)
    }
    MouseDown(e){
        var oDiv = this.refs.Dom
        let oDivLeft = this.refs.Dom.offsetLeft
        console.log(oDivLeft)
        oDiv.onmousemove = function(e){  
            e = e || window.event;   
            
            console.log('e.pageX:'+e.pageX);  
        } 
    }
    onMouseUp(e){
        console.log(8520)
        e = e || window.event;   
        console.log('e.pageX:'+e.pageX); 
        this.refs.Dom.onmousemove = null
    }
    render(){
        return (
            <div className='swiper-container' onMouseDown={this.MouseDown} onMouseUp={this.onMouseUp} ref='Dom'>
                {
                    this.state.content.map((v,i)=>{
                    return <div key={i} className={"swiper-slide"} style={{left:800*i}}>
                        {v}
                    </div>
                    })
                }
            </div>
        )
    }
}
export default Swiper