package com.dinithi.service;

import com.dinithi.entity.Hotel;

import java.util.List;

public interface HotelService {

    List<Hotel> getHotels();

    Hotel getHotelById(int id);

    void saveHotel(Hotel hotel);

    void deleteHotel(int id);
}
