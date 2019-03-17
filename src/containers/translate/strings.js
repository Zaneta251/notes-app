import LocalizedStrings from "react-localization";

const lang = {
  en: {
    title: "Application for notes managing",
    addNew: "Add new note",
    add: "Add",
    note: "Note",
    BSC: "BSC",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    save: "Save",
    editSuccess: "Note successfully edited!",
    createSuccess: "Note successfully created!"
  },
  cz: {
    title: "Aplikace pro vytváření a správu poznámek",
    addNew: "Přidat novou poznámku",
    add: "Přidat",
    note: "Poznámka",
    BSC: "BSC",
    cancel: "Zrušit",
    delete: "Vymazat",
    edit: "Upravit",
    save: "Uložit",
    editSuccess: "Poznámka úspěšně upravena!",
    createSuccess: "Poznámka úspěšně vytvořena!"
  }
};

export const strings = new LocalizedStrings(lang);
