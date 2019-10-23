// @flow

import React from 'react';

import Header from './header';

export default function BuyTicket() {
  return (
    <div className="layout">
      <Header title="Comprar Pasaje" />

      <div className="select-container">
        <div className="select-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="17.014" height="22">
            <path d="M8.507 0c4.6 0 8.7 3.8 8.5 8-.2 4.6-6.2 14-8.5 14s-8.3-9.3-8.5-14c-.2-4.2 3.9-8 8.5-8zm0 19.9l.9-.9a33.194 33.194 0 002.4-3.2c1.9-2.9 3.1-5.9 3.2-7.8.1-3.1-3-6-6.5-6s-6.6 2.9-6.5 6c.1 2 1.3 4.9 3.2 7.8a22.188 22.188 0 002.4 3.2 3.819 3.819 0 00.9.9zm0-7.9a3.5 3.5 0 113.5-3.5 3.543 3.543 0 01-3.5 3.5zm0-2a1.5 1.5 0 10-1.5-1.5 1.538 1.538 0 001.5 1.5z" fill="#3497fd" />
          </svg>
        </div>
        <select className="select">
          <option defaultValue>Origen</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <div className="select-icon select-icon--arrow select-icon--pull-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
            <path d="M0 0l4.033 4L8 0z" fill="#78849e" />
          </svg>
        </div>
      </div>

      <div className="select-container">
        <div className="select-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="17.014" height="22">
            <path d="M8.507 0c4.6 0 8.7 3.8 8.5 8-.2 4.6-6.2 14-8.5 14s-8.3-9.3-8.5-14c-.2-4.2 3.9-8 8.5-8zm0 19.9l.9-.9a33.194 33.194 0 002.4-3.2c1.9-2.9 3.1-5.9 3.2-7.8.1-3.1-3-6-6.5-6s-6.6 2.9-6.5 6c.1 2 1.3 4.9 3.2 7.8a22.188 22.188 0 002.4 3.2 3.819 3.819 0 00.9.9zm0-7.9a3.5 3.5 0 113.5-3.5 3.543 3.543 0 01-3.5 3.5zm0-2a1.5 1.5 0 10-1.5-1.5 1.538 1.538 0 001.5 1.5z" fill="#3497fd" />
          </svg>
        </div>
        <select className="select">
          <option defaultValue>Destino</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <div className="select-icon select-icon--arrow select-icon--pull-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
            <path d="M0 0l4.033 4L8 0z" fill="#78849e" />
          </svg>
        </div>
      </div>

      <div className="date-container">
        <div className="select-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="21.107" height="22.503">
            <path d="M15.831 2.046h2.875a2.485 2.485 0 012.4 2.561v15.335a2.484 2.484 0 01-2.4 2.561H2.4A2.485 2.485 0 010 19.942V4.606a2.484 2.484 0 012.4-2.56h2.877V1.023a.961.961 0 111.919 0v1.023h6.716V1.023a.961.961 0 111.919 0zm0 2.046v1.022a.961.961 0 11-1.919 0V4.091H7.2v1.023a.961.961 0 11-1.919 0V4.091H2.4a.5.5 0 00-.483.515v15.336a.5.5 0 00.483.515h16.3a.5.5 0 00.483-.515V4.606a.5.5 0 00-.483-.515zm-5.277 8.183a1.537 1.537 0 111.439-1.534 1.489 1.489 0 01-1.439 1.533zm5.277 0a1.537 1.537 0 111.439-1.535 1.489 1.489 0 01-1.439 1.534zM5.277 17.9a1.537 1.537 0 010-3.069 1.537 1.537 0 010 3.069zm5.277 0a1.537 1.537 0 111.439-1.534 1.489 1.489 0 01-1.439 1.534z" fill="#3497fd" />
          </svg>
        </div>
        <input className="date" type="date" id="travelDate" name="travelDate" />
        <div className="select-icon select-icon--arrow select-icon--pull-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
            <path d="M0 0l4.033 4L8 0z" fill="#78849e" />
          </svg>
        </div>
      </div>

      <div className="time-container">
        <div className="select-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
            <path d="M11 0a11 11 0 1011 11A11 11 0 0011 0zm0 19.871A8.869 8.869 0 012.129 11a8.961 8.961 0 012.218-5.869 8.75 8.75 0 016.653-3 8.871 8.871 0 010 17.742zm2.741-4.631L9.975 12.5a.536.536 0 01-.217-.43V4.79a.534.534 0 01.532-.532h1.42a.534.534 0 01.532.532v6.285l2.958 2.156a.532.532 0 01.115.745l-.834 1.149a.536.536 0 01-.74.115z" fill="#3497fd" />
          </svg>
        </div>
        <input className="time" type="time" id="travelHour" name="travelHour" />
        <div className="select-icon select-icon--arrow select-icon--pull-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
            <path d="M0 0l4.033 4L8 0z" fill="#78849e" />
          </svg>
        </div>
      </div>

      <div className="time-container">
        <div className="select-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="18.176" height="24.238">
            <path d="M16.965.153l-1.818 2.121L12.572.153a.753.753 0 00-.909 0L9.088 2.274 6.513.153a.753.753 0 00-.913 0L3.029 2.274 1.212.153A.757.757 0 000 .759v22.72a.757.757 0 001.212.606l1.818-2.121 2.57 2.121a.753.753 0 00.909 0l2.575-2.121 2.575 2.121a.753.753 0 00.909 0l2.575-2.121 1.818 2.121a.758.758 0 001.212-.606V.759a.757.757 0 00-1.208-.606zm-1.818 16.889a.38.38 0 01-.379.379H3.408a.38.38 0 01-.379-.379v-.757a.38.38 0 01.379-.379h11.36a.38.38 0 01.379.379zm0-4.544a.38.38 0 01-.379.379H3.408a.38.38 0 01-.379-.379v-.757a.38.38 0 01.379-.379h11.36a.38.38 0 01.379.379zm0-4.544a.38.38 0 01-.379.379H3.408a.38.38 0 01-.379-.379v-.758a.38.38 0 01.379-.379h11.36a.38.38 0 01.379.379z" fill="#3497fd" />
          </svg>
        </div>
        <button type="button" className="btn btn--seat">Asiento</button>
      </div>

      <div className="select-container">
        <div className="select-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="17.014" height="22">
            <path d="M8.507 0c4.6 0 8.7 3.8 8.5 8-.2 4.6-6.2 14-8.5 14s-8.3-9.3-8.5-14c-.2-4.2 3.9-8 8.5-8zm0 19.9l.9-.9a33.194 33.194 0 002.4-3.2c1.9-2.9 3.1-5.9 3.2-7.8.1-3.1-3-6-6.5-6s-6.6 2.9-6.5 6c.1 2 1.3 4.9 3.2 7.8a22.188 22.188 0 002.4 3.2 3.819 3.819 0 00.9.9zm0-7.9a3.5 3.5 0 113.5-3.5 3.543 3.543 0 01-3.5 3.5zm0-2a1.5 1.5 0 10-1.5-1.5 1.538 1.538 0 001.5 1.5z" fill="#3497fd" />
          </svg>
        </div>
        <select className="select">
          <option defaultValue>Subo en</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <div className="select-icon select-icon--arrow select-icon--pull-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
            <path d="M0 0l4.033 4L8 0z" fill="#78849e" />
          </svg>
        </div>
      </div>

      <div className="select-container">
        <div className="select-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="17.014" height="22">
            <path d="M8.507 0c4.6 0 8.7 3.8 8.5 8-.2 4.6-6.2 14-8.5 14s-8.3-9.3-8.5-14c-.2-4.2 3.9-8 8.5-8zm0 19.9l.9-.9a33.194 33.194 0 002.4-3.2c1.9-2.9 3.1-5.9 3.2-7.8.1-3.1-3-6-6.5-6s-6.6 2.9-6.5 6c.1 2 1.3 4.9 3.2 7.8a22.188 22.188 0 002.4 3.2 3.819 3.819 0 00.9.9zm0-7.9a3.5 3.5 0 113.5-3.5 3.543 3.543 0 01-3.5 3.5zm0-2a1.5 1.5 0 10-1.5-1.5 1.538 1.538 0 001.5 1.5z" fill="#3497fd" />
          </svg>
        </div>
        <select className="select select--mb40">
          <option defaultValue>Bajo en</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <div className="select-icon select-icon--arrow select-icon--pull-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
            <path d="M0 0l4.033 4L8 0z" fill="#78849e" />
          </svg>
        </div>
      </div>

      <button type="button" className="btn">Finalizar</button>
    </div>
  );
}
