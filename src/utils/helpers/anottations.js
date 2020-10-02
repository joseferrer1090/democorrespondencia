import {
  COUNT_NOVELTIES_ANNOTATIONS,
  NOVELTIES_ANNOTATIONS,
  CONGLOMERATES_STATUS,
  COMPANY_BY_CONGLOMERATE,
  HEADQUARTER_BY_COMPANY,
  DEPENDENCIES_BY_HEADQUARTER,
  GROUP_USERS_ACTIVE,
  SEARCH_BY_USERNAME,
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
  const responsesanottations = await fetch(
    `${NOVELTIES_ANNOTATIONS}?page=0&size=10`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + token,
      },
    }
  );
  const anottations = await responsesanottations.json();
  const { content } = anottations;
  //console.log(content);
  return { anottations, content };
};

// PAGINACION EN LA ANOTACION
export const PaginationAnottations = async (token, page) => {
  page -= 1;
  const responses = await fetch(
    `${NOVELTIES_ANNOTATIONS}?page=${page}&size=10`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
  const anottations = await responses.json();
  const { totalPages, totalElements, size, number } = anottations;
  const content = anottations.content;
  return { anottations, totalElements, totalPages, size, number, content };
};
// FIN

// SELECT DE CONGLOMERADO FILTRO
export const dataSelectConglomerado = async (token) => {
  const responses = await fetch(`${CONGLOMERATES_STATUS}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return await responses.json();
};
//FIN

// SELECT DE EMPRESA FILTRO
export const dataSelectEmpresa = async (token, idconglomerado) => {
  let responses;
  if (idconglomerado === null || idconglomerado === undefined) {
    return (responses = []);
  } else {
    return (responses = await fetch(
      `${COMPANY_BY_CONGLOMERATE}${idconglomerado}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((responses) => responses.json())
      .catch((error) => {
        return [];
      }));
  }
};
//FIN

// SELECT DE SEDE FILTRO
export const dataSelectSede = async (token, idempresa) => {
  let responses;
  if (idempresa === null || idempresa === undefined) {
    return (responses = []);
  } else {
    return (responses = await fetch(`${HEADQUARTER_BY_COMPANY}${idempresa}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((responses) => responses.json())
      .catch((error) => {
        return [];
      }));
  }
};
//FIN

// SELECT DE DEPENDENCIA FILTRO
export const dataSelectDependencia = async (token, idsede) => {
  let responses;
  if (idsede === null || idsede === undefined) {
    return (responses = []);
  } else {
    return (responses = await fetch(`${DEPENDENCIES_BY_HEADQUARTER}${idsede}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((responses) => responses.json())
      .catch((error) => {
        return [];
      }));
  }
};
// FIN

// FILTRO DE USUARIOS POR GRUPO

export const dataGroupUsers = async (token) => {
  const responses = await fetch(`${GROUP_USERS_ACTIVE}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });
  return await responses.json();
};

// FIN

// BUSCADOR POR NOMBRE DE USUARIO
export const searchUserbyName = async (token, name) => {
  const responses = await fetch(`${SEARCH_BY_USERNAME}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      name: name,
    }),
  });
  return await responses.json();
};
// FIN

// LISTA DE USUARIOS POR DEPENDENCIA FILTRO 1
export const userListDependence = async (token, iddependencia) => {
  const responses = await fetch(
    `http://localhost:8090/api/sgdea/service/configuration/users/dependence/${iddependencia}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    }
  );
  return await responses.json();
};
// FIN
