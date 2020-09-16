import {
  COUNT_NOVELTIES_ANNOTATIONS,
  NOVELTIES_ANNOTATIONS,
} from "./../../services/EndPoints";

export const loadCountNumberAnottations = async (token) => {
  const responses = await fetch(`${COUNT_NOVELTIES_ANNOTATIONS}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  //const countanottations = await responses.json();
  //   console.log(`El valor de las anotaciones => ${count_anottations} `);
  return await responses.json();
};

export const loadDataNoveltiesAnottations = async (token) => {
  const responsesanottations = await fetch(`${NOVELTIES_ANNOTATIONS}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + token,
    },
  });
  const anottations = await responsesanottations.json();
  const { content } = anottations;
  console.log(content);
  return { anottations, content };
};