import LocalizedStrings from "react-localization";

const lang = {
  en: {
    title: "Application for notes managing",
    addNew: "Add new note",
    add: "Pridat",
    note: "Note",
    BSC: "BSC",
    cancel: "Cancel",
    delete: "delete",
    edit: "Edit",
    save: "Save"
  },
  cz: {
    title: "Aplikace pro spravu poznamek",
    addNew: "Pridat novou poznamku",
    add: "Pridat",
    note: "Poznamka",
    BSC: "BSC",
    cancel: "Zrusit",
    delete: "Vymazat",
    edit: "Upravit",
    save: "Ulozit"
  }
};

export const strings = new LocalizedStrings(lang);
