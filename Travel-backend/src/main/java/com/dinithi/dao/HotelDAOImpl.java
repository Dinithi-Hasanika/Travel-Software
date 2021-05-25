package com.dinithi.dao;

import com.dinithi.entity.Hotel;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class HotelDAOImpl implements HotelDAO {

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Hotel> getHotels() {

        Session session = sessionFactory.getCurrentSession();

        Transaction tx = session.beginTransaction();

        Query hotelQuery = session.createQuery("from Hotel order by name");

        List<Hotel> hotels = (List<Hotel>)hotelQuery.list();

        tx.commit();
        return hotels;
    }

    @Override
    public Hotel getHotelById(int id) {
        return null;
    }

    @Override
    public void saveHotel(Hotel hotel) {

        Session session = sessionFactory.getCurrentSession();

        Transaction tx = session.beginTransaction();

        session.saveOrUpdate(hotel);

        tx.commit();
    }

    @Override
    public void deleteHotel(int id) {

    }
}
