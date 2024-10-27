

export class ModelsComponent {



}

let FGAS_SHOWED_COLUMNS;

let FGAS_FILLABLE_COLUMNS = [
  "id",
  "quantita",
  "locazione",
  "prezzo",
  "metri_quadri",
  "tipo",
  "numero_stanze",
  "bagni",
  "balcone",
  "anno_costruzione",
  // "condominio",
  // "piano",
  // "ascensore",
  // "riscaldamento",
  // "aria_condizionata",
  // "cucina",
  // "posto_auto",
  // "giardino",
  // "descrizione",
  // "foto"
];

let SEARCH_COLUMNS = ["quantita", "locazione"]

FGAS_SHOWED_COLUMNS = FGAS_FILLABLE_COLUMNS;

export {FGAS_FILLABLE_COLUMNS,FGAS_SHOWED_COLUMNS, SEARCH_COLUMNS};