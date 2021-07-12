export interface fixtures {
    awayTeam: homeAndAwayTeam;
    competition: competition;
    group: null;
    homeTeam: homeAndAwayTeam;
    id: number;
    lastUpdated: string;
    matchday: number;
    score: score;
    season: season;
    stage: string;
    status: string;
    utcDate: string;
}

interface homeAndAwayTeam {
    id: number;
    name: string;
}

interface competition {
    area: area;
    id: number;
    name: string;
}
interface area {
    code: string;
    ensignUrl: null;
    name: string;
}

interface score {
    duration: string;
    extraTime: timeScore;
    fullTime:  timeScore;
    halfTime:  timeScore;
    penalties: timeScore;
    winner: string;
}

interface timeScore {
    awayTeam: null | number;
    homeTeam: null | number;
}

interface season {
    currentMatchday: number;
    endDate: string;
    id: number;
    startDate: string;
    winner: null;
    stage: string;
    status: string;
    utcDate: string;
}
