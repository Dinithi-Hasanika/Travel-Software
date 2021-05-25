package com.dinithi.dao;

import com.dinithi.entity.Hotel;

import java.util.List;

public interface HotelDAO {

    List<Hotel> getHotels();

    Hotel getHotelById(int id);

    void saveHotel(Hotel hotel);

    void deleteHotel(int id);
}
