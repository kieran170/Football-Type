interface area {
    id: number,
    name: string,
}

export interface Iteam {
    id: number,
    name: string,
    crestUrl: string,

}

export interface Itable {
    position: number,
    team: Iteam,
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
            table: Itable[],
        }
    ]
}

export interface lookup {
    [key: string]: string
}

export interface standings {
    stage: string,
    type: string,
    group: null,
    table: Itable[],
}