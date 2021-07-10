export interface team {
    activeCompetitions: activeCompetitions[]
    address: string;
    area: area;
    clubColors: string;
    crestUrl: string;
    email: string;
    founded: number;
    id: number;
    lastUpdated: string;
    name: string;
    phone: string;
    shortName: string;
    squad: squad[];
    tla: string;
    venue: string;
    website: string;
}

interface activeCompetitions {
    area: area;
    code: string;
    id: number;
    lastUpdated: string;
    name: string;
    plan: string;
}

interface area {
    id: number;
    name: string;
}

interface squad {
    countryOfBirth: string;
    dateOfBirth: string;
    id: number;
    name: string;
    nationality: string;
    position: string;
    role: string;
    shirtNumber: number;
}