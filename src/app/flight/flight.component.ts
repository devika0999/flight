import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor(private myapi:ApiService) { 

    
  }

  id=""
  name=""
  origin=""
  destination=""
  capacity=""

  readValues=()=>{
    let data={
      "id":this.id,
  "name":this.name,
  "origin":this.origin,
  "destination":this.destination,
  "capacity":this.capacity

    }
    console.log(data)
    this.myapi.addFlight(data).subscribe(
      (response)=>{
        console.log(response)
        alert("added")
      }
    )
  }
  
  ngOnInit(): void {
  }

}
