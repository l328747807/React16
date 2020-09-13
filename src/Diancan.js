import React, { Component } from 'react';

class Diancan extends Component {
    constructor(props){
      super(props)
      this.state={
        initValue:null,
        list:["甜点","蛋糕","果盘"]
      }
    }
    deleteItem = (e,index)=>{
      console.log(index)
    }
    render() {
        return (
            <>
                <div>
                    <input type="button" value="增加类型" />
                </div>
                <ul>
                    {
                      this.state.list.map((item,index)=>{
                        return (
                          <li key={index+item}
                              onClick={this.deleteItem.bind(this,index)}>
                            item
                          </li>
                        )
                      })
                    }
                </ul>
            </>
        );
    }
}

export default Diancan;
