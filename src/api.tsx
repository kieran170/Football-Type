import axios from "axios";

export const getLeagues = (nation: string) => {
  return axios
    .get(
      `http://api.football-data.org/v2/competitions/${nation}/standings`,
      {
        headers: { "X-Auth-Token": "bb5c9f0b8e1a442ea833002ce9111d90" },
      }
    )
    .then(({ data }) => {
      return data;
    });
};

export const getGoalScorers = (nation: string) => {
  return axios
    .get(
      `http://api.football-data.org/v2/competitions/${nation}/scorers`,
      {
        headers: { "X-Auth-Token": "bb5c9f0b8e1a442ea833002ce9111d90" },
      }
    )
    .then(({ data }) => {
      return data;
    })
};

export const getTeamData = (team_id: string) => {
  return axios
    .get(
      `http://api.football-data.org/v2/teams/${team_id}`,
      {
        headers: { "X-Auth-Token": "bb5c9f0b8e1a442ea833002ce9111d90" },
      }
    )
    .then(({ data }) => {
      return data;
    })
};