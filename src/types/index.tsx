interface area {
    id: number,
    name: string,
}

interface team {
    id: number,
    name: string,
    crestUrl: string,

}

interface table {
    position: number,
    team: team,
    playedGames: number,
    form: null,
    won: number,
    draw: number,
    lost: number,
    points: number,
    goalsFor: number,
    goalsAgainst: number,
    goalDifference: number

}

export interface dataApi {
    competition: {
        id: string,
        area: area,
        name: string,
        code: string,
        plan: string,
        lastUpdated: string
    },
    filters: {},
    season: {
        id: number,
        startDate: string,
        endDate: string,
        winner: null | string,
    },
    standings: [
        {
            stage: string,
            type: string,
            group: null, 
            table: table [],
        }
    ]
}