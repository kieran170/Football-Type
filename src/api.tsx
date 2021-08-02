import axios from "axios";
import {APIKEY} from './secerts'

export const getLeagues = (nation: string) => {
  return axios
    .get(
      `https://api.football-data.org/v2/competitions/${nation}/standings`,
      {
        headers: { "X-Auth-Token": APIKEY },
      }
    )
    .then(({ data }) => {
      return data;
    });
};

export const getGoalScorers = (nation: string) => {
  return axios
    .get(
      `https://api.football-data.org/v2/competitions/${nation}/scorers`,
      {
        headers: { "X-Auth-Token": APIKEY },
      }
    )
    .then(({ data }) => {
      return data;
    })
};

export const getTeamData = (team_id: string) => {
  return axios
    .get(
      `https://api.football-data.org/v2/teams/${team_id}`,
      {
        headers: { "X-Auth-Token": APIKEY },
      }
    )
    .then(({ data }) => {
      return data;
    })
};

export const getTeamFixtures = (team_id: string) => {
  return axios
    .get(
      `https://api.football-data.org//v2/teams/${team_id}/matches`,
      {
        headers: { "X-Auth-Token": APIKEY },
      }
    )
    .then(({ data }) => {
      return data;
    })
};

export const getLeagueFixtures = (leagueNum: string, matchday: string) => {
  return axios
  .get(
    `https://api.football-data.org/v2/competitions/${leagueNum}/matches?matchday=${matchday}`,
    {
      headers: { "X-Auth-Token": APIKEY },
    }
  )
  .then(({ data }) => {
    return data;
  })
}