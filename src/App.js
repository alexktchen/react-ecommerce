
import './App.css';
import ListHeader from './components/widgets/listheader/ListHeader'
import ListItem from './components/widgets/listitem/ListItem'
import React, { Component } from 'react';

class App extends Component {

  state = {
    data: {
      orders: [
        {
          name: 'Livi優活 抽取式衛生紙(100抽x10包x10串/箱)',
          logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
          status: {
            code: 3,
            type: '已取消'
          },
          date: '107/6/12'
        },
        {
          name: 'BALMUDA The Toaster 百慕達烤麵包機-黑色',
          logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
          status: {
            code: 2,
            type: '已成立'
          },
          date: '108/7/21'
        },
        {
          name: '贈-短慧萬用鍋HD2133+三合一濾網「LG樂金」韓國原裝...',
          logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
          status: {
            code: 1,
            type: '處理中'
          },
          date: '108/6/2'
        },
        {
          name: 'Apple AirPds 2',
          logo: 'https://static.oopocket.com/store/iconTreemall@3x.png',
          status: {
            code: 4,
            type: '已送達'
          },
          date: '108/3/02'
        }
      ]
    }
  }



  render() {

    const ready = this.state.data.orders.filter(order => order.status.code === 1 || order.status.code === 2);
    const unReady = this.state.data.orders.filter(order => order.status.code === 3 || order.status.code === 4);
    return (
      <div>
        {(ready.length > 0) &&
          <ListHeader text='進行中' />
        }
        {ready.map((item, key) =>
          <div style={{ display: "grid" }}>
            <ListItem name={item.name} date={item.date} statusType={item.status.type} statusCode={item.status.code} logo={item.logo}></ListItem>
          </div>
        )}
        {(unReady.length > 0) &&
          <ListHeader text='已完成' />
        }
        {unReady.map((item, key) =>
          <div style={{ display: "grid" }}>
            <ListItem name={item.name} date={item.date} statusType={item.status.type} statusCode={item.status.code} logo={item.logo}></ListItem>
          </div>
        )}
      </div>
    );
  }
}

export default App;
