export interface Matches{
    awayTeam: Team;
    group: null;
    homeTeam: Team;
    id: number;
    lastUpdated: string;
    matchday: number;
    score: Score
    season: Season
    stage: string;
    status: string;
    utcDate: string;
}

interface Team {
    id: number;
    name: string;
}

interface Score {
    fullTime: FullTime
}
interface FullTime {
    homeTeam: number | null;
    awayTeam: number | null;
}

interface Season {
    currentMatchday: number;
    endDate: string;
    id: number;
    startDate: string;
}