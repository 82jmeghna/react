import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SpinnerLoader from '../../components/SpinnerLoader/SpinnerLoader';
import {getOrders} from '../../actions/OrderActionMethods';

import './order.css';

class OrderList extends React.Component {
  componentDidMount() {
    this.props.getOrders();
  }

  handleRefreshClick = () => {
    this.props.getOrders();
  };

  render() {
    const {isLoading, orders} = this.props;
    return (
      <div className="main-container">
        {
          isLoading ?
            <SpinnerLoader/>
            :
            <div className="container">
              <h1>Orders <button className="btn btn-success" onClick={this.handleRefreshClick}>Refresh</button></h1>
              <div className="header-section">
              {
                orders.map(order => <div className="order-container">
                  <div className="order-header">Order Id: {order.id}</div>
                  <div className="order-content">
                    <div>
                      <span className="order-label">Customer: </span>
                      <span className="order-details">{order.customer.first_name} {order.customer.last_name}</span>
                    </div>
                    <div>
                      <span className="order-label">Email: </span>
                      <span className="order-details">{order.contact_email || 'Not available'}</span>
                    </div>
                    <div>
                      <span className="order-label">Total Items: </span>
                      <span className="order-details">{order.line_items.length}</span>
                    </div>
                    <div>Items:</div>
                    <div className="item-list">
                      {
                        order.line_items.map(item =>
                          <div className="item-container">
                            <h5>
                              <span>Title:</span>
                              <span>{item.title}</span>
                            </h5>
                            <div className="table-disc">
                            <div className="price_data">
                              <span><b>Discount</b> : {item.total_discount}</span>
                              <span className="txt-right"><b>Quantity</b> : {item.quantity}</span>
                            </div>
                            <div className="price_data">
                              <span><b>Gift card</b> : {item.gift_card}</span>
                              <span className="txt-right"><b>Weight</b> : {item.grams}</span>
                            </div>
                            </div>
                            <div className="price_table">
                              <p>Price: {item.price}</p>
                            </div>
                          </div>)
                      }
                    </div>
                  </div>
                </div>)
              }
              </div>
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    orders: state.OrderReducer.orders
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({getOrders}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);