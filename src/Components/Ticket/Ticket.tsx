import './Ticket.scss'
import s7logo from '../../Assets/img/S7Logo.png'

const Ticket = () => {
  return (
    <div className='ticket'>
      <div className='ticket-header'>
        <h2 className='ticket-header__price'>13 400 ₽</h2>
        <img className='ticket-header__logo' src={s7logo} alt='Логотип авиакомпании' />
      </div>
      <div className='ticket-content'>
        <div className='ticket-content-info'>
          <span className='ticket-content-info__title'>MOW – HKT</span>
          <p className='ticket-content-info__value'>10:45 – 08:00</p>
        </div>
        <div className='ticket-content-info'>
          <span className='ticket-content-info__title'>В пути</span>
          <p className='ticket-content-info__value'>21ч 15м</p>
        </div>
        <div className='ticket-content-info'>
          <span className='ticket-content-info__title'>2 пересадки</span>
          <p className='ticket-content-info__value'>HKG, JNB</p>
        </div>
      </div>
      <div className='ticket-content'>
        <div className='ticket-content-info'>
          <span className='ticket-content-info__title'>MOW – HKT</span>
          <p className='ticket-content-info__value'>11:20 – 00:50</p>
        </div>
        <div className='ticket-content-info'>
          <span className='ticket-content-info__title'>В пути</span>
          <p className='ticket-content-info__value'>13ч 30м</p>
        </div>
        <div className='ticket-content-info'>
          <span className='ticket-content-info__title'>1 пересадка</span>
          <p className='ticket-content-info__value'>HKG</p>
        </div>
      </div>
    </div>
  )
}
export default Ticket
