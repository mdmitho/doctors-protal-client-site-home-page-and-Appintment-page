import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([])


useEffect(()=>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
},[])

    return (
      <div>
        <h1 className='text-xl text-center text-secondary'>Available Appointments on {format(date, "pp")}</h1>
      </div>
    );
};

export default AvailableAppointments;