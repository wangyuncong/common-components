import React,{Component} from 'react'
class DateTime extends Component{
    constructor(){
        super()
        this.state = {
            currentFirstDate:null,
            DataArr:[]
        }
        this.FormatDate = this.FormatDate.bind(this)
        this.AddDate = this.AddDate.bind(this)
        this.SetDate = this.SetDate.bind(this)
        this.LastWeek = this.LastWeek.bind(this)
        this.NextWeek = this.NextWeek.bind(this)
    }
    componentDidMount(){
        this.SetDate(new Date());
    }
    FormatDate(date){
        var year = date.getFullYear() + '年';
        var month = (date.getMonth() + 1) + '月';
        var day = date.getDate() + '日';
        var week = '(' + [
            '星期天',
            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五',
            '星期六'
        ][date.getDay()] + ')';
        return year + month + day + ' ' + week;
    }
    AddDate(date,n){
        date.setDate(date.getDate() + n);
        return date;
    }
    SetDate(date){
        var week = date.getDay() - 1;
        date = this.AddDate(date, week * -1);
        this.setState({
            currentFirstDate:new Date(date)
        })
        let arr = []
        for (var i = 0; i < 7; i++) {
            this.state.DataArr[i] = this.FormatDate(i == 0
                ? date
                : this.AddDate(date, 1));
            }
    }
    LastWeek(){
        let that = this
        this.SetDate(that.AddDate(this.state.currentFirstDate, -7));
    }
    NextWeek(){
        let that = this
        this.SetDate(that.AddDate(this.state.currentFirstDate, 7));
    }
    render(){
        return (
            <div>
                 <button onClick={this.LastWeek}>上一周</button><button onClick={this.NextWeek}>下一周</button>
                <table>
                    <tr>
                        {
                            this.state.DataArr.map((v,i)=>{
                                return <td key={i}>{v}</td>
                            })
                        }
                    </tr>
                </table> 
            </div>
        )
    }
}
export default DateTime