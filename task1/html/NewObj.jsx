import React, { Component } from 'react'

export class NewObj extends Component {
  render() {
    return (
      <>
        <ul className="items">
          <li className="items__item">
            <h2 className="items-item__location">1) Магазин "Пятерочка"</h2>
            <div className="items-item__values">
              <h2 className="items-item-values__date">20.12.2003</h2>
              <h2 className="items-item-values__cash">1029 Р</h2>
              <div className="items-item-values__buttons">
                <div className="items-item-values-buttons__button">
                  <button className="items-item-values-buttons-button__rename"></button>
                </div>
                <div className="items-item-values-buttons__button">
                  <button className="items-item-values-buttons-button__delete"></button>
                </div>
              </div>
            </div>
          </li>
          <li className="items__item">
            <h2 className="items-item__location">2) Магазин "Магнит"</h2>
            <div className="items-item__values">
              <h2 className="items-item-values__date">13.03.2020</h2>
              <h2 className="items-item-values__cash">2321 Р</h2>
              <div className="items-item-values__buttons">
                <div className="items-item-values-buttons__button">
                    <button className="items-item-values-buttons-button__rename"></button>
                  </div>
                  <div className="items-item-values-buttons__button">
                    <button className="items-item-values-buttons-button__delete"></button>
                  </div>
                </div>
            </div>
          </li>
          <li className="items__item">
            <h2 className="items-item__location">3) Магазин "Эльдорадо"</h2>
            <div className="items-item__values">
              <h2 className="items-item-values__date">29.06.2023</h2>
              <h2 className="items-item-values__cash">6650 Р</h2>
              <div className="items-item-values__buttons">
                <div className="items-item-values-buttons__button">
                  <button className="items-item-values-buttons-button__rename"></button>
                </div>
                <div className="items-item-values-buttons__button">
                  <button className="items-item-values-buttons-button__delete"></button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </>
    )
  }
}

export default NewObj
