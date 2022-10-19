package com.nestdigital.flight_backend.dao;

import com.nestdigital.flight_backend.model.FlightModel;
import org.springframework.data.repository.CrudRepository;

public interface FlightDao extends CrudRepository<FlightModel,Integer> {
}
