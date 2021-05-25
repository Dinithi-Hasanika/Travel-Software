package com.dinithi.service;

import com.dinithi.dao.HotelDAO;
import com.dinithi.entity.Hotel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class HotelServiceImpl implements HotelService{

    @Autowired
    private HotelDAO hotelDAO;

    @Override
    @Transactional
    public List<Hotel> getHotels() {
        return hotelDAO.getHotels();
    }

    @Override
    @Transactional
    public Hotel getHotelById(int id) {
        return null;
    }

    @Override
    @Transactional
    public void saveHotel(Hotel hotel) {
        hotelDAO.saveHotel(hotel);
    }

    @Override
    @Transactional
    public void deleteHotel(int id) {

    }
}
