import React, { Component } from 'react'

export class Body extends Component {
  render() {
    return (
      <>
        <div className="body"> 
          <div className="body__location">
            <h4 className="body-location__text">
              Куда было потрачено:
            </h4>
            <input type="text" className="body-location__input" placeholder="Куда было потрачено:"/>
          </div>
          <div className="body__cash">
            <h4 className="body-cash__text">
              Сколько было потрачено:
            </h4>
            <input type="number" className="body-cash__input" placeholder="Сколько было потрачено:"/>
          </div>
          <button type="submit" className="body__submit">Добавить</button>
        </div>
        <div className="money">
          <h2 className="money__sum">
            Итого: 10000
          </h2>
        </div>
      </>
    ) 
  }
}

export default Body
