export interface player {
    countryOfBirth: string;
    dateOfBirth: string;
    firstName: string;
    id: number;
    lastName: null;
    lastUpdated: string;
    name: string;
    nationality: string;
    position: string;
    shirtNumber: null;
}

export interface team {
    id: number;
    name: string;
}

export interface scorersApi {
    numberOfGoals: number;
    player: player;
    team: team;
}