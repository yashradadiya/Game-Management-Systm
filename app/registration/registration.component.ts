import { Component } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
 })

export class REGISTRATIONComponent {

  
  gameOptions: Record<string, string[]> = {
    "Cricket": ["Cricket"],
    "Volleyball": ["Volleyball"],
    "Basketball": ["Basketball"],
    "Badminton": ["Badminton"],
    "Tennis" : ["Tennis"],
    "FootBall" : ["FootBall"]

  };

  gameTimings: Record<string, string> = {
    "Cricket": "7:00 AM to 8:45 AM",
    "Volleyball": "9:00 AM to 10:30 AM",
    "Basketball": "10:45 PM to 12:45 PM",
    "Badminton" : "1:00 PM To 1:45 PM",
    "FootBall" : "2:00 PM To 3:30 PM",
    "Tennis" : "3:45 PM To 4:30 PM"
  };

  playerName: string | undefined;
  playerAge: number | undefined;
  playerMobile: string | undefined;
  gender: string | undefined;
  playerEmail: string | undefined;
  playerAddress: string | undefined;
  playerCity: string | undefined;
  selectedGames: string[] = [];



  onChangeGames(event: any) {
    const value = parseInt(event.target.value, 10);
    this.selectedGames = [];
    for (let i = 0; i < value; i++) {
      this.selectedGames.push("");
    }
  }
  


  onChangeGame(index: number, event: any) {
    const value = event.target.value;
    this.selectedGames[index] = value;
  }
  onSubmit() {
    console.log("Form submitted!");
    console.log("Selected games: ", this.selectedGames);
    console.log("Player name: ", this.playerName);
    console.log("Player age: ", this.playerAge);
    console.log("Player mobile number: ", this.playerMobile);
    console.log("Player email id: ", this.playerEmail);
    console.log("Selected games and timings:");
    for (let i = 0; i < this.selectedGames.length; i++) {
      console.log(`Game ${i+1}: ${this.selectedGames[i]}, Timing: ${this.gameTimings[this.selectedGames[i]]}`);
    }
    console.log("Player address: ", this.playerAddress);
    console.log("Player city: ", this.playerCity);
  }
  }

