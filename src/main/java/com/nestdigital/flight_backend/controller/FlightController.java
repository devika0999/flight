package com.nestdigital.flight_backend.controller;

import com.nestdigital.flight_backend.dao.FlightDao;
import com.nestdigital.flight_backend.model.FlightModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FlightController {

    @Autowired
    private FlightDao dao;

    @CrossOrigin(origins = "*")
    @PostMapping(path = "/addflight", consumes = "application/json",produces = "application/json")
    public String AddFlight(@RequestBody FlightModel flight)
    {
        dao.save(flight);
        return "{status:'success'}";
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/flightview")
    public List<FlightModel> ViewFlight()
    {
        return (List<FlightModel>)dao.findAll();
    }
}
