export const getTimeStampFormattedStock = (timestamp) => {
  const lang = getLang();
  const date = new Date(timestamp);

  let dateMounted,
    timeMounted,
    day = date.getDate(),
    month = months[lang][date.getMonth()],
    year = date.getFullYear(),
    hours = date.getHours(),
    minutes = date.getMinutes();

  if (lang == "PT-BR") {
    dateMounted = `${day} de ${month} de ${year}`;
    timeMounted = `${hours}:${minutes}hrs`
  }
  if (lang == "EN") {
    dateMounted = `${month} ${day}, ${year}`;
    timeMounted = `${hours}:${minutes}`

  }

  return `${dateMounted} - ${timeMounted}`;
};

const getLang = () => {
  const lang = localStorage.getItem("lang");
  if (lang) return lang;
  return "EN";
};

export const months = {
  EN: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  "PT-BR": [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
};
