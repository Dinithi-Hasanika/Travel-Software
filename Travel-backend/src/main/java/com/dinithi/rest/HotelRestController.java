package com.dinithi.rest;

import com.dinithi.entity.Hotel;
import com.dinithi.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class HotelRestController {

    @Autowired
    private HotelService hotelService;

    @GetMapping("/hotels")
    public List<Hotel> getHotels(){
        return hotelService.getHotels();
    }

    @PostMapping("/hotel")
    public Hotel addHotel(@RequestBody Hotel hotel){
        hotel.setId(0);

        hotelService.saveHotel(hotel);

        return hotel;
    }
}
